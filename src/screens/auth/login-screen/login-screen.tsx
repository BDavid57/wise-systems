import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../state";
import { LoginForm, LoginFormData } from ".";

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (formData: LoginFormData) => {
    dispatch(login({ email: formData.email }));
    navigate("/tasks");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
