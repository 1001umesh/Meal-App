import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/home/Home'
import NotFound from './pages/not-found/NotFound'
import MealList from './meals/MealList';
import Meal from './meals/Meal';

 export default function App(){
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
       
        {
          path:'meal-list',
          element:<MealList/>
        },
        {
          path:'meal/:id',
          element:<Meal/>
        },
       
      ],
    },
    {
      path:'*',
      element:<NotFound/>

    }
  ]);
  return <RouterProvider router={router}/>
}