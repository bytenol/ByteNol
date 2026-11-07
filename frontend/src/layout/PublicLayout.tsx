import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import type { ReactNode } from "react";
import { useSession } from "../providers/SessionProvider";


interface iPublicLayoutProps {
	header: ReactNode,
	footer: ReactNode
}


function PublicLayout({ header, footer }: iPublicLayoutProps) {

	const { isAuthLoading } = useSession();

	if(isAuthLoading) {
		return <p>Loading...</p>;
	}

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