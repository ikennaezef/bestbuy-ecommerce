import React, { useState, createContext, useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const useAppContext = () => {
  return useContext(AppContext);
}

const AppContext = createContext(null);

export const ContextWrapper = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty(prevQty => prevQty + 1);
  }

  const decQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + (product.price * quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {

      const updatedCartItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);

    } else {
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  }

  const values = { cartItems, setCartItems, showCart, setShowCart, totalPrice, setTotalPrice, totalQuantities, setTotalQuantities, qty, incQty, decQty, onAdd };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}