import React from 'react';
import { PROGRAMS } from '../constants';

export default function Programs() {
  return (
    <div id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em]">Our Core Pillars</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
            Empowerment Through Action
          </p>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-indigo-50 overflow-hidden flex flex-col">
              <div className="h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 bg-indigo-950 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-900/10">
                  <program.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-indigo-950 mb-3">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">
                  {program.description}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <a href="#" className="text-indigo-950 text-sm font-bold hover:text-indigo-600 flex items-center transition-colors">
                    Join this program <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}