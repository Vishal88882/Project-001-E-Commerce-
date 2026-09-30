
import { useContext } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
import { Menu, MenuIcon, Moon, Sun, X } from "lucide-react";

const Navbar = () => {
  const [hamburger, sethamburger] = useState(false);
  const {Cart , setCart} = useContext(CartContext);
  const {wishlist , setWishlist} = useContext(WishlistContext);
  const {theme , handleTheme } = useContext(ThemeContext);
  return (
     <div className='bg-white h-16 w-full mt-0 ml-0 dark:bg-black dark:border-b-2 dark:border-b-red-600 dark:text-white sticky top-0 left-0 z-50 flex justify-between items-center gap-4 text-black font-bold' id="Navbar-Container">
      <div className='flex justify-between ml-8 gap-4 items-center'>
        <div>
      <Link to={"/"}><h1 className='text-3xl font-black'><span className='text-red-600 font-black'>R</span>AJ</h1></Link>
      </div>
      </div>
      <div>
         <Link className='text-2xl font-black' to = "/wishlist">❤️</Link>
          <span className='text-black dark:text-white font-black'>{wishlist.length}</span>
      </div>
       <div  className="flex items-center gap-4 mr-4 md:hidden">
          { hamburger ? <X onClick={() => {sethamburger(!hamburger)}} /> : <MenuIcon onClick={() => {sethamburger(!hamburger)}} />  }
        </div>
     
{
  hamburger && (

      <ul
        className="fixed md:hidden top-20 right-4 z-50 w-52 p-5 flex flex-col justify-center items-center gap-5 rounded-xl bg-white dark:bg-zinc-900
 shadow-xl
   border border-zinc-200 dark:border-zinc-700 ">

     <NavLink to="/" className={({ isActive }) => isActive
              ? "text-red-600 font-bold underline underline-offset-4"
              : "text-black dark:text-white font-semibold hover:text-red-500 transition" }  >
          <li>Home</li>
        </NavLink>
        <NavLink to="/products"  className={({ isActive }) => isActive
              ? "text-red-600 font-bold underline underline-offset-4"
              : "text-black dark:text-white font-semibold hover:text-red-500 transition"
          }
        >
          <li>Product</li>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive
              ? "text-red-600 font-bold underline underline-offset-4"
              : "text-black dark:text-white font-semibold hover:text-red-500 transition" } >
          <li>About</li>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>  isActive
         ? "text-red-600 font-bold underline underline-offset-4"
         : "text-black dark:text-white font-semibold hover:text-red-500 transition"  }>
          <li>Contact</li>
        </NavLink>

        <Link to="/cart" className="flex items-center gap-1 text-black dark:text-white" >
         <IoCartOutline className="text-3xl" />
          <span className=" bg-red-600 text-white text-xs font-bold rounded-full min-w-5 h-5 px-1
              flex justify-center items-center ">{Cart.length}</span>
        </Link>
        <button onClick={handleTheme} className="text-2xl hover:scale-110 transition" > {theme ? <Sun /> : <Moon /> }
        </button>
      </ul>
  )
}


      <nav className= 'hidden justify-between gap-5 mr-4 items-center  md:flex'>
        <ul className='flex justify-center items-center gap-5'>
              <NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-red-900 decoration-2 underline-offset-4": "text-black font-black dark:text-white" }><li>Home</li> </NavLink>

            <NavLink to="/products" className={({ isActive }) => isActive ? " underline decoration-red-900 decoration-2 underline-offset-4": "text-black font-black dark:text-white" }><li>Product</li> </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? " underline decoration-red-900 decoration-2 underline-offset-4": "text-black font-black dark:text-white" }><li>About</li> </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? " underline decoration-red-900 decoration-2 underline-offset-4": "text-black font-black dark:text-white" }><li>contact</li> </NavLink>

            <Link className='flex justify-center items-center' to={"/cart"}>
            <IoCartOutline className='font-black text-3xl cursor-pointer' /> <span className='relative bottom-3 left-1.2 bg-black text-white rounded-[50%] px-3 py-3 h-6 w-6 flex justify-center items-center'>{Cart.length}</span>
            </Link>
              <button onClick={handleTheme} className='font-black text-2xl pr-4' >{theme ? <Sun /> : <Moon />}</button>
        </ul>
      </nav>
     </div>
  )
}

export default Navbar