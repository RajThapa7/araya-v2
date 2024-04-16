import * as yup from "yup";

const addCarouselSchema = yup.object().shape({
  title: yup.string().required("Please enter title of the carousel"),
  link: yup.string().required("Please enter the subtitle of the carousel"),
  price: yup.string().required("Please enter the price for the product"),
  image: yup.array().min(1, "Please upload an image"),
});

export default addCarouselSchema;
