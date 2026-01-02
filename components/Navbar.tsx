import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FOUNDATION_NAME } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div className="flex flex-col">
                 <span className="font-bold text-2xl tracking-tighter text-indigo-950 leading-none">ELEVATE</span>
                 <span className="text-[9px] tracking-[0.2em] font-medium text-indigo-900 uppercase">Youth Foundation</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-slate-600 hover:text-indigo-900 transition-colors font-medium">About</a>
            <a href="#programs" className="text-slate-600 hover:text-indigo-900 transition-colors font-medium">Programs</a>
            <a href="#impact" className="text-slate-600 hover:text-indigo-900 transition-colors font-medium">Impact</a>
            <button className="bg-indigo-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-900 transition-all shadow-md active:scale-95">
              Donate Now
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-900 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-lg">About</a>
            <a href="#programs" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-lg">Programs</a>
            <a href="#impact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-lg">Impact</a>
            <div className="pt-4 px-3">
              <button className="w-full bg-indigo-950 text-white px-5 py-4 rounded-xl font-bold hover:bg-indigo-900 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}