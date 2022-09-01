import * as Yup from "yup";

const phoneRegExp =
  /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;

export const yupFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Phone Number must be at least 10 characters")
    .max(10, "Phone Number must not cross 10 characters"),

  // phoneNumber: Yup.string()
  //   .required("Phone number is required")
  //   .matches(
  //     /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
  //     "Invalid phone number"
  //   ),

  email: Yup.string().email("Invalid Email").required("Email is required"),

  adresses: Yup.array(),
});
