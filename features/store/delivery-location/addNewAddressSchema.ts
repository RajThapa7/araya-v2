import * as yup from "yup";

const addNewAddressSchema = yup.object().shape({
  name: yup.string().required("Please enter the name"),
  label: yup.string().required("Please enter the label"),
  number: yup.string().required("Please enter the receiver number"),
  province: yup.string().required("Please select a province"),
  city: yup.string().required("Please enter your city"),
  area: yup.string().required("Please enter your area"),
  landmark: yup.string().required("Please enter the nearest landmark"),
});

export default addNewAddressSchema;
