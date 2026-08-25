import React from 'react';
import { Building2, MapPin, Award, ShieldCheck, CheckCircle2, History, Globe, ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface WhoWeArePageProps {
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const WhoWeArePage: React.FC<WhoWeArePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const milestones = [
    {
      year: 'Corporate Genesis',
      title: 'Ascot Headquarters Establishment',
      description: 'CIDAK AUTO PARTS LTD was established in Ascot, Berkshire (35 minutes from Central London) as an independent specialist aftermarket automotive spare parts distributor.'
    },
    {
      year: 'European Expansion',
      title: '3PL Slovenia & Bulgaria Logistics Hubs',
      description: 'Expanded international supply chain operations by integrating 3PL bonded warehouse facilities in Skofja Loka (Slovenia) and Sofia (Bulgaria).'
    },
    {
      year: 'Homologation Excellence',
      title: '100% ECE R90 & EPA Copper-Free Certification',
      description: 'Standardized ECE R90 homologation across all friction lines and introduced eco-conscious 100% copper-free ceramic formulation matrix.'
    },
    {
      year: 'Range Extension',
      title: '5 Filter Lines & Robotics Suspension',
      description: 'Extended catalog coverage to Air, Oil, Fuel, Cabin & Carbon filters alongside robotics-machined steering and suspension components.'
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* Header Showcase */}
      <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 sm:p-14 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_banner_3.jpg" 
            alt="CIDAK European Logistics Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider font-mono-tech shadow-md">
            <span>Corporate Identity • Ascot, UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Who We Are
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            CIDAK AUTO PARTS LTD is an independent leading company in the United Kingdom and Europe, distributing aftermarket automotive spare parts to wholesalers and distributors worldwide.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono-tech text-slate-300">
            <span className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Building2 className="w-4 h-4 text-red-500" />
              <span>Head Office: Ascot HP22 5EN</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>UK • Slovenia • Bulgaria Facilities</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Narrative & Values Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
              Independent Aftermarket Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Engineering Reliability &amp; Global Distribution Partnership
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Operating from our corporate headquarters in Ascot (just 35 minutes from Central London) and supported by our UK trade operations in Bracknell, CIDAK AUTO PARTS LTD bridges world-class component manufacturing with regional wholesale distributors across Europe, North America, and international markets.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We specialize in safety-critical friction, filtration, and axle suspension components engineered strictly to matching original equipment standards. With dedicated 3PL bonded warehouse facilities strategically located in Slovenia and Bulgaria, we ensure rapid freight dispatch and high stock availability.
          </p>

          <div className="bg-slate-50 border-l-4 border-red-600 rounded-r-2xl p-6 space-y-2 text-slate-800">
            <h4 className="font-bold text-slate-900 text-base">The CIDAK Advantage</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every CIDAK component undergoes multi-stage metallurgical, dimensional, and endurance testing backed by our signature **3 Years or 60,000 KMs No Quibble Warranty**.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
          <h3 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-3">
            Core Infrastructure Summary
          </h3>

          <div className="space-y-4 text-xs font-mono-tech">
            {OFFICE_LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{loc.companyName}</span>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">{loc.type}</span>
                </div>
                <div className="text-slate-600">{loc.addressLines.join(', ')}</div>
                <div className="text-slate-900 font-bold">{loc.country}</div>
              </div>
            ))}
          </div>

          <button
            onClick={onOpenInquiry}
            className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 transition-all text-center"
          >
            Connect with Our Ascot Head Office
          </button>
        </div>

      </div>

      {/* Corporate Timeline */}
      <div className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Strategic Roadmap
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Growth Timeline &amp; Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 relative overflow-hidden">
              <span className="text-xs font-mono-tech font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md uppercase">
                {m.year}
              </span>
              <h4 className="text-lg font-bold text-slate-900 pt-1">{m.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
