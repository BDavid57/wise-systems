import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateRegisterForm } from "../../../../utils";
import { Button, Input } from "../../../../components";

interface RegisterFormProps {
  onSubmit: (formData: RegisterFormData) => void;
}

export type RegisterFormData = {
  fname: string;
  lname: string;
  email: string;
  password: string;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRegisterForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleNavigateToLogin = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="fname"
        name="fname"
        label="First Name"
        value={formData.fname}
        onChange={handleChange}
        error={errors.fname}
      />
      <Input
        id="lname"
        name="lname"
        label="Last Name"
        value={formData.lname}
        onChange={handleChange}
        error={errors.lname}
      />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="flex justify-between items-center mt-4">
        <Button
          type="submit"
          label="Register"
          variant="primary"
          className="mt-4"
        />
        <span
          className="text-blue-500 cursor-pointer hover:underline text-sm"
          onClick={handleNavigateToLogin}
        >
          Sign In
        </span>
      </div>
    </form>
  );
};
