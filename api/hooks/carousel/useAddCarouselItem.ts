import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IPostData {
  image: any[];
  isVisible: string;
  link: string;
  title: string;
}

const addCarouselItem = async (api: AxiosInstance, data: IPostData) => {
  const route = getApiRoute("addCarouselItem")();

  const formData = new FormData();

  formData.append("isVisible", data.isVisible);
  formData.append("link", data.link);
  formData.append("title", data.title);

  data.image.forEach((item) => formData.append("image", item));

  const result = await api.post(route, formData);
  return result.data;
};

const useAddCarouselItem = () => {
  const api = useCreateApi();
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: IPostData) => addCarouselItem(api, data),
    onSuccess: () => client.invalidateQueries({ queryKey: ["carousel"] }),
  });
  return mutation;
};

export default useAddCarouselItem;
