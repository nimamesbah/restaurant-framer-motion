import {
    useQuery
} from "@tanstack/react-query";
import {
    api
} from "../api/axiosApi";

export default function useGetProduct(id = "") {
    async function queryFn() {
        return await api.get(`${id}`)
    }
    return useQuery({
        queryFn,
        queryKey: [`products${id}`]
    })
}