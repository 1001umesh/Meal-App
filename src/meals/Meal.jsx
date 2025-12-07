import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Meal = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php",
        {
          params: { i: id },
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
  console.log(data);

  return (
    <div className="my-10">
      {data &&
        data.map((item) => {
          const urlID = item.strYoutube.split("=")[1];
          console.log(urlID);
          return (
            <div
              className=" border-2 border-gray-200  rounded-md mx-8 my-8"
              key={item.idMeal}
            >
              <h1 className="font-semibold text-2xl text-center text-gray-800 my-2">

              Meal:  {item.strMeal}
              </h1>
              <hr className="text-gray-300" />
              <div className="grid grid-cols-2 gap-4 mx-8 my-4">
                <iframe
                  className="w-full h-[400px]"
                  allowFullScreen
                  src={`https://www.youtube.com/embed/${urlID}`}
                ></iframe>
                <img
                  src={item.strMealThumb}
                  alt=""
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <hr className="text-gray-400 rounded-lg" />

              <div className="flex justify-between my-8 mx-8 gap-6 ">
                <div className="text-lg text-gray-800">
                  <h1 className="font-bold text-xl">InGredients</h1>
                 <ol className="">
                   {Object.keys(item).map((key) => {
                    if (key.includes("strIngredient")) {
                      return <li>{item[key]}</li>;
                    }
                  })}
                 </ol>
                </div>
                <div className="text-lg text-gray-800">
                  <h1 className="font-bold text-xl">Measures</h1>
                 <ol className="">
                   {Object.keys(item).map((key) => {
                    if (key.includes("strMeasure")) {
                      return <li>{item[key]}</li>;
                    }
                  })}
                 </ol>
                </div>
                <div>
                  <div>
                    <h1 className="font-bold text-xl">Instructions</h1>
                    <p className="text-lg text-gray-800 text-justify">{item.strInstructions}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Meal;
