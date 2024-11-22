import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm, RegisterFormData } from "./components";

export const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (formData: RegisterFormData) => {
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/tasks");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};
