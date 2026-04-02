import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7c3aed',
                secondary: '#06b6d4',
                accent: '#2563eb',
                dark: '#0a0a0f',
                'dark-nav': '#0d0d1a',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-space)', 'sans-serif'],
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                glow: 'glow 2s ease-in-out infinite alternate',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #7c3aed, 0 0 10px #7c3aed' },
                    '100%': { boxShadow: '0 0 20px #06b6d4, 0 0 40px #06b6d4' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
