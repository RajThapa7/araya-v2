import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const data = {
  amount: "100",
  failure_url: "https://google.com",
  product_delivery_charge: "0",
  product_service_charge: "0",
  product_code: "EPAYTEST",
  signature: "YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=",
  signed_field_names: "total_amount,transaction_uuid,product_code",
  success_url: "https://esewa.com.np",
  tax_amount: "10",
  total_amount: "110",
  transaction_uuid: "ab14a8f2b02c3",
};

const makeEsewaPayment = async () => {
  const result = await axios.post(
    "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
    data
  );
  return result.data;
};

const useEsewaPayment = () => {
  const mutation = useMutation({ mutationFn: () => makeEsewaPayment() });
  return mutation;
};

export default useEsewaPayment;
