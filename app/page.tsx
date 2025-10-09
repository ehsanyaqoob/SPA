import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
