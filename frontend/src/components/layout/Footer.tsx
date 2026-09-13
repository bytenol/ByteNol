import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SocialIcon from "../common/SocialIcon";

const learnLinks = [
    { label: "Courses", to: "/courses" },
    { label: "Learning Paths", to: "/learning-paths" },
    { label: "Projects", to: "/projects" },
    { label: "Mentorship", to: "/mentorship" },
];

const buildLinks = [
    { label: "Custom Software", to: "/solutions/software" },
    { label: "Business Systems", to: "/solutions/business-systems" },
    { label: "Technology Consulting", to: "/solutions/consulting" },
    { label: "Our Products", to: "/products" },
];

const companyLinks = [
    { label: "About ByteNol", to: "/about" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/contact" },
];

const legalLinks = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
];

function Footer() {
    return (
        <footer className="bg-dark text-white">
            <Container>
                {/* Main footer */}
                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                                <img src="./icons.svg" />
                            </div>

                            <span className="font-heading text-2xl font-bold tracking-tight">
                                Byte<span className="text-primary">Nol</span>
                            </span>
                        </Link>

                        <p className="mt-6 text-sm leading-7 text-slate-400">
                            Learn technology. Build what matters.
                            <br />
                            ByteNol helps people develop practical
                            technology skills and helps organizations
                            build better software.
                        </p>

                        {/* Social links */}

                        <div className="mt-7 flex items-center gap-2">
                            <a
                                href="https://github.com/bytenol"
                                aria-label="ByteNol on GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                                <SocialIcon platform="github" />
                            </a>

                            <a
                                href="#"
                                aria-label="ByteNol on LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                                <SocialIcon platform="youtube" />
                            </a>

                            <a
                                href="#"
                                aria-label="ByteNol on Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                                <SocialIcon platform="instagram" />
                            </a>

                            <a
                                href="https://x.com/bytenol"
                                aria-label="ByteNol on X"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                                <SocialIcon platform="x" />
                            </a>

                            <a
                                href="#"
                                aria-label="ByteNol on Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                                <SocialIcon platform="facebook" />
                            </a>
                        </div>

                    </div>

                    {/* Learn */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold">
                            Learn
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {learnLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Build */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold">
                            Build
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {buildLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white"
                        >
                            Start a conversation
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-slate-500">
                            © {new Date().getFullYear()} ByteNol. All rights
                            reserved.
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-xs text-slate-500 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;