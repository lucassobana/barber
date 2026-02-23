"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-matte-black pt-32 pb-40 border-t border-white/5" id="location">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
                {/* Lado Esquerdo: Contactos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold uppercase italic mb-12 text-white font-display">
                        Nossa <span className="text-primary">Base</span>
                    </h2>

                    <div className="space-y-10">
                        {/* Endereço */}
                        <div className="flex items-start gap-6">
                            <span className="text-primary text-3xl">📍</span>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-sm mb-1 text-white">Av. Ricarti Teixeira, 172</p>
                                
                                <p className="text-slate-500 font-light">Andradas - MG</p>
                            </div>
                        </div>

                        {/* Horário */}
                        <div className="flex items-start gap-6">
                            <span className="text-primary text-3xl">⏰</span>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-sm mb-1 text-white">QG Operacional</p>
                                <p className="text-slate-500 font-light">Seg - Sex: 08:00 às 18:00</p>
                                <p className="text-slate-500 font-light">Sáb: 09:00 às 12:00</p>
                            </div>
                        </div>

                        {/* Telefone */}
                        <div className="flex items-start gap-6">
                            <span className="text-primary text-3xl">📞</span>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-sm mb-1 text-white">Conexão</p>
                                <p className="text-slate-500 font-light">(35) 99717-6490</p>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex gap-5 mt-16">
                        <a href="#" className="w-14 h-14 flex items-center justify-center bg-matte-grey rounded hover:text-primary transition-colors border border-white/5 text-white">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                    </div>
                </motion.div>

                {/* Lado Direito: Mapa */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full h-112.5 rounded overflow-hidden border border-white/10 grayscale"
                >
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 pointer-events-none"></div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197503123456!2d-46.654321!3d-23.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzA0LjQiUyA0NsKwMzknMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                        className="w-full h-full grayscale invert opacity-60"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>

            {/* Copyright e Logo Final */}
            <div className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="graffiti-logo text-xl text-white opacity-40 uppercase">
                    Los Santos
                </div>
                <div className="text-slate-600 text-[10px] uppercase tracking-[0.4em]">
                    © 2024 Los Santos Barber Shop. No fake, just real.
                </div>
            </div>
        </footer>
    );
}