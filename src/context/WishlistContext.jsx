 
 import React, { createContext, useState } from 'react'
import { toast } from 'sonner';

 export const WishlistContext = createContext();
 
 const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);
    const handleWishlist = (product) => {
     const Alreadyadded =  wishlist.find((item) => {
       return item.id === product.id;
     })
     if (Alreadyadded) {
        return toast.error("Item Already In Your Wishlist");
     }

     else {
        setWishlist([...wishlist , product]);
       toast.success ("Added Into Wishlist");
     }
    }
    const RemovedItem = (product) => {
        toast.success("Removed Successfully");
     const RemoveProduct = wishlist.filter((item) => {
        return item.id !== product.id
     });
     setWishlist(RemoveProduct);
    }
   return (
      <WishlistContext.Provider value={{wishlist , setWishlist , handleWishlist , RemovedItem}}>
        {children}
      </WishlistContext.Provider>
   )
 }
 
 export default WishlistProvider;