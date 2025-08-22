import axios from "axios";

export const api = axios.create({
    baseURL: "https://dummyjson.com/recipes/",
})

api.interceptors.response.use(req => req.data.recipes)