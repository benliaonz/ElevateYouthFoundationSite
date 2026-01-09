
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { OFFICE_ADDRESS, FOUNDATION_EMAIL, FOUNDATION_PHONE } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full -mr-48 -mt-48 opacity-50 blur-3xl"></div>
          
          <div className="lg:flex lg:gap-24 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Connect With Us</h2>
              <h3 className="text-4xl font-black text-indigo-950 mb-8 leading-tight">
                Ready to make a <br />
                <span className="text-indigo-600">difference?</span>
              </h3>
              <p className="text-slate-600 mb-12 max-w-md">
                Whether you want to become a mentor, volunteer for our community events, or discuss partnership opportunities, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-950">Auckland Office</h4>
                    <p className="text-sm text-slate-500">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-950">Call Us</h4>
                    <p className="text-sm text-slate-500">{FOUNDATION_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-950">Email Us</h4>
                    <p className="text-sm text-slate-500">{FOUNDATION_EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-10 rounded-[32px] shadow-xl border border-indigo-100">
                <h4 className="text-2xl font-black text-indigo-950 mb-6">Send a Message</h4>
                <p className="text-slate-600 mb-8">
                  Click the button below to send us an email directly. Our team typically responds within 24-48 hours.
                </p>
                <a 
                  href={`mailto:${FOUNDATION_EMAIL}`}
                  className="w-full bg-indigo-950 text-white font-bold py-5 rounded-2xl hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-3 text-lg"
                >
                  Email the Foundation <Send size={20} />
                </a>
                <p className="mt-6 text-xs text-center text-slate-400 font-medium">
                  Official Email: {FOUNDATION_EMAIL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
