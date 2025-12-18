import { NavLink } from "react-router"

const Header = () => {
  return (
    <div className='bg-amber-200 w-full h-[50px] py-2 flex justify-between items-center px-4'>
        <h1 className='text-xl font-bold '>Form-Handlying using Formik</h1>
        <NavLink className=' font-bold underline' to="/add-todo">Todo</NavLink>
    </div>
  )
}

export default Header