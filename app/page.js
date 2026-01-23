import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import About from '@/components/About'
import Lessons from '@/components/Lessons'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pillars />
      <About />
      <Lessons />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
