import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
    title: 'Sarvesh Mokal | Full Stack Developer Portfolio',
    description: 'Portfolio of Sarvesh Santosh Mokal — Full Stack Developer, AIML Enthusiast, B.Tech IT 2022-2026. React, Next.js, Node.js, Java, Python.',
    keywords: ['Sarvesh Mokal', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio', 'AIML'],
    authors: [{ name: 'Sarvesh Mokal' }],
    openGraph: {
        title: 'Sarvesh Mokal | Full Stack Developer',
        description: 'Full Stack Developer & AIML Enthusiast',
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
            <body>{children}</body>
        </html>
    )
}
