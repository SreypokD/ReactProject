import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  //get total of cart 
  const getTotalCart = () => {
    let totalAmount = 0;
    for (const item of cart) {
      totalAmount += item.price;
    }
    return totalAmount;
  };


  const addToCart = (product) => {
    setCart([...cart, product]);
    //store addToCart function to localstorage
    localStorage.setItem('addToCart', JSON.stringify(...cart));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart, removeFromCart ,getTotalCart}}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;