import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Container from "../common/Container";
import Button from "../ui/Button";

const navItems = [
	{
		label: "Learn",
		links: [
			{ label: "Courses", to: "/courses" },
			{ label: "Learning Paths", to: "/learning-paths" },
			{ label: "Projects", to: "/projects" },
		],
	},
	{
		label: "Solutions",
		links: [
			{ label: "Custom Software", to: "/solutions/software" },
			{ label: "Business Systems", to: "/solutions/business-systems" },
			{ label: "Technology Consulting", to: "/solutions/consulting" },
		],
	},
];

const simpleLinks = [
	{ label: "Products", to: "/products" },
	{ label: "Resources", to: "/resources" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const closeMobileMenu = () => {
		setMobileOpen(false);
		setOpenDropdown(null);
	};

	return (
		<header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
			<Container className="px-0">
				<nav className="rounded-2xl border border-border/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link
							to="/"
							onClick={closeMobileMenu}
							className="group flex items-center gap-2"
							aria-label="ByteNol home"
						>
							<div className="flex h-9 w-9 items-center justify-center rounded-xl text-white transition-transform duration-200 group-hover:rotate-3">
								<img src="./icons.svg" />
							</div>

							<span className="font-heading text-xl font-bold tracking-tight text-dark">
								Byte<span className="text-primary-dark">Nol</span>
							</span>
						</Link>

						{/* Desktop navigation */}
						<div className="hidden items-center gap-1 lg:flex">
							{navItems.map((item) => (
								<div
									key={item.label}
									className="relative"
									onMouseEnter={() => setOpenDropdown(item.label)}
									onMouseLeave={() => setOpenDropdown(null)}
								>
									<button
										type="button"
										className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-light hover:text-dark"
										onClick={() =>
											setOpenDropdown(
												openDropdown === item.label
													? null
													: item.label,
											)
										}
									>
										{item.label}

										<ChevronDown
											size={15}
											className={`transition-transform duration-200 ${openDropdown === item.label
													? "rotate-180"
													: ""
												}`}
										/>
									</button>

									<AnimatePresence>
										{openDropdown === item.label && (
											<motion.div
												initial={{
													opacity: 0,
													y: 8,
													scale: 0.98,
												}}
												animate={{
													opacity: 1,
													y: 0,
													scale: 1,
												}}
												exit={{
													opacity: 0,
													y: 8,
													scale: 0.98,
												}}
												transition={{
													duration: 0.16,
												}}
												className="absolute left-0 top-full pt-3"
											>
												<div className="w-64 rounded-2xl border border-border bg-white p-2 shadow-xl">
													{item.links.map((link) => (
														<NavLink
															key={link.to}
															to={link.to}
															className="group flex items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-primary-light"
														>
															<div>
																<p className="text-sm font-semibold text-dark">
																	{link.label}
																</p>

																<p className="mt-0.5 text-xs text-muted">
																	Explore ByteNol
																</p>
															</div>

															<ArrowRight
																size={16}
																className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary-dark"
															/>
														</NavLink>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}

							{simpleLinks.map((link) => (
								<NavLink
									key={link.to}
									to={link.to}
									className={({ isActive }) =>
										`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive
											? "bg-primary-light text-primary-dark"
											: "text-muted hover:bg-primary-light hover:text-dark"
										}`
									}
								>
									{link.label}
								</NavLink>
							))}
						</div>

						{/* Desktop actions */}
						<div className="hidden items-center gap-3 lg:flex">
							<Link
								to="/login"
								className="px-3 py-2 text-sm font-semibold text-dark transition-colors hover:text-primary-dark"
							>
								Sign in
							</Link>

							<Button className="rounded-xl px-4 py-2.5">
								Start Learning
							</Button>
						</div>

						{/* Mobile menu button */}
						<button
							type="button"
							onClick={() => setMobileOpen((value) => !value)}
							className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-dark transition-colors hover:bg-primary-light lg:hidden"
							aria-label={
								mobileOpen ? "Close menu" : "Open menu"
							}
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? (
								<X size={21} />
							) : (
								<Menu size={21} />
							)}
						</button>
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
								<div className="border-t border-border/70 pt-3">
									{navItems.map((item) => (
										<div key={item.label}>
											<button
												type="button"
												onClick={() =>
													setOpenDropdown(
														openDropdown === item.label
															? null
															: item.label,
													)
												}
												className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-dark"
											>
												{item.label}

												<ChevronDown
													size={17}
													className={`transition-transform ${openDropdown === item.label
															? "rotate-180"
															: ""
														}`}
												/>
											</button>

											<AnimatePresence>
												{openDropdown === item.label && (
													<motion.div
														initial={{
															height: 0,
															opacity: 0,
														}}
														animate={{
															height: "auto",
															opacity: 1,
														}}
														exit={{
															height: 0,
															opacity: 0,
														}}
														className="overflow-hidden pl-3"
													>
														{item.links.map((link) => (
															<Link
																key={link.to}
																to={link.to}
																onClick={closeMobileMenu}
																className="block rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-primary-light hover:text-dark"
															>
																{link.label}
															</Link>
														))}
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									))}

									{simpleLinks.map((link) => (
										<Link
											key={link.to}
											to={link.to}
											onClick={closeMobileMenu}
											className="block rounded-xl px-3 py-3 text-sm font-semibold text-dark hover:bg-primary-light"
										>
											{link.label}
										</Link>
									))}

									<div className="mt-2 border-t border-border/70 pt-3">
										<Link
											to="/login"
											onClick={closeMobileMenu}
											className="block rounded-xl px-3 py-3 text-sm font-semibold text-dark"
										>
											Sign in
										</Link>

										<Button
											className="mt-2 w-full"
											onClick={closeMobileMenu}
										>
											Start Learning
										</Button>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</nav>
			</Container>
		</header>
	);
}

export default Navbar;