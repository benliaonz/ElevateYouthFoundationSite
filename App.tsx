import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Impact from './components/Impact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Impact />
        <section className="bg-indigo-950 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] invert"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">Join the Movement. <br />Elevate the Next Generation.</h2>
            <p className="text-indigo-200 text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
              Every young person has a story waiting to be written. Your support provides the ink and the pages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="bg-white text-indigo-950 px-12 py-4 rounded-full font-black text-lg hover:bg-indigo-50 transition-all shadow-2xl active:scale-95">
                Donate Now
              </button>
              <a href="#" className="text-white font-bold hover:text-indigo-300 transition-colors flex items-center">
                Learn about partnership <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;