import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const MealCategories = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav=useNavigate();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php",{

        });
      setLoad(false);
      console.log(response);
      setData(response.data.categories);
    } catch (err) {
      setLoad(false);
      setErr(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (load) return <h1>Loading............</h1>;
  if (err) return <h1 className="text-red-500">{err}</h1>;

  return (
    <div className="grid grid-cols-3 gap-4 mt-10 ">
      {data &&
        data.map((item) => {
          return (
            <div
              className="border border-gray-300 rounded-lg hover:scale-80 transition ease-in-out"
              key={item.idCategory}
            >
              <img src={item.strCategoryThumb} alt=""  className="py-4 px-6 my-4 mx-6 items-center"/>
              <div className="p-4 space-y-2 mx-2 my-2 text-center">
                <p className="text-lg font-semibold">{item.strCategory}</p>
                <p className="line-clamp-2 text-md text-gray-800 ">
                  {item.strCategoryDescription}
                </p>
                <button className="border border-gray-300 rounded-md bg-green-600 text-white p-1 hover:bg-green-700 cursor-pointer" 
                onClick={()=>nav(`meal-list?category=${item.strCategory}`)}>
                  Explore More
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MealCategories;
