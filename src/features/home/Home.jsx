import { Button } from "@/components/ui/button";
import React from "react";
import { useGetNewsQuery, useLazyGetNewsQuery } from "../news/newsApi";
import { Spinner } from "@/components/ui/spinner";

const Home = () => {
  /*--------using through useGetNewsQuery----------------------*/
  const { error, data, isLoading, refetch,isFetching } = useGetNewsQuery();

  if (isLoading) return <h1>Loading.......</h1>;

  if (error) return <p className="text-red-600">{error.data}</p>

  return <div>
    <div className="my-8 mx-9 grid grid-cols-2 gap-4 ">
    {data.map((news)=>{
      return<div key={news.id} className="border py-4 px-6 rounded-xl">
        <p >Title :{news.title}</p>
        <p>Detail: {news.detail}</p>
        <p> Author: {news.author}</p>
      </div>
    })}
 
  </div>

  <Button onClick={refetch}>
    {isFetching && <Spinner/>}
    Refetch</Button>
  </div>;

  /*--------------------using through useLazyGetNewsQuery-------------------*/
  // const [getData,{isLoading,error,data,isFetching}]=useLazyGetNewsQuery();
  // if(isLoading || isFetching) return <h1>Loading</h1>;
  // if(error) return <p className="text-red-700">{error}</p>

  // return <div className="py-5 px-4">

  //   {data && data.map((news)=>{
  //     return <div key={news.id}>
  //       <h1>{news.title}</h1>
  //       <p> Detail: {news.detail}</p>
  //       <p> Author {news.author}</p>
  //     </div>
  //   })}
  //   <Button onClick={()=>getData()}>Get Data</Button>

  // </div>


}



export default Home;
