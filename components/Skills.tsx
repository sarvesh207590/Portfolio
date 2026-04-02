'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/utils/data'

const categories = Object.keys(skills) as (keyof typeof skills)[]

export default function Skills() {
    const [active, setActive] = useState<keyof typeof skills>('Frontend')

    return (
        <section id="skills" className="section-padding px-6 bg-[#0d0d1a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">What I work with</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Skills</h2>
                </motion.div>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === cat
                                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                                    : 'glass text-gray-400 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skill bars */}
                <motion.div
                    key={active}
                    className="grid md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {skills[active].map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className="glass rounded-xl p-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                                <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="skill-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: i * 0.05, ease: 'easeOut' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
