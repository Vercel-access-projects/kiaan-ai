"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Globe, Lock, LineChart, Bot } from "lucide-react";

const services = [
    {
        icon: BrainCircuit,
        title: "Machine Learning",
        description: "Custom ML models tailored to predict outcomes, optimize processes, and automate decision-making."
    },
    {
        icon: Bot,
        title: "Conversational AI",
        description: "Intelligent chatbots and virtual assistants that enhance customer support and engagement 24/7."
    },
    {
        icon: LineChart,
        title: "Predictive Analytics",
        description: "Turn data into actionable insights with advanced algorithms that forecast trends and behaviors."
    },
    {
        icon: Cpu,
        title: "Automation",
        description: "Streamline workflows and reduce manual effort with robotic process automation (RPA)."
    },
    {
        icon: Globe,
        title: "Natural Language Processing",
        description: "Unlock the power of text and speech data to understand sentiment, intent, and meaning."
    },
    {
        icon: Lock,
        title: "AI Security",
        description: "Robust security frameworks to protect your AI infrastructure and proprietary data."
    }
];

export function Services() {
    return (
        <section id="services" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-semibold uppercase tracking-wider text-sm"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4"
                    >
                        Targeted AI Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg"
                    >
                        We provide a comprehensive suite of AI services designed to elevate your business operations and strategy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
