import React from 'react';
import { 
  Building2, MapPin, Award, ShieldCheck, TrendingUp, 
  Layers, Boxes, Headphones, Wrench, CheckCircle2, 
  Mail, Phone, ArrowRight, Send, Globe 
} from 'lucide-react';
import { COMPANY_INFO, DIRECTORS, OFFICE_LOCATIONS } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface AboutPageProps {
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const pillarIconMap: Record<string, any> = {
    ShieldCheck,
    TrendingUp,
    Layers,
    Boxes,
    Headphones,
    Wrench
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-200">
      
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-14 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200 uppercase tracking-widest font-mono-tech">
              Corporate Overview
            </span>
            <span className="text-xs text-slate-500 font-medium">UK • Slovenia • Bulgaria</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            About CIDAK AUTO PARTS LTD
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>
      </div>

      {/* 2. Core Mission Statement Quote */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl space-y-4 relative z-10">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono-tech">
            Our Mission &amp; Partnership Approach
          </span>

          <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic border-l-4 border-red-600 pl-6 my-4">
            {COMPANY_INFO.missionQuote}
          </blockquote>

          <div className="flex items-center space-x-3 pt-2 text-xs text-slate-400 font-mono-tech">
            <span className="text-white font-bold">CIDAK Executive Board</span>
            <span>•</span>
            <span>Ascot Head Office, United Kingdom</span>
          </div>
        </div>
      </div>

      {/* 3. What We Offer (Detailed 6 Pillars) */}
      <div className="space-y-8">
        
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Value Pillars
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            What We Offer
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Our comprehensive service proposition for aftermarket automotive wholesalers and distributors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.pillars.map((pillar, idx) => {
            const Icon = pillarIconMap[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Guaranteed Standard</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 4. Executive Directors & Leadership */}
      <div className="space-y-8">
        
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Company Directors
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Experienced automotive aftermarket executives driving quality, logistics, and international commercial expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIRECTORS.map((dir, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-5"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white font-black text-xl flex items-center justify-center font-mono-tech shadow-md">
                  {dir.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{dir.name}</h3>
                  <p className="text-sm font-bold text-red-600 uppercase tracking-wider">{dir.role}</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {dir.bio}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono-tech text-slate-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>Email: <a href={`mailto:${dir.email}`} className="text-red-600 hover:underline font-semibold">{dir.email}</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Mobile: <a href={`tel:${dir.phone}`} className="text-slate-900 font-semibold">{dir.phone}</a></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 5. Offices & 3PL Logistics Infrastructure */}
      <div className="space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
              Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Head Office &amp; Warehouses
            </h2>
          </div>

          <button
            onClick={() => onNavigate('locations')}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 uppercase tracking-wider"
          >
            <span>View Interactive Locations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICE_LOCATIONS.map((loc) => (
            <div 
              key={loc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded uppercase font-mono-tech">
                  {loc.type}
                </span>
                <h3 className="text-lg font-bold text-slate-900 pt-1">{loc.companyName}</h3>
                {loc.facilityName && (
                  <p className="text-xs text-red-600 font-bold">{loc.facilityName}</p>
                )}
                <div className="text-xs text-slate-600 space-y-0.5 font-mono-tech pt-1">
                  {loc.addressLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  {loc.postcode && <div>{loc.postcode}</div>}
                  <div className="text-slate-900 font-bold">{loc.country}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                {loc.description}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 6. Trade CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-bold text-white">
            Interested in partnering with CIDAK AUTO PARTS LTD?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            We welcome wholesale distribution inquiries and buying group partnerships across the UK, Europe, and global automotive markets.
          </p>
        </div>

        <button
          onClick={onOpenInquiry}
          className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md whitespace-nowrap transition-transform hover:scale-105"
        >
          Submit Trade Application
        </button>
      </div>

    </div>
  );
};
