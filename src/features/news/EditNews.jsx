import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from "formik";
import { useAddNewsMutation, useUpdateNewsMutation } from "./newsApi";
import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { valSchema } from "./AddNewsForm";

export default function EditNews({product}) {
    const nav=useNavigate();
    const [updateNews,{isLoading}]=useUpdateNewsMutation()

  return (
    <div className="p-5">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Edit News Form</CardTitle>
          <CardDescription>Enter News Details</CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              title: product.title,
              detail: product.detail,
              author: product.author
            }}
            onSubmit={async (val) => {
                try {
                    await updateNews({
                    id:product.id,
                    body:val
                    }).unwrap()
                    toast.success("Nes update successfully");
                    nav(-1);
                } catch (error) {
                    toast.error(error.data);
                    
                }
               
            }}
            validationSchema={valSchema}
          >
            {({ handleChange, values, errors, touched, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                     id="title"
                     name="title"
                     onChange={handleChange}
                     value={values.title}
                      placeholder="title"
                        />
                    {errors.title && touched.title &&<p className="text-red-500">{errors.title}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="detail">Detail</Label>
                    <Textarea
                    name="detail"
                    onChange={handleChange}
                    value={values.detail}
                    id="detail" placeholder="details"  />
                    {errors.detail && touched.detail &&<p className="text-red-500">{errors.detail}</p>}

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                    name="author"
                    onChange={handleChange}
                    value={values.author}
                    id="author" placeholder="author"  />
                     {errors.author && touched.author &&<p className="text-red-500">{errors.author}</p>}

                  </div>
                </div>
                {isLoading? <Button
                disabled={isLoading}
                 type="submit" className="w-full mt-5 cursor-pointer">
                 <Spinner/> Update
                </Button>:<Button type="submit" className="w-full mt-5 cursor-pointer">
                  Submit
                </Button>}

                
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
