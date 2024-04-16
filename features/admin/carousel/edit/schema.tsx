import * as yup from "yup";

const editCarouselItemSchema = yup.object().shape({
  title: yup.string().required("Please enter title of the carousel"),
  link: yup.string().required("Please enter the link of the carousel"),
  cloudImage: yup.array(),
  image: yup.array().test("is-required", "Please upload an image", function () {
    const { cloudImage, image } = this.parent;
    if (cloudImage.length === 0) {
      if (image.length !== 0) {
        return true;
      }
      return false;
    }
    return true;
  }),
});

export default editCarouselItemSchema;
