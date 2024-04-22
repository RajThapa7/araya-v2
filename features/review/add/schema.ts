import * as yup from "yup";

const addReviewSchema = yup.object().shape({
  rating: yup.string().required("Please enter the rating for the product"),
});

export default addReviewSchema;
