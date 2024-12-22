import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <Navigation />
        <Hero />
      </header>
      <Features />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;