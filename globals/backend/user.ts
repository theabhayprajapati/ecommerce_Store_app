/* login user */

import axios from "axios";

export var mode = "prod";
/* https://backendforecommstore-production.up.railway.app/ */
export const API_URL = mode != "dev" ? "https://backendforecommstore-production.up.railway.app" : "http://localhost:3000"
const UserLoginMethod = async (email: string, password: string) => {
    try {
        const { data } = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        // alert(data);
        // to string
        alert(JSON.stringify(data));
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.response.data);
        alert(error.response.data);
        return error.response.data;
    }
};
/* create user */
// const { name, email, phone, password } = req.body
/*  */
const UserCreateMethod = async (user) => {
    console.log(user);
    const { name, email, phone, password } = user;
    try {
        const { data } = await axios.post(`${API_URL}/createuser`, {
            name,
            email,
            phone,
            password,
        });
        // alert(data);
        alert(JSON.stringify(data));
        console.log(data);
        return data;
    } catch (error: any) {
        alert(JSON.stringify(error.response.data));
        alert(error.response.data);
        console.log(error.response.data);
        return error.response.data;
    }
};

// const { email, password, name, phone, storeName } = req.body
/*  */

export {
    UserLoginMethod,
    UserCreateMethod
};

