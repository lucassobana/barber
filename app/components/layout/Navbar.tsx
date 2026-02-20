"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center"
        >
            <span className="uppercase font-bold tracking-widest">
                STREET CUT
            </span>

            <a
                href="https://wa.me/5511999999999"
                className="text-sm text-primary"
            >
                Agendar
            </a>
        </motion.nav>
    );
}