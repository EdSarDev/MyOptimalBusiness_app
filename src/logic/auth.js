import axios from "axios";

const ENDPOINT_PATH = "https://http://127.0.0.1:8000/user/auth/"; //Conexión con Ajax : https://reqres.in/api/

export default {
    login(login, password) {
        const user = { login, password };
        return axios.post(ENDPOINT_PATH + "login", user);
    }
};