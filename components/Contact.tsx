'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo } from '@/utils/data'

const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#EA4335' },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#06b6d4' },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: '#', color: '#7c3aed' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'sarvesh-mokal', href: personalInfo.linkedin, color: '#0077B5' },
    { icon: FaGithub, label: 'GitHub', value: 'sarvesh207590', href: personalInfo.github, color: '#e2e8f0' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')
        // EmailJS integration — replace with your service/template/public key
        try {
            const emailjs = (await import('emailjs-com')).default
            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                { from_name: form.name, from_email: form.email, message: form.message },
                'YOUR_PUBLIC_KEY'
            )
            setStatus('sent')
            setForm({ name: '', email: '', message: '' })
        } catch {
            setStatus('error')
        }
        setTimeout(() => setStatus('idle'), 4000)
    }

    return (
        <section id="contact" className="section-padding px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Get in touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Contact Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            I&apos;m open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
                        </p>
                        <div className="space-y-4">
                            {contactItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 glass rounded-xl p-4 group hover:border-purple-500/50 transition-all"
                                    whileHover={{ x: 5 }}
                                >
                                    <span
                                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${item.color}20`, color: item.color }}
                                    >
                                        <item.icon size={18} />
                                    </span>
                                    <div>
                                        <p className="text-gray-500 text-xs">{item.label}</p>
                                        <p className="text-gray-200 text-sm group-hover:text-cyan-400 transition-colors">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder="your@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-sm mb-1 block">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder="Your message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn-primary w-full disabled:opacity-60"
                            >
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✅ Sent!' : status === 'error' ? '❌ Error — try again' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
