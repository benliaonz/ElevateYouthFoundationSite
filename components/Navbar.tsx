import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { FOUNDATION_NAME } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-emerald-600 fill-emerald-600" />
            <span className="ml-2 font-bold text-xl tracking-tight text-slate-900">
              {FOUNDATION_NAME}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">About</a>
            <a href="#programs" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Programs</a>
            <a href="#impact" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Impact</a>
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-sm">
              Donate Now
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md">About</a>
            <a href="#programs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md">Programs</a>
            <a href="#impact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md">Impact</a>
            <div className="pt-2">
              <button className="w-full bg-emerald-600 text-white px-5 py-3 rounded-md font-medium hover:bg-emerald-700 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}