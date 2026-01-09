import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Programs from './components/Programs';
import Trustees from './components/Trustees';
import Impact from './components/Impact';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('index');

  useEffect(() => {
    const path = window.location.pathname;
    const fileName = path.split('/').pop() || 'index.html';
    const page = fileName.replace('.html', '');
    // Handle root path or index.html
    if (page === 'index' || page === '') {
      setCurrentPage('index');
    } else {
      setCurrentPage(page);
    }
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, []);

  const SubPageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="bg-indigo-950 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] invert"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">{title}</h1>
        {subtitle && <p className="text-indigo-200 text-lg md:text-xl max-w-2xl opacity-80 font-medium">{subtitle}</p>}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <>
            <SubPageHeader title="About Our Foundation" subtitle="Empowering the youth of Aotearoa since 2025 through dedicated mentorship and resources." />
            <AboutSection />
          </>
        );
      case 'programs':
        return (
          <>
            <SubPageHeader title="Our Impact Programs" subtitle="Targeted initiatives in education, sports, arts, and community wellbeing." />
            <Programs />
          </>
        );
      case 'trustees':
        return (
          <>
            <SubPageHeader title="Board of Trustees" subtitle="Meet the leadership team ensuring governance and strategic vision for New Zealand's youth." />
            <Trustees />
          </>
        );
      case 'impact':
        return (
          <>
            <SubPageHeader title="Impact & Transparency" subtitle="Tracking our progress and ensuring financial accountability in everything we do." />
            <Impact />
          </>
        );
      case 'contact':
        return (
          <>
            <SubPageHeader title="Get In Touch" subtitle="We're here to answer your questions about mentoring, volunteering, or donations." />
            <Contact />
          </>
        );
      case 'index':
      default:
        return (
          <>
            <Hero />
            <AboutSection />
            <Programs />
            <Trustees />
            <Impact />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        {renderContent()}
        
        {/* Uniform CTA for sub-pages to maintain funnel flow */}
        {currentPage !== 'contact' && currentPage !== 'index' && (
          <section className="bg-indigo-50 py-24 border-t border-indigo-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-black text-indigo-950 mb-6 leading-tight">Support Our Mission</h2>
              <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Your contribution directly funds scholarships and equipment for young Kiwis with high potential.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="bg-indigo-600 text-white px-12 py-4 rounded-full font-black text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                  Donate Now
                </button>
                <a href="contact.html" className="text-indigo-950 font-bold hover:text-indigo-600 transition-colors flex items-center">
                  Inquire about volunteering <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;