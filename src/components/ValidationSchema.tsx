import style from "./SingUpForm.module.css";
const validationSchema = {
  firstName: {
    rule: /^[A-Za-z]+$/,
    required: false,
    maxLength: 15,
    errorMessage: "First Name cannot be empty",
    border: style["input-red-border"],
  },
  lastName: {
    rule: /^[A-Za-z]+$/,
    required: false,
    maxLength: 15,
    errorMessage: "First Name cannot be empty",
    border: style["input-red-border"],
  },
  email: {
    rule: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    required: false,
    errorMessage: "Looks like this is not an email",
    border: style["input-red-border"],
  },
  password: {
    minLength: 6,
    required: false,
    errorMessages: [
      "Password cannot be empty",
      "Password must contain at least 6 characters",
    ],
    border: style["input-red-border"],
  },
};

export default validationSchema;
