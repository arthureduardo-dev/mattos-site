import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InternetPlans from './components/InternetPlans';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="internet-plans">
          <InternetPlans />
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
  );
}

export default App;