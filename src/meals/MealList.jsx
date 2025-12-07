import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MealList = () => {
  const [params, setParams] = useSearchParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav=useNavigate();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php",
        {
          params: { c: params.get("category") },
        }
      );
      setLoad(false);
      setData(response.data.meals);
    } catch (err) {
      setLoad(false);
      setErr(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) return <h1 className="text-lg">Loading.......</h1>;
  if (err) return <p className="text-red-700 text-lg">{err}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-700">
        Meals in {params.get("category")}
      </h1>

      <div className="grid grid-cols-3 gap-6  px-4 py-4 items-center">
        {data &&
          data.map((meal) => {
            return (
              <div
                key={meal.idMeal}
                className="border border-gray-200 px-8 py-4 rounded-lg cursor-pointer"
              >
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className="mx-auto mt-2 mb-2 w-68 h-68 rounded-full object-cover"
                />
               <div className="flex items-center justify-center gap-4 my-4">
                 <p className="font-bold text-lg text-gray-700 line-clamp-1">
                  {meal.strMeal}
                </p>
                <button className="w-full bg-blue-600 rounded-lg text-white py-2 px-2 cursor-pointer hover:bg-blue-800 " onClick={()=>nav(`/meal/${meal.idMeal}`)}>View Details</button>
               </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MealList;
