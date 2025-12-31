import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './features/home/Home'
import AddNewsForm from './features/news/AddNewsForm';
import EditPage from './features/news/EditPage';



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
          path:'/add-news',
          element:<AddNewsForm/>
        },
        {
          path:'/edit-page/:id',
          element:<EditPage/>
        }
    
      ],
    },
   
  ]);
  return <RouterProvider router={router}/>
}