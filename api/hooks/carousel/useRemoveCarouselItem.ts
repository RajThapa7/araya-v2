import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

const deleteCarouselItem = async (id: string, api: AxiosInstance) => {
  const route = getApiRoute("removeCarouselItem")(id);

  const result = await api.delete(route);
  return result.data;
};

const useDeleteCarouselItem = () => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteCarouselItem(id, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["carousel"] });
    },
  });
  return mutation;
};

export default useDeleteCarouselItem;
