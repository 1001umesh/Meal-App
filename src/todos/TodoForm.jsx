import { Formik } from "formik";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import * as Yup from "yup";

const todosSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .min(6, "Email address must be at least 6 characters")
    .max(50, "Email address should not exceed 50 characters")
    .matches(/^\S*$/, "email must not contain spaces")
    .required("Email is required"),
  username: Yup.string()
    .min(5, "Username must be atleast 5 characters")
    .max(50, "Usernmae must not exceed 50 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contains letters,numbers and underscores"
    )
    .required("username is required"),
  gender: Yup.string().required("Please select your gender"),
  hobbies: Yup.array()
    .min(1, "Select at least one hobby")
    .required("Select at least one hobby"),
  country: Yup.string().required("Please select your country"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 character")
    .max(500, "Message must not be exceed 500 characters"),
});

const TodoForm = () => {
  return (
    <div>
      <Card className="w-full max-w-lg mx-100 my-10">
        <CardHeader>
          <CardTitle>Add Some Todos</CardTitle>
          <CardDescription>
            Enter your details below to add todos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              email: "",
              username: "",
              gender: "male",
              hobbies: [],
              country: "",
              message: "",
            }}
            onSubmit={(val) => {
              console.log(val);
            }}
            validationSchema={todosSchema}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              setFieldValue,
              touched,
              errors,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="u@example.com"
                      />
                      {<p className="text-red-600">{errors.email}</p>}
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="username">Username</Label>
                      </div>
                      <Input
                        id="username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                      />
                    </div>
                    { errors.email && touched.email &&<p className="text-red-600">{errors.username}</p>}

                    <div className="space-y-2">
                      <h1>Select Your Gender</h1>
                      <RadioGroup
                        name="gender"
                        defaultValue="male"
                        onChange={handleChange}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="male" id="r1" />
                          <Label htmlFor="r1">Male</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="female" id="r2" />
                          <Label htmlFor="r2">Female</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="others" id="r3" />
                          <Label htmlFor="r3">Others</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    {<p className="text-red-600">{errors.gender}</p>}

                    <div className="space-y-4">
                      <h1>Select Your Hobbies</h1>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          onCheckedChange={(e) => {
                            if (e) {
                              setFieldValue("hobbies", [
                                ...values.hobbies,
                                "travelling",
                              ]);
                            } else {
                              setFieldValue("hobbies", [
                                values.hobbies.filter(
                                  (item) => item !== "travelling"
                                ),
                              ]);
                            }
                          }}
                          id="travelling"
                          name="hobbies"
                          value="travelling"
                        />
                        <Label htmlFor="travelling">Travelling</Label>
                      </div>

                      <div className="flex items-center gap-3">
                        <Checkbox
                          onCheckedChange={(e) => {
                            if (e) {
                              setFieldValue("hobbies", [
                                ...values.hobbies,
                                "coding",
                              ]);
                            } else {
                              setFieldValue("hobbies", [
                                values.hobbies.filter(
                                  (item) => item !== "coding"
                                ),
                              ]);
                            }
                          }}
                          id="coding"
                          name="hobbies"
                          value="coding"
                        />
                        <Label htmlFor="coding">Coding</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          onCheckedChange={(e) => {
                            if (e) {
                              setFieldValue("hobbies", [
                                ...values.hobbies,
                                "others",
                              ]);
                            } else {
                              setFieldValue("hobbies", [
                                values.hobbies.filter(
                                  (item) => item !== "others"
                                ),
                              ]);
                            }
                          }}
                          id="others"
                          name="hobbies"
                          value="others"
                        />
                        <Label htmlFor="others">Others</Label>
                      </div>
                      { errors.hobbies && touched.gender && <p className="text-red-600">{errors.hobbies}</p>}
                    </div>
                    <div className="space-y-2">
                      <h1>Select Country</h1>
                      <Select
                        onValueChange={(e) => setFieldValue("country", e)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="japan">Japan</SelectItem>
                        </SelectContent>
                      </Select>
                      { errors.country && touched.country && <p className="text-red-600">{errors.country}</p>}
                    </div>
                    <div className="space-y-2">
                      <h1>Your Message</h1>
                      <Textarea
                        name="message"
                        onChange={handleChange}
                        value={values.message}
                        placeholder="Type your message here."
                      />
                      { errors.message && touched.message && <p className="text-red-600">{errors.message}</p>}
                    </div>
                    <Button type="submit" className="w-full cursor-pointer">
                      Submit
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoForm;
