import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MenuContext = createContext(null);

export const ContextProvider = (props) => {

  const [menuItems, setMenuItems] = useState([]);
  const [cartItem, setCartItem] = useState({});

  // load menu items from backend
  useEffect(() => {
    axios.get("https://coffee-backend-0pn1.onrender.com/api/menu/all")
      .then(res => setMenuItems(res.data))
      .catch(() => console.log("menu load error"));
  }, []);

  // initialize cart when data loads
  useEffect(() => {
    if (menuItems.length > 0) {
      let cart = {};
      menuItems.forEach(item => {
        cart[item.id] = 0;
      });
      setCartItem(cart);
    }
  }, [menuItems]);

  const AddtoCart = (itemId) => {
    setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const RemoveCart = (itemId) => {
    setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const TotalCartAmount = () => {
    let total = 0;
    menuItems.forEach(item => {
      if (cartItem[item.id] > 0) {
        total += cartItem[item.id] * item.price;
      }
    });
    return total;
  };

  const TotalCartCount = () => {
    let total = 0;
    menuItems.forEach(item => {
      total += cartItem[item.id];
    });
    return total;
  };

const clearCart = () => {
  let empty = {};
  menuItems.forEach(item => {
    empty[item.id] = 0;
  });
  setCartItem(empty);
};

  return (
<MenuContext.Provider value={{
  cartItem,
  AddtoCart,
  RemoveCart,
  TotalCartAmount,
  TotalCartCount,
  menuItems,
  clearCart
}}>
      {props.children}
    </MenuContext.Provider>
  );
};
