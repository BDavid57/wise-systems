import { LoginFormData, RegisterFormData } from "../screens/auth";

export const validateRegisterForm = (
  formData: RegisterFormData
): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};

  if (!formData.fname.trim()) {
    errors.fname = "First name is required.";
  }

  if (!formData.lname.trim()) {
    errors.lname = "Last name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email format.";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};

export const validateLoginForm = (
  formData: LoginFormData
): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email format.";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required.";
  }

  return errors;
};
