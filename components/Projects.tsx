'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '@/utils/data'

const categories = ['All', 'Web', 'ML/AI', 'Android', 'Data']

export default function Projects() {
    const [filter, setFilter] = useState('All')

    const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

    return (
        <section id="projects" className="section-padding px-6 bg-[#0d0d1a]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">What I&apos;ve built</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Projects</h2>
                </motion.div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                                : 'glass text-gray-400 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
                            className="glass rounded-2xl p-6 flex flex-col group cursor-pointer"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                                >
                                    {project.icon}
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="px-2 py-1 rounded-full text-xs font-medium"
                                        style={{ background: `${project.color}20`, color: project.color }}
                                    >
                                        {project.category}
                                    </span>
                                    <span className="text-gray-500 text-xs py-1">{project.date}</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-display leading-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 text-gray-300 border border-white/10">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium glass text-gray-300 hover:text-white transition-all hover:border-purple-500/50"
                                >
                                    <FaGithub size={14} /> GitHub
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-white transition-all"
                                        style={{ background: `linear-gradient(135deg, ${project.color}, #06b6d4)` }}
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
