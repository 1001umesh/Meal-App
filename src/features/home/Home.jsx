import { Button } from "@/components/ui/button";
import { useGetNewsQuery, useLazyGetNewsQuery } from "../news/newsApi";
import { Spinner } from "@/components/ui/spinner";
import {EditIcon } from "lucide-react";
import DeleteNews from "../news/DeleteNews";
import { useNavigate, useSearchParams } from "react-router";
import { Input } from "@/components/ui/input";
import { Formik } from "formik";

const Home = () => {

  const nav = useNavigate();
  const [searchParams,setSearchParams]=useSearchParams();
    const { error, data, isLoading, isFetching } = useGetNewsQuery({
    search:searchParams.get('search')?? ""
  });

  if (isLoading) return <h1>Loading.......</h1>;

  if (error) return <p className="text-red-600">{error.data}</p>;

  return (
    <div className="py-4 px-8">
      <div className="flex justify-center">
        <h1 className="text-3xl my-4 border py-2 px-4 rounded bg-amber-400 w-full text-center">
          HOT TRENDING NEWS{" "}
        </h1>
      </div>

      <div className="flex justify-center">
        <Formik
        initialValues={{
          search:'',

        }}
        onSubmit={(val)=>{
          setSearchParams({search:val.search})
      
        }}
        >
          {({handleChange,values,handleSubmit,errors}) => (

            <form onSubmit={handleSubmit}>
              <div className="flex w-full max-w-sm items-center gap-2 ">
                <Input 
                value={values.search}
                onChange={handleChange}
                name="search"
                 type="text" placeholder="Search news" />
                <Button type="submit" variant="outline">
                  Search
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      {data.map((news) => {
        return (
          <div key={news.id} className="bg-gray-200 px-4 py-2 rounded my-4 ">
            <p className="text-xl font-semibold my-2">{news.title}</p>
            <p className="text-md text-justify">{news.detail}</p>
            <p className="text-gray-600">By: {news.author}</p>
            <div className="my-4">
              <Button
                onClick={() => nav(`/edit-page/${news.id}`)}
                variant="ghost"
              >
                <EditIcon />
              </Button>
              <DeleteNews id={news.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
