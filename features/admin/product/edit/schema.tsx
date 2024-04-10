import * as yup from "yup";

const editProductSchema = yup.object().shape({
  title: yup.string().required("Please enter title of the product"),
  category: yup.string().required("Please select the category of the product"),
  price: yup.string().required("Please enter the price of the product"),
  description: yup
    .string()
    .required("Please enter the description of the product"),
  productHighlight: yup.string().required("Please enter the product highlight"),
  cloudImage: yup.array(),
  image: yup.array().test("is-required", "Please upload an image", function () {
    const { cloudImage } = this.parent;
    if (cloudImage.length === 0) {
      return false;
    }
    return true;
  }),
});

export default editProductSchema;
