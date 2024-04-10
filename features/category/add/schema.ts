import * as yup from "yup";

const addCategorySchema = yup.object().shape({
  categoryName: yup.string().required("Please enter the category name"),
});

export default addCategorySchema;
