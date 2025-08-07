import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InternetPlans from './components/InternetPlans';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InternetPlans />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;