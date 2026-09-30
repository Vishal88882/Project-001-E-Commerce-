
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';


const ProductsDetails = () => {
    const [Array, setArray] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    const {id} = useParams();
    const {theme} = useContext(ThemeContext);
    const {handleCart} = useContext(CartContext);
    const ApiData = async () => {
   try {     
    setLoading(true);
    const Response = await fetch (`https://dummyjson.com/products/${id}`);
    const Data = await Response.json();
    setArray([Data]); 
   }
   catch (error) {
    console.log (error);
    setError(true);
   }
   finally {
    setLoading(false);
   }
}
useEffect(() => {
  ApiData();
},[id]);
  return (
     <div className='min-h-screen w-full text-black dark:bg-black dark:text-white font-bold font-serif' id="Product-Detail">
       <div className='flex justify-center items-center absolute top-20  left-[40vw]'>
        <Link to = "/products"> <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-300/40 hover:scale-105 hover:shadow-purple-400/60 transition-all duration-300">
  Back to Shopping
</button> </Link>
      </div>
                    {
        Loading && (
  <div className="min-h-screen flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
)}
             {
                Error && <div className='min-h-screen flex justify-center items-center text-3xl font-black'> <h1 className='text-red-600 font-black text-4xl'>Error Aagaya</h1>
                </div>
             }
        {
         !Loading && !Error && 
         Array.map(({title ,description , price , category , thumbnail , rating , stock , returnPolicy ,shippingInformation , availabilityStatus}) => {
             return (
<div className="min-h-screen flex justify-center mt-5 dark:text-white items-center px-10 py-10">

  <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl gap-12">

    <div className="w-full lg:w-[45%] flex justify-center">
      <img
        className="w-[400px] h-[400px] object-contain"
        src={thumbnail}
        alt={title}
      />
    </div>

    <div className="w-full lg:w-[45%] flex flex-col gap-4">

      <h1 className="text-4xl font-bold dark:text-white text-gray-900">
        {title}
      </h1>

      <p className="text-gray-500 dark:text-white dark:opacity-80 capitalize">
        {category}
      </p>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-purple-600">
          ${price}
        </span>

        <span className="text-green-600 font-semibold">
          {availabilityStatus}
        </span>
      </div>

      <p className="text-gray-600 dark:text-white dark:opacity-80 leading-7">
        {description}
      </p>

      <p className="font-semibold dark:text-white dark:opacity-80 text-gray-800">
        Available In Stock:
        <span className="text-purple-600 ml-2">
          {stock}
        </span>
      </p>
      <button onClick={() => {handleCart({id:Number(id) , price , title , description , rating , category , thumbnail})}} className="mt-3 dark:bg-red-600 dark:text-white dark:hover:bg-red-800 w-fit px-7 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Add To Cart
      </button>
    </div>
  </div>
</div>
             )
         })
        }
     </div>
  )
}

export default ProductsDetails;