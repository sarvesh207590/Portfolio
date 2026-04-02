'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Stats() {
    return (
        <section className="section-padding px-6 bg-[#0d0d1a]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Numbers speak</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">My Stats</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* GitHub Stats */}
                    <motion.div
                        className="glass rounded-2xl p-6 text-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-300 mb-4">GitHub Activity</h3>
                        <Image
                            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sarvesh207590&theme=tokyonight"
                            alt="GitHub Stats"
                            width={500}
                            height={200}
                            className="rounded-xl w-full"
                            unoptimized
                        />
                    </motion.div>

                    {/* LeetCode Stats */}
                    <motion.div
                        className="glass rounded-2xl p-6 text-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-300 mb-4">LeetCode Progress</h3>
                        <Image
                            src="https://leetcard.jacoblin.cool/sarveshmokal?hide=ranking&border=0&radius=21&theme=dark"
                            alt="LeetCode Stats"
                            width={400}
                            height={200}
                            className="rounded-xl mx-auto"
                            unoptimized
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
