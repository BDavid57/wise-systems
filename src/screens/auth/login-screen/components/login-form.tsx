import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../../../utils";
import { Button, Input } from "../../../../components";

export type LoginFormData = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: (formData: LoginFormData) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LoginFormData>({
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
    const validationErrors = validateLoginForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <Button type="submit" label="Login" variant="primary" />
        <span
          className="text-blue-500 cursor-pointer hover:underline text-sm"
          onClick={handleNavigateToRegister}
        >
          Sign Up
        </span>
      </div>
    </form>
  );
};
