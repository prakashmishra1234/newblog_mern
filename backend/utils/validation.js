const Yup = require("yup");

exports.SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "name must contain more than 2 characters")
    .max(50, "name cannot exceed 50 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Please provide a valid password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters"
    ),
});

exports.validateRegister = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (err) {
    return res.status(400).json({ type: err.name, message: err.message });
  }
};
