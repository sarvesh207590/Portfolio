import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <LoadingScreen />
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Stats />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
