import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

export interface IPostData {
  image: any[];
  isVisible: string;
  link: string;
  title: string;
  cloudImage: string[];
  removedCloudImage?: string[];
}

const editCarouselItem = async (
  id: string,
  data: IPostData,
  api: AxiosInstance
) => {
  const route = getApiRoute("editCarouselItem")(id);

  const formData = new FormData();

  formData.append("isVisible", data.isVisible);
  formData.append("link", data.link);
  formData.append("title", data.title);
  formData.append("cloudImage", JSON.stringify(data.cloudImage));
  formData.append(
    "removedCloudImage",
    JSON.stringify(data.removedCloudImage || [])
  );

  data.image.forEach((item) => formData.append("image", item));

  const result = await api.patch(route, formData);
  return result.data;
};

const useEditCarouselItem = (id: string) => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IPostData) => editCarouselItem(id, data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["carousel"] });
    },
  });
  return mutation;
};

export default useEditCarouselItem;
