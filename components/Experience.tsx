'use client'
import { motion } from 'framer-motion'
import { experiences } from '@/utils/data'

export default function Experience() {
    return (
        <section id="experience" className="section-padding px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Where I&apos;ve worked</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Experience</h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="relative md:pl-16"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-[#0a0a0f] hidden md:block"
                                    style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                                />

                                <motion.div
                                    className="glass rounded-2xl p-6"
                                    whileHover={{ y: -3, boxShadow: `0 0 25px ${exp.color}30` }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-display">{exp.role}</h3>
                                            <p className="text-lg font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                                            <p className="text-gray-400 text-sm">{exp.location}</p>
                                        </div>
                                        <span className="glass px-3 py-1 rounded-full text-xs text-gray-300 whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {exp.points.map((pt, j) => (
                                            <li key={j} className="text-gray-300 text-sm flex gap-2">
                                                <span className="text-cyan-400 mt-0.5">▸</span>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
