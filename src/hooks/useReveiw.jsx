import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useReveiw = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { refetch, data: books = [] } = useQuery({
    queryKey: ["books", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/reviews/${name}`);
        return res.data || [];
      } catch (error) {
        // Handle error, e.g., log it or show a user-friendly message
        console.error("Error fetching books:", error);
        throw error;
      }
    },
  });

  return [books, refetch];
};

export default useReveiw;
