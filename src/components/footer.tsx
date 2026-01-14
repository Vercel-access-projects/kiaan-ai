"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        window.history.pushState({}, "", href);

        if (elem) {
            const offset = 100; // Adjust for navbar height
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-6 mb-8 md:mb-0">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/kiaanai-logo-0a2.png"
                            alt="Kiaan AI Logo"
                            width={150}
                            height={150}
                            className="object-contain" // Left Logo
                        />
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        {/* Social Icons (Top) */}
                        <div className="flex gap-6 text-slate-400">
                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></Link>
                        </div>

                        {/* Navigation Links (Bottom - Between icons and 'Made with') */}
                        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                            <Link href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="hover:text-white transition-colors">Home</Link>
                            <Link href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-white transition-colors">About</Link>
                            <Link href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-white transition-colors">Services</Link>
                            <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-2 mt-2 md:pt-0 md:mt-0 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4 md:gap-0">
                    <p>&copy; {new Date().getFullYear()} Kiaan AI. All rights reserved.</p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        <span className="text-slate-400 flex items-center gap-2">
                            Made with ❤️ by <Link href="#" className="text-white font-medium hover:text-secondary transition-colors">Mohammad Areeb Ansari</Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
