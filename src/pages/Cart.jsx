
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';

 

const CartPage = () => {
 const {Cart , AddQuantity , RemoveQuantity , RemoveProduct} = useContext(CartContext);
const {theme} = useContext(ThemeContext);
 const TotalPrice = Cart.reduce((a,b) => {
  return a + b.price * b.Quantity;
 },0);
  return (
    <div className="min-h-screen dark:bg-black text-black dark:text-white px-4 py-8 sm:px-8 lg:px-12">
       
{
  Cart.length === 0 && (
    <div className="min-h-screen  flex items-center justify-center px-5 dark:from-black dark:via-[#10051c] dark:to-black">

      <div className="text-center">
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 shadow-[0_0_60px_rgba(168,85,247,0.35)] dark:bg-purple-950/40 dark:shadow-[0_0_70px_rgba(168,85,247,0.25)]">
          <span className="text-6xl">🛒</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
          Your Cart is Empty
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base md:text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Looks like you haven't added anything to your cart yet.
          Discover something you'll love.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-lg font-bold text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/50"
        >
          Explore Products
          <span className="text-xl">→</span>
        </Link>

      </div>
    </div>
  )
}
 

      { Cart.length > 0 &&
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl"> Your Cart </h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            { Cart.map(({thumbnail , title , price , Quantity , description , rating , id }) => {
              return (
            <div key = {id} className="flex flex-col gap-5 rounded-2xl border border-zinc-800 dark:bg-zinc-900 bg-white p-5 sm:flex-row sm:items-center">
              <img src= {thumbnail} alt= {title} className="h-28 w-28 rounded-xl object-cover"/>
              <div className="flex-1 dark:text-white text-black">
                <h2 className="text-lg dark:text-white text-red font-semibold"> {title} </h2>
                <p className="mt-1 text-sm text-black dark:text-zinc-400">{rating}⭐</p>
                <p className="mt-3 text-lg dark:text-white text-black font-bold">  {price} </p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => {if (Quantity > 1) {RemoveQuantity(id)} if ( Quantity === 1 ) {RemoveProduct(id)} }} className="h-9 w-9 rounded-lg text-red-600 dark:text-white dark:bg-zinc-800 text-lg dark:hover:bg-zinc-700"> − </button>
                <span className="w-6 text-center font-semibold"> {Quantity} </span>
                <button onClick= {() => {AddQuantity(id)}} className="h-9 w-9 rounded-lg text-red-600 dark:bg-zinc-800 dark:text-white text-red-600 text-lg dark:hover:bg-zinc-700"> + </button>
              </div>
              <button onClick={() => {RemoveProduct(id)}} className="text-sm font-medium text-red-400 hover:text-red-300"> Remove </button>
            </div> )
            } )}
          </div>
          <div className="h-fit rounded-2xl border border-zinc-800 bg-white dark:bg-zinc-900 p-6">

            <h2 className="mb-6 text-xl font-bold"> Order Summary</h2>
           <div className="space-y-4 text-sm">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>$ {TotalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-zinc-800 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>$ {TotalPrice.toFixed(2)} Dollar Only</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span><span className="font-black text-red-700 px-1">INR</span> ₹{(TotalPrice*94).toFixed(2)} Price Only</span>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-semibold transition hover:bg-purple-500"> Proceed to Checkout </button>
          </div>
        </div>
      </div> }
    </div>
  );
};

export default CartPage