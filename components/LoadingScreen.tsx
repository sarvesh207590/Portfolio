'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a0f]"
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        <motion.div
                            className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                        >
                            Sarvesh Mokal
                        </motion.div>
                        <motion.div
                            className="flex gap-2 justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                />
                            ))}
                        </motion.div>
                        <motion.p
                            className="text-gray-400 mt-4 text-sm tracking-widest uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Loading Portfolio...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
