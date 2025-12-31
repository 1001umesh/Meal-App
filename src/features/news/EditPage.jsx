import { useParams } from "react-router"
import EditNews from "./EditNews";
import { useGetNewsDetailQuery } from "./newsApi";

const EditPage = () => {
    const {id}=useParams();
    const {isLoading,error,data}=useGetNewsDetailQuery(id);
    if(isLoading) return <h1>Loading-----------</h1>;
    if(error) return <p className="text-red-500">{error}</p>
    console.log(data);
  return (
    <div>
        <EditNews product={data}/>
      
    </div>
  )
}

export default EditPage
