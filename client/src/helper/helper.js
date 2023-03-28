import * as yup from "yup";
import { baseName } from "../Config";

export const SignupValidator = {
  initials: {
    name: "",
    email: "",
    password: "",
    avatar: "",
  },
  validation: yup.object().shape({
    name: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email id"
      )
      .required("email is required"),
    password: yup.string().required("password is required"),
    avatar: yup.mixed(),
  }),
};

export const LoginValidator = {
  initials: {
    email: "",
    password: "",
  },
  validation: yup.object().shape({
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email id"
      )
      .required("email is required"),
    password: yup.string().required("password is required"),
  }),
};
