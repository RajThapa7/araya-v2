import * as yup from "yup";

const addProductSchema = yup.object().shape({
  title: yup.string().required("Please enter title of the product"),
  category: yup.string().required("Please select the category of the product"),
  price: yup.string().required("Please enter the price of the product"),
  description: yup
    .string()
    .required("Please enter the description of the product"),
  productHighlight: yup.string().required("Please enter the product highlight"),
  image: yup.array().min(1, "Please upload an image"),
});

export default addProductSchema;
