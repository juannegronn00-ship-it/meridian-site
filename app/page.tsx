import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
