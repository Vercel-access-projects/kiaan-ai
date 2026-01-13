"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    const benefits = [
        "State-of-the-art AI Models",
        "Tailored Enterprise Solutions",
        "24/7 Expert Support",
        "Scalable Infrastructure",
        "Data Security & Privacy",
        "Seamless Integration",
    ];

    return (
        <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-semibold uppercase tracking-wider text-sm"
                        >
                            About Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6"
                        >
                            Redefining Possibilities with Artificial Intelligence
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg leading-relaxed mb-8"
                        >
                            At Kiaan AI, we are driven by a singular mission: to democratize access to advanced AI technologies for businesses of all sizes. As a subsidiary of Kiaan, we leverage decades of industry expertise to deliver solutions that are not just innovative, but practical and transformative.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                        >
                            {/* Placeholder for About Image - could leverage a gradient box if no image */}
                            <div className="aspect-video bg-gradient-to-br from-primary to-blue-900 p-8 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <span className="text-6xl font-bold block mb-2">10+</span>
                                    <span className="text-xl opacity-80">Years of Innovation</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
                        >
                            <p className="font-bold text-slate-900 text-lg">Trusted Partner</p>
                            <p className="text-slate-500 text-sm mt-1">Helping 500+ companies scale their AI infrastructure.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
