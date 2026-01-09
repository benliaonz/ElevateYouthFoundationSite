import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FOUNDATION_NAME, OFFICE_ADDRESS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <div className="flex flex-col">
                 <span className="font-bold text-3xl tracking-tighter text-white leading-none">ELEVATE</span>
                 <span className="text-[10px] tracking-[0.3em] font-medium text-indigo-300 uppercase mt-1 opacity-80">Youth Foundation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-indigo-100/70">
              Changing lives by providing the mentorship, resources, and community that every young person needs to thrive in a modern world.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-indigo-800 flex items-center justify-center hover:bg-white hover:text-indigo-950 transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-indigo-800 flex items-center justify-center hover:bg-white hover:text-indigo-950 transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-indigo-800 flex items-center justify-center hover:bg-white hover:text-indigo-950 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-indigo-800 flex items-center justify-center hover:bg-white hover:text-indigo-950 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.1em] uppercase text-xs">Governance</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="about.html" className="hover:text-indigo-400 transition-colors">Our Mission</a></li>
              <li><a href="trustees.html" className="hover:text-indigo-400 transition-colors">Trustees</a></li>
              <li><a href="impact.html" className="hover:text-indigo-400 transition-colors">Impact Report</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">NZ Charities Register</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Transparency Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.1em] uppercase text-xs">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Make a Donation</a></li>
              <li><a href="contact.html" className="hover:text-indigo-400 transition-colors">Corporate Partners</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Gift Matching</a></li>
              <li><a href="contact.html" className="hover:text-indigo-400 transition-colors">Volunteer in Auckland</a></li>
              <li><a href="programs.html" className="hover:text-indigo-400 transition-colors">Mentorship Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.1em] uppercase text-xs">Registered Office</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-4 text-indigo-400 flex-shrink-0" />
                <span className="leading-relaxed">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-4 text-indigo-400 flex-shrink-0" />
                <span>+64 (9) ELEVATE</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-4 text-indigo-400 flex-shrink-0" />
                <a href="mailto:hello@elevateyouth.org" className="hover:text-indigo-400 transition-colors">hello@elevateyouth.org</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-indigo-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-indigo-400">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} {FOUNDATION_NAME}. REGISTERED NZ CHARITABLE TRUST</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-indigo-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}