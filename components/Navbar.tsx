
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  // Fixed: Made children optional to resolve the TS error: 
  // "Property 'children' is missing in type '{ href: string; }' but required in type 'NavLinkProps'"
  // which can occur in certain build environments when text is passed as a child node.
  children?: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a 
    href={href} 
    className="text-slate-600 hover:text-indigo-900 transition-colors font-semibold tracking-tight text-sm uppercase tracking-wider"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="index.html" className="flex items-center group">
              <div className="flex flex-col">
                 <span className="font-black text-2xl tracking-tighter text-indigo-950 leading-none">ELEVATE</span>
                 <span className="text-[9px] tracking-[0.2em] font-bold text-indigo-600 uppercase">Youth Foundation</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Fixed the following lines which were previously causing TS errors */}
            <NavLink href="about.html">About</NavLink>
            <NavLink href="programs.html">Programs</NavLink>
            <NavLink href="trustees.html">Trustees</NavLink>
            <NavLink href="impact.html">Impact</NavLink>
            <NavLink href="contact.html">Contact</NavLink>
            <button className="bg-indigo-950 text-white px-7 py-2.5 rounded-full font-bold hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-950/10 active:scale-95 text-sm uppercase tracking-widest">
              Donate Now
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-950 hover:bg-indigo-50 p-2 rounded-xl transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-indigo-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-4 pb-8 space-y-1">
            <a href="about.html" className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-indigo-950 hover:bg-indigo-50 rounded-2xl transition-all">About</a>
            <a href="programs.html" className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-indigo-950 hover:bg-indigo-50 rounded-2xl transition-all">Programs</a>
            <a href="trustees.html" className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-indigo-950 hover:bg-indigo-50 rounded-2xl transition-all">Trustees</a>
            <a href="impact.html" className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-indigo-950 hover:bg-indigo-50 rounded-2xl transition-all">Impact</a>
            <a href="contact.html" className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-indigo-950 hover:bg-indigo-50 rounded-2xl transition-all">Contact</a>
            <div className="pt-6 px-4">
              <button className="w-full bg-indigo-950 text-white px-5 py-5 rounded-2xl font-black text-lg hover:bg-indigo-900 transition-colors shadow-xl shadow-indigo-950/20">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
