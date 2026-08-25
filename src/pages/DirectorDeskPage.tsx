import React from 'react';
import { UserCheck, Mail, Phone, Building2, MapPin, ShieldCheck, CheckCircle2, Send, Award } from 'lucide-react';
import { DIRECTORS, COMPANY_INFO } from '../data/companyData';

interface DirectorDeskPageProps {
  onOpenInquiry: () => void;
}

export const DirectorDeskPage: React.FC<DirectorDeskPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 sm:p-14 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_banner_2.jpg" 
            alt="CIDAK Executive Directors Desk" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider font-mono-tech shadow-md">
            <span>Executive Governance • Ascot Headquarters</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Director Desk
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            Direct leadership oversight from Harvinder Handa (Commercial Director) and Dr Sukh Handa (Operational Director), driving global purchasing, ECE R90 quality homologation, and 3PL distribution networks.
          </p>
        </div>
      </div>

      {/* Directors Cards */}
      <div className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Board of Directors
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Executive Leadership Messages
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DIRECTORS.map((dir, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white font-black text-xl flex items-center justify-center font-mono-tech shadow-md border border-slate-800">
                    {dir.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{dir.name}</h3>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-wider font-mono-tech">{dir.role}</p>
                    <span className="text-xs text-slate-500">CIDAK AUTO PARTS LTD Board</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-sm text-slate-700 leading-relaxed">
                  "{dir.bio}"
                </div>

                <div className="space-y-2 text-xs font-mono-tech text-slate-700 pt-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Email: <a href={`mailto:${dir.email}`} className="text-red-600 hover:underline font-semibold">{dir.email}</a></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Mobile: <a href={`tel:${dir.phone}`} className="text-slate-900 font-semibold">{dir.phone}</a></span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono-tech">Ascot Head Office</span>
                <span className="font-bold text-red-600">Executive Directives</span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Corporate Governance Quote */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <span className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono-tech">
          Executive Commercial Commitment
        </span>
        <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic border-l-4 border-red-600 pl-6">
          "We aim to offer CIDAK branded aftermarket parts at very competitive prices and premium quality. We aim to build up a strong and long-term partnership with our customers."
        </blockquote>
        <div className="pt-2 text-xs text-slate-400 font-mono-tech">
          — Harvinder Handa &amp; Dr Sukh Handa, Executive Directors
        </div>
      </div>

    </div>
  );
};
