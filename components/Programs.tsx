import React from 'react';
import { PROGRAMS } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  return (
    <div className="bg-white">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4 text-center md:text-left">Our Core Pillars</h2>
          <p className="text-4xl md:text-6xl font-black text-indigo-950 tracking-tight leading-none text-center md:text-left">
            Empowerment <br />
            Through <span className="text-indigo-600">Action.</span>
          </p>
          <p className="mt-8 text-lg text-slate-500 leading-relaxed text-center md:text-left">
            We focus on four key areas where we can make the most significant impact on the lives of young New Zealanders.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="group relative bg-white rounded-[48px] overflow-hidden border border-indigo-50 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-950 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    <program.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              <div className="p-10 md:p-14">
                <h3 className="text-3xl font-black text-indigo-950 mb-6">{program.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="contact.html" className="inline-flex items-center gap-3 bg-indigo-950 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-950/10 active:scale-95">
                    Apply Now <ArrowRight size={20} />
                  </a>
                  <button className="px-8 py-4 rounded-full border border-indigo-100 text-indigo-950 font-bold hover:bg-indigo-50 transition-all">
                    View Success Stories
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 md:p-20 bg-indigo-50 rounded-[60px] text-center border border-indigo-100 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full opacity-50 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-indigo-950 mb-6">Don't See What You Need?</h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
              Our foundation is always looking for new ways to support youth. If you have a specific project or need that aligns with our mission, reach out.
            </p>
            <a href="contact.html" className="text-indigo-600 font-black text-xl hover:text-indigo-800 transition-colors inline-flex items-center gap-2">
              Propose a Partnership <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}