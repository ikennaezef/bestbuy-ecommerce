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
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.productName} added to the cart.`);
    setQty(1);
  }

  const onRemove = (product) => {
    setCartItems(cartItems.filter(item => item._id !== product._id));
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - product.quantity);
    setTotalPrice(prevTotalPrice => prevTotalPrice - product.price * product.quantity);
  }

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find(item => item._id === id);

    if (value === 'inc') {
      let newCartItems = cartItems.map(product => product._id === id ? { ...foundProduct, quantity: foundProduct.quantity + 1 } : product);
      setCartItems(newCartItems);

      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
    } else if (value = 'dec') {
      if (foundProduct.quantity > 1) {
        let newCartItems = cartItems.map(product => product._id === id ? { ...foundProduct, quantity: foundProduct.quantity - 1 } : product);
        setCartItems(newCartItems);

        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  }

  const values = { cartItems, setCartItems, showCart, setShowCart, totalPrice, setTotalPrice, totalQuantities, setTotalQuantities, qty, incQty, decQty, onAdd, onRemove, toggleCartItemQuantity };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}