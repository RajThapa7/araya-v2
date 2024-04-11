import * as yup from "yup";

const adminLoginSchema = yup.object().shape({
  username: yup.string().required("Please enter the username"),
  password: yup.string().required("Please enter the password"),
});

export default adminLoginSchema;
