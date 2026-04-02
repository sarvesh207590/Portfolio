'use client'
import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    z: number
    vx: number
    vy: number
    r: number
    g: number
    b: number
    opacity: number
}

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animId: number
        let mouseX = 0
        let mouseY = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
            mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
        })

        // Create particles
        const particles: Particle[] = Array.from({ length: 120 }, () => ({
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1,
            z: Math.random(),
            vx: (Math.random() - 0.5) * 0.0003,
            vy: (Math.random() - 0.5) * 0.0003,
            r: Math.random() > 0.5 ? 124 : 6,
            g: Math.random() > 0.5 ? 58 : 182,
            b: Math.random() > 0.5 ? 237 : 212,
            opacity: Math.random() * 0.6 + 0.2,
        }))

        // Floating shapes (torus-like rings drawn as arcs)
        const shapes = [
            { x: -0.45, y: 0.15, size: 0.12, color: '#7c3aed', phase: 0, speed: 0.4 },
            { x: 0.45, y: -0.1, size: 0.09, color: '#06b6d4', phase: 2, speed: 0.6 },
            { x: 0.05, y: 0.3, size: 0.1, color: '#2563eb', phase: 4, speed: 0.3 },
        ]

        let t = 0

        const draw = () => {
            const W = canvas.width
            const H = canvas.height

            ctx.clearRect(0, 0, W, H)

            // Dark gradient background
            const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.7)
            bg.addColorStop(0, 'rgba(30,10,60,0.4)')
            bg.addColorStop(1, 'rgba(10,10,15,0)')
            ctx.fillStyle = bg
            ctx.fillRect(0, 0, W, H)

            // Draw particles
            for (const p of particles) {
                p.x += p.vx + mouseX * 0.0002
                p.y += p.vy + mouseY * 0.0002
                if (p.x > 1) p.x = -1
                if (p.x < -1) p.x = 1
                if (p.y > 1) p.y = -1
                if (p.y < -1) p.y = 1

                const px = (p.x + 1) / 2 * W
                const py = (p.y + 1) / 2 * H
                const radius = (2 + p.z * 2) * (W / 1440)

                ctx.beginPath()
                ctx.arc(px, py, Math.max(radius, 0.5), 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.opacity})`
                ctx.fill()
            }

            // Draw floating glowing rings
            for (const s of shapes) {
                const sx = (s.x + 1) / 2 * W
                const sy = ((s.y + Math.sin(t * s.speed + s.phase) * 0.08) + 1) / 2 * H
                const sr = s.size * Math.min(W, H)

                // Outer glow
                const grd = ctx.createRadialGradient(sx, sy, sr * 0.6, sx, sy, sr * 1.4)
                grd.addColorStop(0, s.color + '40')
                grd.addColorStop(1, s.color + '00')
                ctx.beginPath()
                ctx.arc(sx, sy, sr * 1.4, 0, Math.PI * 2)
                ctx.fillStyle = grd
                ctx.fill()

                // Ring
                ctx.beginPath()
                ctx.arc(sx, sy, sr, 0, Math.PI * 2)
                ctx.strokeStyle = s.color + 'aa'
                ctx.lineWidth = 1.5
                ctx.stroke()

                // Inner ring
                ctx.beginPath()
                ctx.arc(sx, sy, sr * 0.6, 0, Math.PI * 2)
                ctx.strokeStyle = s.color + '55'
                ctx.lineWidth = 1
                ctx.stroke()
            }

            // Connect nearby particles with lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 0.15) {
                        const alpha = (1 - dist / 0.15) * 0.15
                        ctx.beginPath()
                        ctx.moveTo((particles[i].x + 1) / 2 * W, (particles[i].y + 1) / 2 * H)
                        ctx.lineTo((particles[j].x + 1) / 2 * W, (particles[j].y + 1) / 2 * H)
                        ctx.strokeStyle = `rgba(124,58,237,${alpha})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            t += 0.01
            animId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
        />
    )
}
