"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Dados duplicados para o efeito infinito
const products = [
    { id: 1, name: 'T-Shirt "Signature" Black', price: "R$ 129,90", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800", badge: "Novo Drop", status: "available" },
    { id: 2, name: 'Dad Hat "Authentic"', price: "R$ 89,90", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800", badge: "Esgotado", status: "sold-out" },
    { id: 3, name: "Heavy Hoodie Charcoal", price: "R$ 249,90", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", badge: "Últimas Unidades", status: "available" },
    { id: 4, name: "Pack Socks 3P", price: "R$ 59,90", image: "https://images.unsplash.com/photo-1582966298435-853f585d5431?q=80&w=800", status: "available" },
    { id: 5, name: "Premium Tee", price: "R$ 149,90", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800", status: "available" },
];

// Criamos uma lista duplicada para que o scroll não tenha "buracos"
const infiniteProducts = [...products, ...products];

export default function Merch() {
    return (
        <section className="py-32 bg-background-dark overflow-hidden" id="drop">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 flex justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold uppercase italic tracking-tight mb-3 text-white font-display">
                            Los Santos <span className="text-primary">Merch</span>
                        </h2>
                        <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold">
                            Limited Drop Vol. 1
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Container da Animação */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex gap-8 pr-8"
                    animate={{ x: ["0%", "-50%"] }} // Move de 0 a metade da largura (que é a lista original)
                    transition={{
                        ease: "linear",
                        duration: 30, // Ajuste aqui para mudar a velocidade (maior = mais lento)
                        repeat: Infinity,
                    }}
                >
                    {infiniteProducts.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`}
                            className="min-w-75 sm:min-w-100 md:min-w-120 lg:min-w-125 group"
                        >
                            <div className="relative aspect-4/5 bg-matte-grey rounded overflow-hidden mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                                    fill
                                />

                                {product.badge && (
                                    <div className={`absolute top-5 left-5 text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm backdrop-blur-sm ${product.status === 'sold-out' ? 'bg-white/10 text-slate-400' : 'bg-primary'
                                        }`}>
                                        {product.badge}
                                    </div>
                                )}
                            </div>

                            <h4 className="font-bold uppercase tracking-tight text-lg mb-1 text-white font-display">
                                {product.name}
                            </h4>
                            <p className={`${product.status === 'sold-out' ? 'text-slate-600 line-through' : 'text-primary'} font-bold text-lg`}>
                                {product.price || "Consulte"}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}