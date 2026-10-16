import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
	children: ReactNode;
	className?: string;
	containerClassName?: string;
	id?: string;
}

function Section({
	children,
	className = "",
	containerClassName = "",
	id,
}: SectionProps) {
	return (
		<section
			id={id}
			className={`py-20 sm:py-24 lg:py-32 ${className}`}
		>
			<Container className={containerClassName}>
				{children}
			</Container>
		</section>
	);
}

export default Section;