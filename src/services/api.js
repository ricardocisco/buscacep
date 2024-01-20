import axios from "axios";

//13178380/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api