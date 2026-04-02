'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'

const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-[#0a0a0f]" />,
})

export default function Hero() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <Suspense fallback={<div className="absolute inset-0 z-0 bg-[#0a0a0f]" />}>
                <ThreeBackground />
            </Suspense>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent z-[1]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-[1]" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Avatar */}
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                >
                    <div className="relative">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-purple-500 animate-float"
                            style={{ boxShadow: '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(6,182,212,0.2)' }}>
                            <Image
                                src="/avatar2.jpeg"
                                alt="Sarvesh Mokal"
                                width={144}
                                height={144}
                                className="w-full h-full object-cover object-top"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-[#0a0a0f]" />
                    </div>
                </motion.div>

                {/* Greeting */}
                <motion.p
                    className="text-cyan-400 text-lg mb-2 font-medium tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    👋 Hello, World!
                </motion.p>

                {/* Name */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold font-display mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    I&apos;m{' '}
                    <span className="gradient-text">Sarvesh Mokal</span>
                </motion.h1>

                {/* Typing animation */}
                <motion.div
                    className="text-xl md:text-2xl text-gray-300 mb-3 h-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer', 2000,
                            'React Developer', 2000,
                            'AIML Enthusiast', 2000,
                            'Java Programmer', 2000,
                            'Problem Solver', 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-cyan-400 font-semibold"
                    />
                </motion.div>

                {/* Degree */}
                <motion.p
                    className="text-gray-400 text-sm md:text-base mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    B.Tech in Information Technology (2022–2026) &nbsp;|&nbsp; Pillai College of Engineering &nbsp;|&nbsp; CGPA: 9.05
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <button onClick={() => scrollTo('projects')} className="btn-primary">
                        View Projects
                    </button>
                    <a
                        href="https://drive.google.com/file/d/13fW0iXk46a4KeYD5vwDOlU6THOFif8Yu/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        Download Resume
                    </a>
                    <button onClick={() => scrollTo('contact')} className="btn-outline border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                        Contact Me
                    </button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-cyan-400 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
