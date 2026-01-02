import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FOUNDATION_NAME } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-4">
              <Heart className="h-6 w-6 text-emerald-500 fill-emerald-500" />
              <span className="ml-2 font-bold text-lg">{FOUNDATION_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Empowering youth to reach their full potential through holistic support, education, and community building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Programs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Financial Reports</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Academic Excellence</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Youth Athletics</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Mentorship Circles</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Community Outreach</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-emerald-500" />
                <span>123 Elevation Blvd<br />New York, NY 10012</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-emerald-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-emerald-500" />
                <a href="mailto:support@elevatedyouth.org" className="hover:text-emerald-400">support@elevatedyouth.org</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {FOUNDATION_NAME}. All rights reserved. Charity Reg. No. 12345678.
        </div>
      </div>
    </footer>
  );
}