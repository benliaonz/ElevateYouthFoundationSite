import React from 'react';
import { STATS, FINANCIAL_DATA } from '../constants';

export default function Impact() {
  // Construct conic gradient string for the donut chart
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-24">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-base font-medium text-emerald-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Financial Transparency */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Financial Transparency</h2>
              <p className="text-lg text-slate-600 mb-8">
                We take our responsibility to our donors seriously. For every dollar raised, 82 cents goes directly to programs serving our youth.
              </p>
              
              <div className="space-y-4">
                {FINANCIAL_DATA.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                    <span className="flex-1 text-slate-700 font-medium">{item.name}</span>
                    <span className="font-bold text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 md:w-1/2 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Donut Chart */}
                <div 
                  className="absolute inset-0 rounded-full shadow-inner"
                  style={{ background: conicGradient }}
                ></div>
                {/* Center Hole */}
                <div className="absolute inset-8 bg-slate-50 rounded-full flex items-center justify-center shadow-md">
                   <div className="text-center">
                     <span className="block text-3xl font-bold text-slate-900">100%</span>
                     <span className="text-xs text-slate-500 uppercase tracking-wider">Accountability</span>
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