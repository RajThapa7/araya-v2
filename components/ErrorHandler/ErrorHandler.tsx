import { AxiosError } from "axios";
import { toast } from "react-toastify";

const ErrorHandler = (error: Error) => {
  if (error instanceof AxiosError) {
    return toast.error(error?.response?.data?.message);
  }
  return "";
};

export default ErrorHandler;
