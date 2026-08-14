import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Atom } from "lucide-react";
import { NAV_LINKS, SITE } from "../data/site";
import { GoldButton } from "./GoldButton";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    return (
        <header
            data-testid="main-navbar"
            className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
                scrolled ? "border-b border-white/5 bg-[#030308]/80 backdrop-blur-xl" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
                <Link to="/" data-testid="nav-logo-link" className="group flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-sky-400/30 bg-sky-400/10 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(0,163,255,0.4)]">
                        <Atom className="h-4 w-4 text-sky-400" />
                    </span>
                    <span className="leading-none">
                        <span className="font-display block text-[13px] font-bold tracking-wide text-white">
                            RETATRUTIDA<span className="text-neon">.HUB</span>
                        </span>
                        <span className="font-mono-tech mt-1 block text-[8px] uppercase tracking-[0.28em] text-gray-500">
                            {SITE.brand}
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
                    {NAV_LINKS.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            data-testid={`nav-link-${l.to.slice(1)}`}
                            className={`font-mono-tech text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-sky-300 ${
                                pathname === l.to ? "text-neon" : "text-gray-400"
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <GoldButton label="Avaliação gratuita" testid="nav-cta-button" className="!px-5 !py-2.5" />
                </div>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen((v) => !v)}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        data-testid="nav-mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden border-b border-white/5 bg-[#030308]/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-5">
                            {NAV_LINKS.map((l) => (
                                <Link
                                    key={l.to}
                                    to={l.to}
                                    data-testid={`nav-mobile-link-${l.to.slice(1)}`}
                                    className="rounded-lg px-3 py-3 font-mono-tech text-xs uppercase tracking-[0.2em] text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-sky-300"
                                >
                                    {l.label}
                                </Link>
                            ))}
                            <GoldButton label="Avaliação gratuita" testid="nav-mobile-cta-button" className="mt-3 justify-center" />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};
