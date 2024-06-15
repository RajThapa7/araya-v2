import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().required("Please enter the username"),
  password: yup.string().required("Please enter the password"),
  email: yup.string().required("Please enter the email"),
});

export default registerSchema;
