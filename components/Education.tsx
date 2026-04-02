'use client'
import { motion } from 'framer-motion'
import { education, certificates } from '@/utils/data'

export default function Education() {
    return (
        <section id="education" className="section-padding px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Academic background</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Education</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            className="glass rounded-2xl p-6 text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(124,58,237,0.2)' }}
                        >
                            <div className="text-4xl mb-3">{edu.icon}</div>
                            <h3 className="text-base font-bold text-white mb-1 font-display leading-tight">{edu.degree}</h3>
                            <p className="text-purple-400 font-medium text-sm mb-1">{edu.institution}</p>
                            <p className="text-gray-500 text-xs mb-2">{edu.location}</p>
                            <p className="text-gray-400 text-xs mb-2">{edu.year}</p>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600/30 to-cyan-500/30 text-cyan-400 border border-cyan-500/30">
                                {edu.score}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Certificates */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold font-display text-center mb-8 text-white">
                        🏅 Certificates
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {certificates.map((cert, i) => (
                            <motion.div
                                key={i}
                                className="glass rounded-xl p-4 text-center group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6,182,212,0.2)' }}
                            >
                                <div className="text-3xl mb-2">{cert.icon}</div>
                                <p className="text-white text-sm font-semibold mb-1">{cert.name}</p>
                                <p className="text-gray-500 text-xs">{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
