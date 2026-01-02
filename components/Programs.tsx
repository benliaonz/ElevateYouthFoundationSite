import React from 'react';
import { PROGRAMS } from '../constants';

export default function Programs() {
  return (
    <div id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Empowerment Through Action
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Our comprehensive approach focuses on the key pillars of development for a well-rounded foundation in life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <program.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                  {program.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center">
                    Learn more <span className="ml-1">&rarr;</span>
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