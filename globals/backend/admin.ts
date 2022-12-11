/* login */
import axios from "axios";
import { mode } from "./user";
/* https://backendforecommstore-production.up.railway.app/ */
const API_URL = mode != "dev" ? "https://backendforecommstore-production.up.railway.app" : "http://localhost:3000"

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

