import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("Please enter a first name")
    .min(1, "Please enter a first name"),
  last_name: yup
    .string()
    .trim()
    .required("Please enter a last name")
    .min(1, "Please enter a first name"),
  email: yup.string().email("Must be a vaild Email").required("Please enter an Email"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(3, "Password is too short - should be 3 chars minimum."),
  tos: yup.boolean().oneOf([true], "Please check Terms of Service"),
});

export default formSchema;
