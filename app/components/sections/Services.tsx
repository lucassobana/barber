"use client";

import { motion } from "framer-motion";

const services = [
    { id: "01", title: "Corte Degradê", price: "R$ 65", time: "45 min" },
    { id: "02", title: "Barba Terapia", price: "R$ 45", time: "30 min" },
    { id: "03", title: "Combo Urban", price: "R$ 100", time: "75 min", highlight: true },
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-surface" id="services">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold uppercase mb-12 italic text-textMain">
                    Menu de <span className="text-primary">Serviços</span>
                </h2>

                <div className="grid gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-center justify-between p-6 rounded-xl border transition-all ${service.highlight ? "bg-primary/5 border-primary/20" : "bg-surfaceAlt/50 border-white/5"
                                } hover:border-primary/40`}
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-2xl font-bold opacity-20">{service.id}</span>
                                <h3 className="text-xl font-bold uppercase text-textMain">{service.title}</h3>
                            </div>
                            <div className="text-right">
                                <span className="block text-2xl font-bold text-primary">{service.price}</span>
                                <span className="text-xs text-textSecondary uppercase">{service.time}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}