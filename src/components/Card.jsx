
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { ThemeContext } from "../context/ThemeContext";

const Card = ({
  id,
  title,
  description,
  category,
  price,
  thumbnail,
  rating
}) => {
  const {Cart , setCart , handleCart} = useContext(CartContext);
  const {wishlist , setWishlist , handleWishlist} = useContext(WishlistContext);
  const {theme} = useContext(ThemeContext);
  return (
    <div className=" dark:bg-gradient-to-br from-[#111111] to-[#1a1025] dark:border-white/10 dark:border-2  group overflow-hidden rounded-2xl border border-zinc-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-600 hover:shadow-purple-900/30 bg-white text-black">

      <div className="relative flex h-40 items-center justify-center dark:bg-gradient-to-br from-zinc-900 to-black">
        <span className="absolute left-3 top-3 rounded-full bg-purple-600 px-2.5 py-1 text-[10px] font-bold text-white"> NEW </span>
        <button onClick={() => {handleWishlist({id , title , price , description , thumbnail , rating})}} className="absolute right-3 top-3 text-xl text-zinc-500 transition hover:text-purple-500"> 💗 </button>
        <img src={thumbnail} alt={title} className="h-28 w-28 object-contain transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <p className="mb-1 text-[10px] font-black uppercase font-black tracking-widest text-red-600  dark:text-purple-500"> {category} </p>

        <h2 className="truncate text-sm font-bold text-black dark:text-white"> {title} </h2>
        <div className="mt-2 flex items-center justify-between"> <div>
         <span className="dark:text-yellow-400 text-red-600 font-black  text-xs"> {rating}</span>
         <p className="mt-1  text-lg font-extrabold dark:text-white text-black"> ${price} </p>
          </div>
          <button onClick={() => {handleCart({id , title , price , description , thumbnail , rating})}} className="rounded-lg bg-purple-600  px-3 py-2 text-xs font-semibold transition hover:bg-purple-500"> Add </button>
           </div>
      </div>
      <div className="flex justify-center items-center pb-2">
      <Link to = {`/products/${id}`} className="text-center text-black text-red-600">Get Details</Link>
      </div>
    </div>
  );
};

export default Card;
