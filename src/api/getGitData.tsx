import { useQuery } from "@tanstack/react-query"
import axios from "axios"
export const getGitData = () => {
    return useQuery({
        queryKey: ['gitData',],
        queryFn: () => axios.get(`https://api.github.com/users/thirdqwert/repos`),
        select: ({ data }) => data,
        refetchOnWindowFocus: false
    })
}