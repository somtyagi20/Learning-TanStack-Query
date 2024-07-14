import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Fruit } from "../types/fruits";
import { addOneFruit } from "./api";

export const addfruit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Fruit) => addOneFruit(data),
    onMutate: () => console.log("Mutating"),
    onError: () => console.log("there is an error"),
    onSuccess: () => console.log("Fruit is going to created"),
    onSettled: async (error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["fruits"] });
      }
    },
  });
};
