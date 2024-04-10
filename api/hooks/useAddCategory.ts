import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

export interface IPostData {
  categoryName: string;
}

const addCategory = async (data: IPostData, api: AxiosInstance) => {
  const route = getApiRoute("addCategory")();

  const result = await api.post(route, data);
  return result.data;
};

const useAddCategory = () => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IPostData) => addCategory(data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["categories"] });
    },
  });
  return mutation;
};

export default useAddCategory;
