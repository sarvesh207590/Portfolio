'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPaperPlane } from 'react-icons/fa'
import { RiRobot2Fill } from 'react-icons/ri'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'What are your skills?',
  'Tell me about your projects',
  'Where have you interned?',
  'How to contact you?',
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Sarvesh's AI assistant 👋 Ask me anything about his skills, projects, or experience!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages([...updated, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: "Sorry, something went wrong. Try again!" }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[8000] w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 0 20px rgba(124,58,237,0.5)' }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(124,58,237,0.7)' }}
        whileTap={{ scale: 0.95 }}
        animate={open ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        title="Chat with AI"
      >
        <RiRobot2Fill size={26} color="white" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-[8001] w-[350px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #0d0d1a, #0a0a0f)',
              border: '1px solid rgba(124,58,237,0.3)',
              boxShadow: '0 0 40px rgba(124,58,237,0.2)',
              height: '480px',
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                  <RiRobot2Fill size={16} color="white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Sarvesh&apos;s Assistant</p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
                <FaTimes size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                        ? 'text-white rounded-br-sm'
                        : 'text-gray-200 rounded-bl-sm'
                      }`}
                    style={
                      msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }
                        : { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }
                    }
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {[0, 1, 2].map((i) => (
                      <motion.div key={i} className="w-2 h-2 rounded-full bg-purple-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions (only on first message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full text-cyan-400 transition-all hover:text-white"
                    style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)' }}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl flex items-center justify-center disabled:opacity-40 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                <FaPaperPlane size={13} color="white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
