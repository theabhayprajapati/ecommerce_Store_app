import React from "react";
import { AppContextT, CartItemT, OrderT, ProductT } from "../types";

const AppContext = React.createContext({});

export const useAppContext = () => React.useContext(AppContext);

const AppProvider = ({ children }: any) => {
    // type of user
    const [currentUser, setCurrentUser] = React.useState(null);
    const [products, setProducts] = React.useState<ProductT[]>([]);
    const [cartItems, setCartItems] = React.useState<CartItemT[]>([]);
    const [orderedProducts, setOrderedProducts] = React.useState<OrderT[]>([]);

    const value: AppContextT = {
        currentUser,
        setCurrentUser,
        products,
        setProducts,
        cartItems,
        setCartItems,
        orderedProducts,
        setOrderedProducts,
    };

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
};

export default AppProvider;