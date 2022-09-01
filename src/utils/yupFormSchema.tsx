import * as Yup from "yup";

const phoneRegExp =
  /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;

const pincodeRegExp = /^[1-9][0-9]{5}$/;

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

  email: Yup.string().email("Invalid Email").required("Email is required"),

  addresses: Yup.array(),
});

export const yupAddressScema = Yup.object().shape({
  name: Yup.string().required("Set an address name"),
  country: Yup.string().required("Country is required").default("India"),
  state: Yup.string().required("Please select a state"),
  city: Yup.string().required("Please select a city"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(pincodeRegExp, "Invalid Pincode")
    .min(6, "Invalid Pincode"),
  address: Yup.string().required("Enter your address"),
});
