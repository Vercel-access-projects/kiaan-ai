"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
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
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20"
        >
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Innovating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-200">Intelligence</span> for the Future
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Kiaan AI empowers businesses with cutting-edge artificial intelligence solutions.
                        We bridge the gap between imagination and reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            onClick={(e) => handleScroll(e, "#contact")}
                            className="group bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all flex items-center gap-2"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            onClick={(e) => handleScroll(e, "#services")}
                            className="px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
