"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { sendEmail } from "@/app/actions/send-email";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.success) {
            setSuccess(true);
        } else {
            alert("Something went wrong. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Contact Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Let's Build the Future Together</h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Ready to transform your business with AI? Reach out to our team of experts for a consultation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <Mail className="text-secondary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email Us</h3>
                                        <p className="text-slate-400">accounts@kiaanai.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <Phone className="text-secondary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Call Us</h3>
                                        <p className="text-slate-400">+91 981-230-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <MapPin className="text-secondary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                                        <p className="text-slate-400">123 Pata chala ki galat leke mai pata nikla, Laapata</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
                    >
                        {success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="mt-6 text-secondary hover:text-white transition-colors text-sm underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">First Name</label>
                                        <input required name="firstName" type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Last Name</label>
                                        <input required name="lastName" type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea required name="message" rows={4} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary hover:bg-cyan-400 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
