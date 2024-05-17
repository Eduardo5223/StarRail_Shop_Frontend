import React, { createContext, useEffect, useState } from "react";
import { prod_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < prod_list.length; index++) {
        cart[prod_list[index]._id] = 0;
    }
    return cart;
}

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const url = "http://localhost:5000"
    const [token,setToken] = useState("")
    const[prod_list,setProdList] = useState([])
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCarAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = prod_list.find((product) => product._id === Number(item));
                totalAmount += itemInfo.precio * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchProdList = async () =>{
        const response = await axios.get(url+"/api/producto/list")
        setProdList(response.data.data)
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    useEffect(()=>{
        
        async function loadData(){
            await fetchProdList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])
    const contextValue = {
        getTotalCartItems,
        getTotalCarAmount,
        prod_list,
        cartItems,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
