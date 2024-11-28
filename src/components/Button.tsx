import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-secondary text-white font-bold rounded-3xl transition-colors hover:bg-secondary-light duration-150 ease-in-out px-6 py-2"
      {...props}
    >
      {children}
    </button>
  );
}
