import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Impact from './components/Impact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Impact />
        <section className="bg-emerald-600 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
            <p className="text-emerald-100 text-lg mb-8">
              Join thousands of others in supporting the next generation of leaders, dreamers, and doers.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Donate Today
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;