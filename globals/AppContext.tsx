import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { AppContextT, CartItemT, OrderT, ProductT } from "../types";

const AppContext = React.createContext<AppContextT>({} as AppContextT);
export const useAppContext = () => React.useContext<AppContextT>(AppContext);
/* children types */
type AppProviderProps = {
    children: React.ReactNode;
};
const INITIAL_STATE = {
    currentUser: {
        type: "guest",
    },
    products: [],
    cartItems: [],
    orderedProducts: [],
};


const getDataFromAsyncStorage = async () => {
    const currentUser = await AsyncStorage.getItem("currentUser");
    const products = await AsyncStorage.getItem("products");
    const cartItems = await AsyncStorage.getItem("cartItems");
    const orderedProducts = await AsyncStorage.getItem("orderedProducts");
    console.log("currentUser", currentUser);
    console.log("products", products);
    console.log("cartItems", cartItems);
    console.log("orderedProducts", orderedProducts);
    return {
        currentUser: currentUser ? JSON.parse(currentUser) : {},
        products: products ? JSON.parse(products) : [],
        cartItems: cartItems ? JSON.parse(cartItems) : [],
        orderedProducts: orderedProducts ? JSON.parse(orderedProducts) : [],
    };
};
const setDataToAsyncStorage = async (key, value) => {
    await AsyncStorage
        .setItem
        (key, JSON.stringify(value))
        .then(() => {
            console.log("Data successfully saved");
        })
        .catch((error) => {
            console.log("Error saving data", error);
        });
};

/* const inital state */

const AppProvider = ({ children }: AppProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [currentUser, setCurrentUser] = React.useState<any>({});
    const [products, setProducts] = React.useState<ProductT[]>([]);
    const [cartItems, setCartItems] = React.useState<CartItemT[]>([]);
    const [orderedProducts, setOrderedProducts] = React.useState<OrderT[]>([]);
    /* get  */
    console.log("Data from AsyncStorage: ");
    console.log(getDataFromAsyncStorage());

    const value: AppContextT = {
        currentUser,
        setCurrentUser,
        products,
        setProducts,
        cartItems,
        setCartItems,
        orderedProducts,
        setOrderedProducts,
        isLoggedIn,
        setIsLoggedIn
    };

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
};

export default AppProvider;