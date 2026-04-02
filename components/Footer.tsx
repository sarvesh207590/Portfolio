'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personalInfo } from '@/utils/data'

const socials = [
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: FaLinkedin, color: '#0077B5' },
    { label: 'GitHub', href: personalInfo.github, icon: FaGithub, color: '#e2e8f0' },
    { label: 'LeetCode', href: personalInfo.leetcode, icon: SiLeetcode, color: '#FFA116' },
    { label: 'Email', href: `mailto:${personalInfo.email}`, icon: FaEnvelope, color: '#EA4335' },
]

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="bg-[#0d0d1a] border-t border-white/5 py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <div className="font-bold font-display gradient-text mb-1 text-lg">Sarvesh Mokal</div>
                        <p className="text-gray-500 text-sm">Designed & Built by Sarvesh Mokal</p>
                    </div>

                    <div className="flex gap-4">
                        {socials.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                whileHover={{ scale: 1.2, boxShadow: `0 0 15px ${s.color}60` }}
                                title={s.label}
                                style={{ color: '#9ca3af' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = s.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                            >
                                <s.icon size={18} />
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        onClick={scrollTop}
                        className="glass px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all"
                        whileHover={{ y: -2 }}
                    >
                        ↑ Back to top
                    </motion.button>
                </div>

                <div className="text-center mt-6 text-gray-600 text-xs">
                    © {new Date().getFullYear()} Sarvesh Mokal. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
