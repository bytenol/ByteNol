import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import type { ReactNode } from "react";


interface iPublicLayoutProps {
	header: ReactNode,
	footer: ReactNode
}


function PublicLayout({ header, footer }: iPublicLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<ScrollToTop />
			{ header && header }
			<main>
				<Outlet />
			</main>
			{ footer && footer }
		</div>
	);
}

export default PublicLayout;