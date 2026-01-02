import React from 'react';
import { MISSION_STATEMENT } from '../constants';

export default function Hero() {
  return (
    <div id="about" className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920"
          alt="Children learning together"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Elevate the <span className="text-emerald-400">Future</span>.
        </h1>
        <p className="mt-6 text-xl text-slate-300 max-w-3xl">
          {MISSION_STATEMENT} We believe every child deserves a chance to succeed, regardless of their background.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-emerald-500/20">
            Support Our Mission
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
            Become a Mentor
          </button>
        </div>
      </div>
    </div>
  );
}