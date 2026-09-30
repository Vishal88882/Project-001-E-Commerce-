
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'sonner';
 

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [Cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("Cart")) || [];
    });
    const handleCart = (product) => {

  const ExistingProduct = Cart.find((item) => {
    return item.id === product.id;
  });

  if (ExistingProduct) {
        toast.error("Item Already Added");
  }
  else {
    setCart([...Cart , {
     ...product , Quantity: 1
    }])
  toast.success("Item Added Successfully");
  }
}

useEffect (() => {
  localStorage.setItem("Cart",JSON.stringify(Cart));
} , [Cart])

 const AddQuantity = (id) => {
  setCart(
    Cart.map((item) =>
      item.id === id
        ? { ...item, Quantity: item.Quantity + 1 }
        : item
    )
  );
};

 const RemoveQuantity = (id) => {
  setCart(
    Cart.map((item) =>
      item.id === id
        ? { ...item, Quantity: item.Quantity - 1 }
        : item
    )
  );
};

const RemoveProduct = (product) => {
  setCart (
    Cart.filter((item) => {
      return item.id !== product;
    })
  )
  toast.success(`Removed Item Sucessfully`);
}
  return (
    <CartContext.Provider value = {{Cart , setCart , handleCart , AddQuantity ,RemoveQuantity , RemoveProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;