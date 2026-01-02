import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FOUNDATION_NAME } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <img 
                src="logo.png" 
                alt={FOUNDATION_NAME} 
                className="h-14 w-auto brightness-0 invert opacity-90"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement?.insertAdjacentHTML('afterbegin', `<span class="font-bold text-2xl tracking-tighter text-white">ELEVATE<span class="block text-xs tracking-[0.3em] text-slate-500 uppercase mt-1">Youth Foundation</span></span>`);
                }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Changing lives by providing the mentorship, resources, and community that every young person needs to thrive in a modern world.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.1em] uppercase text-xs">Resources</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Impact Report 2024</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Donor Transparency</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.1em] uppercase text-xs">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Make a Donation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Corporate Partners</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gift Matching</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Planned Giving</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Volunteer Portal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 tracking-[0.1em] uppercase text-xs">Office</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-4 text-blue-500 flex-shrink-0" />
                <span className="leading-relaxed">123 Innovation Way, Suite 400<br />Boston, MA 02110</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-4 text-blue-500 flex-shrink-0" />
                <span>+1 (888) ELEVATE</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-4 text-blue-500 flex-shrink-0" />
                <a href="mailto:hello@elevateyouth.org" className="hover:text-blue-400 transition-colors">hello@elevateyouth.org</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-slate-600">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} {FOUNDATION_NAME}. NON-PROFIT 501(C)(3)</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}