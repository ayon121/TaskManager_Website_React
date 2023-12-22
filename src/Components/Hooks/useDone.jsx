import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/Authproviders";
import { useContext } from "react";
import useAxiosPublic from "./useAxiosSecure";


const useDone = () => {
   //tan stack
   const axiosSecure = useAxiosPublic()
   const { user} = useContext(AuthContext)
   const {refetch , data: done = [] } = useQuery({
       queryKey: [ 'todo' , user?.email],
       queryFn: async () => {
           const res = await axiosSecure.get(`/donetasks/${user.email}`)
           return res.data
       }
   })

   return [done , refetch]
};

export default useDone;