import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-dark text-white hover:bg-primary-bright",

  secondary:
    "bg-dark text-white hover:bg-dark-soft",

  outline:
    "border border-border bg-white text-dark hover:border-primary-dark hover:text-primary-dark",

  ghost:
    "bg-transparent text-dark hover:bg-primary-light",

  dark:
    "bg-dark text-white hover:bg-dark-soft"
};

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        gap-2
        rounded-xl
        px-5 py-3
        text-sm font-semibold
        transition-all duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-primary-dark
        focus:ring-offset-2
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;