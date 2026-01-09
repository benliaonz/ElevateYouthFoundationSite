import React from 'react';
import { TRUSTEES } from '../constants';
import { UserCheck, ShieldCheck, Scale } from 'lucide-react';

export default function Trustees() {
  return (
    <div className="bg-slate-50">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">Board of Governance</h2>
          <p className="text-4xl md:text-5xl font-black text-indigo-950 leading-tight">
            Leadership Dedicated to <br />
            <span className="text-indigo-600">Integrity & Vision.</span>
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TRUSTEES.map((trustee, index) => (
            <div key={index} className="group bg-white p-10 rounded-[40px] shadow-sm border border-indigo-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <UserCheck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-indigo-950 mb-1">{trustee.name}</h3>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">{trustee.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {trustee.bio}
              </p>
              <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-indigo-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Verified Trustee</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-indigo-950 p-12 rounded-[40px] text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Scale size={24} className="text-indigo-300" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Legal Foundation</h4>
              <p className="text-indigo-200/70 text-sm leading-relaxed mb-8">
                Elevate Youth Foundation is registered under the <strong>Charitable Trusts Act 1957</strong> (NZ) and operates within the frameworks of the <strong>Trusts Act 2019</strong>. We are committed to absolute transparency and public accountability.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-white font-bold hover:text-indigo-300 transition-colors">
              View Governing Documents <span className="ml-2">→</span>
            </a>
          </div>

          <div className="bg-white p-12 rounded-[40px] border border-indigo-100 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold text-indigo-950 mb-4">Governance Meetings</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Our board meets quarterly in Auckland to review program effectiveness, financial allocations, and strategic growth opportunities for the youth we serve.
              </p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-indigo-50 rounded-2xl text-indigo-600 text-xs font-bold uppercase tracking-wider">Next Meeting: Q4 2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}