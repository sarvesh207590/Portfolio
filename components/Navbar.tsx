'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaBars } from 'react-icons/fa'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('Home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Prevent body scroll when sidebar open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const scrollTo = (id: string) => {
        const el = document.getElementById(id.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setActive(id)
        setMenuOpen(false)
    }

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 shadow-lg shadow-purple-900/10' : ''
                    }`}
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="font-bold font-display gradient-text cursor-pointer text-lg"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => scrollTo('home')}
                    >
                        Sarvesh Mokal
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link)}
                                className={`text-sm font-medium transition-all duration-200 hover:text-cyan-400 relative group ${active === link ? 'text-cyan-400' : 'text-gray-300'
                                    }`}
                            >
                                {link}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${active === link ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </button>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/13fW0iXk46a4KeYD5vwDOlU6THOFif8Yu/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm py-2 px-5"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <FaBars size={22} />
                    </button>
                </div>
            </motion.nav>

            {/* Sidebar overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-[9001] bg-black/60 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Sidebar panel */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-72 z-[9002] md:hidden flex flex-col"
                            style={{
                                background: 'linear-gradient(160deg, #0d0d1a 0%, #0a0a0f 100%)',
                                borderLeft: '1px solid rgba(124,58,237,0.3)',
                                boxShadow: '-8px 0 40px rgba(124,58,237,0.15)',
                            }}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Sidebar header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                                <span className="font-bold font-display gradient-text text-lg">Sarvesh Mokal</span>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
                                    aria-label="Close menu"
                                >
                                    <FaTimes size={20} />
                                </button>
                            </div>

                            {/* Nav links */}
                            <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                                {links.map((link, i) => (
                                    <motion.button
                                        key={link}
                                        onClick={() => scrollTo(link)}
                                        className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${active === link
                                                ? 'bg-gradient-to-r from-purple-600/30 to-cyan-500/20 text-cyan-400 border border-purple-500/30'
                                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        {link}
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Resume button at bottom */}
                            <div className="px-6 py-6 border-t border-white/10">
                                <a
                                    href="https://drive.google.com/file/d/1ObqKXp9PcbAwPSjM3C965U7cKdagaDEC/view?usp=drivesdk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full text-center block text-sm"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    View Resume
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
