import { useQuery } from "@tanstack/react-query";
import { getFruitsApi, getOneFruitApi } from "./api";

export const getFruits = () => {
  return useQuery({
    queryKey: ["fruits"],
    queryFn: getFruitsApi,
  });
};

export const getSingleFruit = (id: number | null) => {
  return useQuery({
    queryKey: ["fruit"],
    queryFn: () => getOneFruitApi(id),
  });
};

// export const getFruits = () => {
//   return useQueries({
//     queries: ()
//   })
// };
