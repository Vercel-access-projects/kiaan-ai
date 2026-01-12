"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    // { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        window.history.pushState({}, "", href);

        if (elem) {
            const offset = 50; // Adjust for navbar height
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#hero"
                    onClick={(e) => handleScroll(e, "#hero")}
                    className="relative h-10 w-32 md:h-12 md:w-40"
                >
                    {/* Fallback text if image missing, but we have logo.png in public */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={isScrolled ? "/kiaanai-logo-3b.png" : "/kiaanai-logo-4b.png"}
                            alt="Kiaan AI Logo"
                            width={isScrolled ? 70 : 50}
                            height={isScrolled ? 70 : 50}
                            className="object-contain transition-all duration-300 h-10 md:h-12 w-auto"
                            priority
                        />
                        <span className={cn(
                            "font-bold text-3xl md:text-4xl tracking-tight transition-colors duration-300",
                            isScrolled ? "text-[#002060]" : "text-white"
                        )}>
                            KIAANAI
                        </span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                isScrolled ? "text-slate-800" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={(e) => handleScroll(e, "#contact")}
                        className="bg-secondary hover:bg-cyan-400 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/25"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-slate-800" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-slate-800" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4 border-t"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-800 font-medium hover:text-primary"
                                onClick={(e) => handleScroll(e, link.href)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-primary text-white px-5 py-2 rounded-lg text-center font-medium"
                            onClick={(e) => handleScroll(e, "#contact")}
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
