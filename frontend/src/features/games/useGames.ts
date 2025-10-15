import { useQuery } from "react-query";
import { api } from "@shared/api/axiosInstance";

export const useGames = () => {
  return useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const { data } = await api.get('/games');
      return data;
    },
  });
}