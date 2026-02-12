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
                        ? 'bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full py-3 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-auto min-w-[300px]'
                        : 'bg-black/10 backdrop-blur-md py-4 px-6 w-full max-w-7xl rounded-full border-transparent'
                        }`}
                >
                    <div className="flex items-center justify-between gap-8">

                        {/* Logo */}
                        <a href="#" className="relative group">
                            <span className="font-heading font-black text-2xl tracking-tighter text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dme-teal group-hover:to-white">
                                DeMol<span className="text-dme-teal group-hover:text-white transition-colors">.</span>
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className="absolute inset-0 bg-white/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center">
                            <a
                                href="#contact"
                                className={`group px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${scrolled
                                    ? 'bg-white text-black hover:bg-dme-teal hover:text-white'
                                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black'
                                    }`}
                            >
                                <span>Kennismaken</span>
                                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={48} strokeWidth={1} />
                        </button>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                                hidden: {}
                            }}
                            className="flex flex-col items-center gap-6"
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl md:text-7xl font-heading font-bold text-transparent text-outline hover:text-white hover:text-fill transition-all duration-500"
                                    variants={{
                                        visible: { opacity: 1, y: 0 },
                                        hidden: { opacity: 0, y: 50 }
                                    }}
                                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 left-0 right-0 flex justify-center"
                        >
                            <a href="tel:0612408678" className="flex flex-col items-center gap-2 text-gray-400 hover:text-dme-teal transition-colors">
                                <Phone size={24} />
                                <span className="font-mono text-sm">06 124 086 78</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
