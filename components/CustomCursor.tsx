'use client'
import { useEffect } from 'react'

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const dot = document.getElementById('cursor-dot')

        const move = (e: MouseEvent) => {
            if (cursor) {
                cursor.style.left = e.clientX - 10 + 'px'
                cursor.style.top = e.clientY - 10 + 'px'
            }
            if (dot) {
                dot.style.left = e.clientX - 3 + 'px'
                dot.style.top = e.clientY - 3 + 'px'
            }
        }

        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])

    return (
        <>
            <div id="custom-cursor" />
            <div id="cursor-dot" />
        </>
    )
}
