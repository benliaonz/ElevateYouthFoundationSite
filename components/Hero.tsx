
import React from 'react';
import { MISSION_STATEMENT, FOUNDATION_EMAIL } from '../constants';

export default function Hero() {
  return (
    <div id="about" className="relative bg-indigo-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1920"
          alt="Youth empowerment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/90 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm">
            <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase">Based in Auckland, New Zealand</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-tight">
            Elevate Their <br />
            <span className="text-indigo-400">Potential.</span>
          </h1>
          <p className="mt-6 text-xl text-indigo-100/80 max-w-2xl leading-relaxed">
            {MISSION_STATEMENT} We build bridges of opportunity for Kiwi youth to grow, lead, and contribute to our society.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <a 
              href={`mailto:${FOUNDATION_EMAIL}?subject=Support Mission Inquiry`}
              className="bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/20 active:scale-95 text-center"
            >
              Support Our Mission
            </a>
            <a 
              href={`mailto:${FOUNDATION_EMAIL}?subject=Mentor Application`}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all active:scale-95 text-center"
            >
              Become a Mentor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
