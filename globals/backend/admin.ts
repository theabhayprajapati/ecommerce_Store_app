/* login */
import axios from "axios";
import { API_URL } from "./user";
/* https://backendforecommstore-production.up.railway.app/ */

const AdminLoginMethod = async (email: string, password: string) => {
    try {
        const { data } = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        console.log(data);
        return data;
    } catch (error: any) {
        return error.response.data;
    }
};

/* create user */
// const { name, email, phone, password } = req.body
// const { email, password, name, phone, storeName } = req.body

const AdminCreateMethod = async (name: string, email: string, phone: string, password: string, storeName: string) => {
    try {
        const { data } = await axios.post(`${API_URL}/admin/login`, {
            name,
            email,
            phone,
            storeName,
            password,
        });
        console.log(data);
        return data;
    } catch (error: any) {
        return error.response.data;
    }
};

export {
    AdminLoginMethod,
    AdminCreateMethod
};

