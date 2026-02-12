import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const navItems = [
    { name: 'Over DME', href: '#over' },
    { name: 'Diensten', href: '#diensten' },
    { name: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`pointer-events-auto transition-all duration-500 ease-out ${scrolled
                        ? 'bg-white/60 backdrop-blur-3xl border border-white/20 rounded-full py-3 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] w-auto min-w-[300px]'
                        : 'bg-white/30 backdrop-blur-md py-4 px-6 w-[90%] max-w-5xl rounded-full border border-white/20'
                        }`}
                >
                    <div className="flex items-center justify-between gap-8">

                        {/* Logo */}
                        <a href="#" className="relative group">
                            <span className="font-heading font-black text-2xl tracking-tighter text-gray-900 transition-colors duration-300">
                                DeMol<span className="text-dme-teal transition-colors">.</span>
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-bold text-gray-800 hover:text-dme-teal transition-colors group overflow-hidden"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className="absolute inset-0 bg-white/40 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center">
                            <a
                                href="#contact"
                                className={`group px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${scrolled
                                    ? 'bg-dme-accent text-white hover:bg-dme-accent-dark hover:scale-105 shadow-lg shadow-dme-accent/20'
                                    : 'bg-dme-accent text-white hover:bg-dme-accent-dark shadow-lg shadow-dme-accent/20'
                                    }`}
                            >
                                <span>Kennismaken</span>
                                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-gray-900 p-2 hover:bg-dme-teal/10 rounded-full transition-colors"
                            onClick={() => setIsOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-gray-900"
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200 transition-colors shadow-sm"
                            onClick={() => setIsOpen(false)}
                            aria-label="Sluit menu"
                        >
                            <X size={32} strokeWidth={2} />
                        </button>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                                hidden: {}
                            }}
                            className="flex flex-col items-center gap-8"
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-heading font-black text-gray-900 hover:text-dme-teal transition-colors tracking-tight"
                                    variants={{
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "backOut" } },
                                        hidden: { opacity: 0, y: 20 }
                                    }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="absolute bottom-12 left-0 right-0 flex justify-center"
                        >
                            <a href="tel:0612408678" className="flex flex-col items-center gap-2 text-gray-500 hover:text-dme-teal transition-colors">
                                <Phone size={24} />
                                <span className="font-mono text-sm font-bold">06 124 086 78</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
