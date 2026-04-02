'use client'
import { motion } from 'framer-motion'
import { personalInfo } from '@/utils/data'

const traits = [
    { icon: '🧩', title: 'Problem Solver', desc: 'Love breaking down complex problems into elegant solutions' },
    { icon: '⚡', title: 'Quick Learner', desc: 'Adapt fast to new technologies and frameworks' },
    { icon: '🤝', title: 'Team Player', desc: 'Thrive in collaborative environments using Agile practices' },
]

const stats = [
    { value: '7+', label: 'Projects' },
    { value: '3', label: 'Internships' },
    { value: '9.05', label: 'CGPA' },
    { value: '15+', label: 'Technologies' },
]

export default function About() {
    return (
        <section id="about" className="section-padding px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Get to know me</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">{personalInfo.bio}</p>
                        <div className="flex flex-wrap gap-3">
                            {['📍 New Panvel, Maharashtra', '🎓 Pillai College of Engineering', '📅 2022–2026'].map((item) => (
                                <span key={item} className="glass px-4 py-2 rounded-full text-sm text-gray-300">{item}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                className="glass rounded-2xl p-6 text-center"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl font-bold gradient-text font-display">{s.value}</div>
                                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Trait cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {traits.map((t, i) => (
                        <motion.div
                            key={t.title}
                            className="glass rounded-2xl p-6 text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(6,182,212,0.2)' }}
                        >
                            <div className="text-4xl mb-3">{t.icon}</div>
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{t.title}</h3>
                            <p className="text-gray-400 text-sm">{t.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
