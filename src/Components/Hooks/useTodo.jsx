import { useContext } from "react";
import useAxiosPublic from "./useAxiosSecure";
import { AuthContext } from "../../Providers/Authproviders";
import { useQuery } from "@tanstack/react-query";


const useTodo = () => {
    //tan stack
    const axiosSecure = useAxiosPublic()
    const { user} = useContext(AuthContext)
    const {refetch , data: todo = [] } = useQuery({
        queryKey: [ 'todo' , user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/todotasks/${user.email}`)
            return res.data
        }
    })

    return [todo , refetch]
};

export default useTodo;