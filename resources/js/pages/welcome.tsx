import About from '@/components/AboutUs/About';
import FAQ from '@/components/FAQ/FAQ';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';
import Navbar from '@/components/Navbar/navbar';
import Projects from '@/components/Projects/Projects';
import Testimonials from '@/components/Testimonials/Testimonials';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
  const auth = { user: null }

  return (
    <>
      <div className="min-h-screen bg-[#f8fafc] text-[#0f1724]">
        <Navbar/>

        <main id="home" className="mx-auto max-w-6xl px-6 pb-20">
          {/* Hero */}
         <HeroSection/>

          {/* About */}
        <About/>

          {/* Projects / Cards */}
          <Projects/>

          {/* Features */}
         <Features/>

          {/* FAQ */}
        <FAQ/>

          {/* Testimonials */}
          <Testimonials/>
        </main>
          <Footer/>
      </div>
      {/* <div className="hidden h-14.5 lg:block"></div> */}
    </>
  )
}
