import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

// Create a context to share data globally within the component tree
export const ShopContext = createContext(null);

// Function to initialize the default cart with 0 quantity for each product
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart=(itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       console.log(cartItems);
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
     }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
