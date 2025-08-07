import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InternetPlans from './components/InternetPlans';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Monitoring from './components/Monitoring';
import Equipments from './components/Equipments';

function App() {
  useEffect(() => {
    const cursorLight = document.getElementById('cursor-light');
    if (!cursorLight) return;

    const moveLight = (e: MouseEvent) => {
      cursorLight.style.left = `${e.clientX}px`;
      cursorLight.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveLight);

    return () => {
      window.removeEventListener('mousemove', moveLight);
    };
  }, []);

  return (
    <div>
      <div
        id="cursor-light"
        className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
      ></div>

      <div className="relative z-10">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="monitoring">
            <Monitoring />
          </section>
          <section id="plans">
            <InternetPlans />
          </section>
          <section id="equipments">
            <Equipments />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;