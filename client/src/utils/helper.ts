import * as yup from "yup";

export const SignupValidator = {
  initials: {
    name: "",
    email: "",
    password: "",
    // avatar: "",
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
    // avatar: yup.mixed().required("Profile picture is required"),
  }),
};

export interface LoginForm {
  name?: string;
  email: string;
  password: string;
}

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

export const PasswordValidator = {
  initials: {
    password: "",
    confirmPassword: "",
  },
  validation: yup.object().shape({
    password: yup.string().required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password and Confirm Password must match"),
  }),
};

export const setLocalStorageData = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
