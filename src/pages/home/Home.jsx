import React from "react";
import MealCategories from "../../meals/MealCategories";

const Home = () => {
  return (
    <div className="px-20">
      <div className="flex items-center text-center">
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
        <div className="space-y-3">
          <h1 className="font-bold text-3xl">Welcome to QUICK-MEAL</h1>
          <p className="">
            Welcome to TheMealDB: An open, crowd-sourced database of recipes
            from around the world. We offer a <span className="text-amber-600">free recipe API</span> for anyone wanting
            to use it, with additional premium features if required.
          </p>
        </div>
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
      </div>
      <MealCategories/>
    </div>
  );
};

export default Home;
