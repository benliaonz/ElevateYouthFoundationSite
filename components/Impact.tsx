import React from 'react';
import { STATS, FINANCIAL_DATA } from '../constants';

export default function Impact() {
  let cumulativePercent = 0;
  const gradientSegments = FINANCIAL_DATA.map(item => {
    const start = cumulativePercent;
    cumulativePercent += item.value;
    return `${item.color} ${start}% ${cumulativePercent}%`;
  }).join(', ');
  
  const conicGradient = `conic-gradient(${gradientSegments})`;

  return (
    <div id="impact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 mb-32">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-slate-900 mb-4 transition-transform group-hover:scale-110 duration-300">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Financial Transparency */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="md:flex">
            <div className="p-10 md:p-20 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight text-center md:text-left">Financial <br /><span className="text-blue-600">Accountability</span></h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed text-center md:text-left">
                Your trust is our most valuable asset. We maintain strict transparency in how every dollar is utilized to serve the community.
              </p>
              
              <div className="space-y-6">
                {FINANCIAL_DATA.map((item) => (
                  <div key={item.name} className="flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="w-5 h-5 rounded-full mr-5 shadow-sm" style={{ backgroundColor: item.color }}></div>
                    <span className="flex-1 text-slate-700 font-bold">{item.name}</span>
                    <span className="font-black text-slate-900 text-xl">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-12 md:p-20 md:w-1/2 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
              <div className="relative w-80 h-80 z-10">
                <div 
                  className="absolute inset-0 rounded-full shadow-2xl ring-8 ring-white/5"
                  style={{ background: conicGradient }}
                ></div>
                <div className="absolute inset-10 bg-slate-900 rounded-full flex items-center justify-center shadow-2xl border border-white/10">
                   <div className="text-center">
                     <span className="block text-4xl font-black text-white">82%</span>
                     <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] mt-1 block">Direct Impact</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}