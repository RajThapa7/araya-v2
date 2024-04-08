import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

const deleteProduct = async (data: any, api: AxiosInstance) => {
  const route = getApiRoute("deleteProduct")(data);

  const result = await api.delete(route);
  return result.data;
};

const useDeleteProduct = () => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => deleteProduct(data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return mutation;
};

export default useDeleteProduct;
