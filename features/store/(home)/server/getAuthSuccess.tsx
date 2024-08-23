import getApiRoute from "@/helper/getApiRoute";
import axios from "axios";

const getAuthSuccess = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const url = baseUrl + getApiRoute("authSuccess")();

  // const response = await fetch(url, {
  //   cache: "no-store",
  // });

  // return response.json();
  const response = await axios.get(url);
  return response.data;
};

export { getAuthSuccess };
