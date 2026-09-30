
 import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { data } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Carousel from '../components/Carousel';
import { ArrowLeftCircle } from 'lucide-react';

const Home = () => {
 const {handleCart} = useContext(CartContext);
 const [loading, setLoading] = useState(false)
const [error, setError] = useState("")
const [array , setArray] = useState([]);

const apiHandler = async () => {
  setLoading(true)
  try {
    const response = await fetch("https://dummyjson.com/products?limit=190")

    if (!response.ok) {
      throw new Error("Something went wrong")
    }

    const data = await response.json()
    setArray(data.products)

  } catch (error) {
    setError(error.message)

  } finally {
    setLoading(false)
  }
}
useEffect(() => {
  apiHandler();
},[]);
  return (
      <div className='min-h-[80vh] w-full text-black dark:text-white' id="Home-Container">
     <div
  className="
    min-h-screen flex justify-center items-center flex-col md:flex-row flex-wrap py-8
    bg-[radial-gradient(circle_at_top_right,_#e9d5ff_0%,_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#faf5ff_50%,_#f3e8ff_100%)] dark:bg-zinc-900 dark:bg-none">
      <div className='flex items-center flex-col pt-16 min-h-100 w-[50vw]'>
       <h2 className='font-black font-mono'>New Arrival Only</h2>
        <h1 className='font-black text-6xl text-center'>New ⭐ Collections For Everyone</h1>
       <Link to = "/products"> <button className='bg-red-600 mt-6 rounded-lg text-white active:bg-red-800 font-bold  px-6 py-2'>Latest Collection </button> </Link>
      </div>
      <div className="flex justify-center items-start pt-18 h-120 w-[50vw]">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLJ6uOf4gGNLJHcncqrCpF3sx7LOvWF6VYJgDSj-niA&s=10"
    alt="Fashion Model"
    className="w-[300px] h-[300px] object-cover drop-shadow-2xl rounded-xl"
  />
</div>
    </div>
     
       {loading && <div className='w-full flex justify-center items-center text-red-600 min-h-screen font-black'>
          <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div> </div> }
{error && <div className='w-full flex justify-center items-center text-red-600 min-h-screen font-black'>  <span className="text-center text-red-500">{error}</span> </div>
}
    {
      !loading && !error && <Carousel /> }
      {  !loading && !error && <div>
         <div className=' min-h-[80vh] dark:bg-black text-black dark:text-white '>
                <div>
                  <h1 className='text-center items-center pt-12 font-black text-4xl'>POPULAR TRENDING LAPTOPS</h1>
                 <div className="mt-2.5 h-1 w-[20vw] ml-[40vw] rounded-full text-center bg-gradient-to-r from-purple-500 to-fuchsia-500">
</div>
                </div>

                  <div className='grid grid-cols-1 pt-8 sm:grid-cols-2 gap-5 md:grid-cols-3 mx-8 lg:grid-cols-4'>
                      {
                        array.slice(78,82).map(({id , title , thumbnail , description , price , category , rating}) => {
                          return (
                          <div key={id} className='bg-white flex flex-col items-center min-h-[250px] rounded-lg text-black font-sens font-bold'>
                            <img className='h-25 mt-4 w-25 rounded-lg' src= {thumbnail} alt= {title} />
                    <h2 className='text-center font-black text-black'>{title}</h2>
                            <h2>{price}</h2>
                            <button onClick={() => {handleCart({id , title , thumbnail , price , description , rating , category})}} className='bg-red-600 text-white font-bold mt-2 active:bg-red-900 px-6 py-2 rounded-lg'>Buy Now</button>
                          </div>
                           )
                        })
                      }
                  </div>

         </div>


    

        <div className=' min-h-[80vh] dark:bg-black text-black dark:text-white '>
                <div>
                  <h1 className='text-center items-center pt-12 font-black text-4xl'>POPULAR WOMEN CLOTHES</h1>
               <div className="mt-2.5 h-1 w-[20vw] ml-[40vw] rounded-full text-center bg-gradient-to-r from-purple-500 to-fuchsia-500"> </div>
                </div>
                  
              

                  <div className='grid grid-cols-1 pt-8 sm:grid-cols-2 gap-5 md:grid-cols-3 mx-8 lg:grid-cols-4'>
                      {
                        array.slice(177,181).map(({id , title , thumbnail , description , price , category , rating}) => {
                          return (
                          <div key={id} className='bg-white flex flex-col items-center min-h-[250px] rounded-lg text-black font-sens font-bold'>
                            <img className='h-25 mt-4 w-25 rounded-lg' src= {thumbnail} alt= {title} />
                    <h2 className='text-center font-black text-black'>{title}</h2>
                            <h2>{price}</h2>
                            <button onClick={() => {handleCart({id,title,price,category,description,rating,thumbnail})}} className='bg-red-600 text-white font-bold mt-2 active:bg-red-900 px-6 py-2 rounded-lg'>Buy Now</button>
                          </div>
                           )
                        })
                      }
                  </div>

         </div>
         </div>
}

      </div>
  )
}

export default Home;