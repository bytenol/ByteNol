import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Container from "../common/Container";
import Button from "../ui/Button";

const simpleLinks = [
	{ label: "Learn", to: "/courses" },
	{ label: "Products", to: "/products" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [activeLink, setActiveLinnk] = useState("");

	const closeMobileMenu = () => {
		setMobileOpen(false);
		setOpenDropdown(null);
	};

	return (
		<header className="absolute sticky top-0 z-20 fira-sans-regular border-y-slate-300 bg-background">
			<nav className="py-3 px-4">
				<div
					className="flex items-center justify-between"
				>
					<div className="flex">
						<Link
							to="/"
							onClick={closeMobileMenu}
							className="group flex items-center mr-15"
							aria-label="ByteNol home"
						>
							<div className="flex h-9 w-9 items-center justify-center rounded-xl text-white transition-transform duration-200 group-hover:rotate-3">
								<img src="./icons.svg" />
							</div>

							<span className="font-heading text-3xl font-bold tracking-tight text-slate-700">
								ByteNol
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div
							className="hidden items-center lg:flex gap-x-4"
						>
							{
								simpleLinks.map(link => {
									return (
										<NavTextLink
											key={link.to}
											to={link.to}
											label={link.label}
											className="rounded-xl px-2 py-2.5 font-bold text-medium transition-colors"
										/>
									)
								})
							}
						</div>


					</div>

					<div className="flex items-center">

						<div className="hidden flex gap-2 lg:flex">
							<AuthButton />
						</div>

						<button
							type="button"
							onClick={() => setMobileOpen((value) => !value)}
							className="flex h-10 w-10 items-center justify-center rounded-xl text-dark transition-colors hover:bg-primary-light lg:hidden"
							aria-label={
								mobileOpen ? "Close menu" : "Open menu"
							}
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? (<X size={21} />) : (<Menu size={21} />)}
						</button>

					</div>

				</div>

				{/* Mobile navigation */}
				<AnimatePresence>
					{mobileOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="overflow-hidden lg:hidden"
						>
							<div className="pt-3">
								{simpleLinks.map((link) => (
									<NavTextLink
										key={link.to}
										to={link.to}
										label={link.label}
										onClick={closeMobileMenu}
										className="block rounded-xl px-3 py-3 text-sm font-semibold text-muted hover:bg-primary-200 hover:text-primary-500"
									>
									</NavTextLink>
								))}

								<div className="mt-2 border-t border-slate-500/70 pt-3 flex gap-2 items-center">
									<AuthButton />
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

			</nav>
		</header>
	);
}


interface iNavTextLink {
	to: string;
	label: string;
	className?: string;
	onClick?: () => void;
}


function NavTextLink({ to, label, onClick, className = "" }: iNavTextLink) {
	return (
		<NavLink
			to={to}
			onClick={() => { onClick && onClick() }}
			className={({ isActive }) =>
				`${isActive
					? "bg-primary-200 text-primary-500"
					: "text-muted hover:bg-primary-200"
				} ${className}`
			}
		>
			{label}
		</NavLink>
	)
}



function AuthButton() {
	return (
		<>
			<Button variant="outline">
				Log In
			</Button>
			<Button variant="primary">
				Register
			</Button>
		</>
	)
}

export default Navbar;