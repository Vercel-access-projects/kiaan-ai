"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder for partner logos - using text for now or generic placeholders
const partners = [
    "TechCorp", "InnovateX", "DataFlow", "CloudSystems", "AI Dynamics", "FutureScale"
];

export function Partners() {
    return (
        <section id="partners" className="py-12 md:py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-500 font-medium mb-8">Trusted by industry leaders</p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
