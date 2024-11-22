import React from "react";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  iconPosition?: "left" | "right";
};

export const Button = ({
  label,
  icon,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  iconPosition = "left",
}: Props) => {
  const baseStyles =
    "py-2 px-4 rounded focus:ring-2 focus:ring-offset-2 flex items-center justify-center";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      {label}
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};
