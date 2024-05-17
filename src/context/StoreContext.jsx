import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const getDefaultCart = (prod_list) => {
    let cart = {};
    for (let index = 0; index < prod_list.length; index++) {
        cart[prod_list[index]._id] = 0;
    }
    return cart;
}

const StoreContextProvider = (props) => {
    const url = "http://localhost:5000";
    const [token, setToken] = useState("");
    const [prod_list, setProdList] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        async function loadData() {
            await fetchProdList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    useEffect(() => {
        if (prod_list.length > 0) {
            setCartItems(getDefaultCart(prod_list));
        }
    }, [prod_list]);

    const fetchProdList = async () => {
        const response = await axios.get(url + "/api/producto/list");
        setProdList(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    }

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCarAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = prod_list.find((product) => product._id === item);
                totalAmount += itemInfo.precio * cartItems[item];
            }
        }
        return totalAmount;
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
