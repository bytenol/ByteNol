import type { ButtonHTMLAttributes, ReactNode } from "react";

type btn_variant_t = "primary" | "secondary" | "outline" | "ghost" | "dark";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: btn_variant_t;
	className?: string;
}

const variants: Record<btn_variant_t, string> = {
	primary:
		"bg-indigo-500 text-white hover:bg-indigo-600",

	secondary:
		"bg-dark text-white hover:bg-dark-soft",

	outline:
		"border border-indigo-500 bg-white text-indigo-500 hover:border-indigo-200 hover:text-black",

	ghost:
		"bg-transparent text-dark hover:bg-primary-light",

	dark:
		"bg-dark text-white hover:bg-dark-soft"
};

function Button({children, variant = "primary", className = "", ...props}: iButtonProps) {
	return (
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
	);
}


export default Button;