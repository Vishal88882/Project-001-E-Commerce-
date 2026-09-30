
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext, useEffect, useState } from "react";
import { Theater } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Carousel = () => {
    const [Array, setArray] = useState([]);
    const {theme} = useContext(ThemeContext);
    const ApiHandler = async () => {
      const Response = await fetch("https://dummyjson.com/products?limit=190");
      const Data = await Response.json();
      setArray(Data.products);
    }
    useEffect(() => {
    ApiHandler();
    }, [] );

    const CaroseolProducts = Array.filter((item) =>
  [78, 114, 90, 159, 99].includes(item.id)
);
  return (
  <Swiper 
  modules={[Autoplay]} 
  autoplay = {
    {
      delay:2500 ,
       disableOnInteraction: false,
    }
  }
   className="bg-white dark:bg-black dark:text-white min-h-screen">
    {
  CaroseolProducts.map(
    ({ id, images, price, title, discountPercentage, rating }) => {
      return (
        <SwiperSlide key={id}>
          <Link
            to={`/products/${id}`}
            className="relative block overflow-hidden rounded-2xl"
          >
            <img
              className="w-full h-[450px] md:h-[550px] object-contain"
              src={images[0]}
              alt={title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <span className="absolute top-5 left-5 rounded-full bg-fuchsia-600 px-4 py-2 text-white font-bold">
              {discountPercentage}% OFF
            </span>

            <span className="absolute top-5 right-5 rounded-full bg-white px-3 py-2 text-black font-bold">
              ⭐ {rating}
            </span>

            <div className="absolute bottom-8 left-6 text-white">
              <h1 className="text-3xl font-black">
                {title}
              </h1>

              <p className="mt-2 text-xl font-bold">
                ${price}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      )
    }
  )
}
  </Swiper>
  );
};

export default Carousel;