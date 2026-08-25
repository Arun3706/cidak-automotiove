import React from 'react';
import { Target, TrendingUp, ShieldCheck, CheckCircle2, Award, HeartHandshake, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface OurMissionPageProps {
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const OurMissionPage: React.FC<OurMissionPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const missionPillars = [
    {
      title: 'Commercial Growth Partnership',
      description: 'We prioritize long-term, mutually beneficial distribution agreements over short-term transaction volumes. This partnership approach ensures our wholesale partners enjoy protected territory dynamics and sustainable commercial growth.'
    },
    {
      title: 'Matching OE Quality Benchmark',
      description: 'Zero compromises on automotive safety. Every CIDAK component matches or exceeds original equipment specifications, verified through ECE R90 approval and continuous factory audits.'
    },
    {
      title: 'Competitive Market Pricing',
      description: 'Direct manufacturer-to-wholesaler pricing models designed to allow regional distributors to maintain healthy profit margins while competing aggressively against high-cost premium brands.'
    },
    {
      title: 'Uncompromised Customer & Technical Support',
      description: 'Providing dedicated account support, rapid cross-reference database access, and 3PL regional logistics to guarantee high stock availability.'
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 sm:p-14 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_banner_1.jpg" 
            alt="CIDAK Mission & Quality" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider font-mono-tech shadow-md">
            <span>Corporate Mission • Ascot, UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Our Mission
          </h1>

          <blockquote className="text-lg sm:text-2xl font-semibold text-slate-100 leading-relaxed italic border-l-4 border-red-600 pl-6 my-4">
            {COMPANY_INFO.missionQuote}
          </blockquote>
        </div>
      </div>

      {/* Strategic Mission Breakdown */}
      <div className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Foundational Objectives
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How We Deliver Our Mission Statement
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Built on transparency, engineering rigor, and competitive pricing for global motor factors and wholesalers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionPillars.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center font-black font-mono-tech text-lg">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warranty & Trade CTA */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono-tech font-bold text-xs uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Guaranteed Peace of Mind</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            3 Years or 60,000 KMs No Quibble Warranty
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Backed by strict ECE R90 approval and continuous multi-stage laboratory benchmarking.
          </p>
        </div>

        <button
          onClick={onOpenInquiry}
          className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md whitespace-nowrap"
        >
          Partner With CIDAK
        </button>
      </div>

    </div>
  );
};
