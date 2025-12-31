import { NavLink } from "react-router"

const Header = () => {
  return (
    <div className='bg-amber-200 w-full h-[50px] py-2 flex justify-between items-center px-4'>
     <NavLink to={'/'}> <h1 className="font-bold text-lg">News App</h1></NavLink>
      <NavLink className='font-bold underline' to={'/add-news'}>Add News</NavLink>

    </div>
  )
}

export default Header