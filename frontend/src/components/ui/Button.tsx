import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type btn_variant_t = "primary" | "secondary" | "outline" | "ghost" | "dark";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: btn_variant_t;
	className?: string;
	to?: string;
}

const variants: Record<btn_variant_t, string> = {
	primary:
		"bg-primary-500 text-white hover:bg-primary-600",

	secondary:
		"bg-secondary-500 text-white hover:bg-secondary-600",

	outline:
		"border border-indigo-500 bg-white text-indigo-500 hover:border-indigo-200 hover:text-black",

	ghost:
		"bg-transparent text-dark hover:bg-primary-light",

	dark:
		"bg-dark text-white hover:bg-dark-soft"
};

function Button({ children, to="", variant = "primary", className = "", ...props }: iButtonProps) {
	return (
		<Link to={to}>
			<button
				className={`
        inline-flex items-center justify-center
        gap-2
        px-5 py-3
        text-sm font-bold
        transition-all duration-400
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:pointer-events-none
        disabled:opacity-50
		px-10
		rounded-md
        ${variants[variant]}
        ${className}
      `}
				{...props}
			>
				{children}
			</button>
		</Link>
	);
}


export default Button;