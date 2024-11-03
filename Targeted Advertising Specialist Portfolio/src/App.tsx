import React from 'react';
import { Header } from './components/Header';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Header />
      <Metrics />
      <Services />
      <Stats />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;