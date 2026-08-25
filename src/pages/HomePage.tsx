import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Award, TrendingUp, Layers, Boxes, 
  Headphones, Wrench, ChevronRight, MapPin, Building2, 
  CheckCircle2, ArrowRight, Sparkles, Send, Flame, Cpu
} from 'lucide-react';
import { COMPANY_INFO, DIRECTORS, OFFICE_LOCATIONS, PRODUCTS_DETAILED, HERO_BANNERS } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface HomePageProps {
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentBanner = HERO_BANNERS[activeBannerIndex];

  const pillarIconMap: Record<string, any> = {
    ShieldCheck,
    TrendingUp,
    Layers,
    Boxes,
    Headphones,
    Wrench
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* 1. Hero Corporate Showcase */}
      <section className="relative rounded-2xl bg-slate-950 text-white overflow-hidden shadow-xl border border-slate-800">
        
        {/* Background Images with Crossfade Transition (Crisp image, clear visibility) */}
        <div className="absolute inset-0 z-0">
          {HERO_BANNERS.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeBannerIndex ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img 
                src={banner.imageUrl} 
                alt={banner.title} 
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle dark gradient overlay on the left text area only for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-xl p-6 sm:p-8 lg:p-10 space-y-3">
          
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider font-mono-tech shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>{currentBanner.badge}</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-snug drop-shadow-md">
            {currentBanner.title}
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-slate-100 drop-shadow-xs">
            {currentBanner.subtitle}
          </p>

          <p className="text-xs text-slate-200 max-w-md leading-relaxed drop-shadow-xs">
            {currentBanner.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate(currentBanner.ctaAction, currentBanner.targetCategory)}
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/30 flex items-center space-x-1.5 transition-all hover:scale-[1.02]"
            >
              <span>{currentBanner.ctaText}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenInquiry}
              className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 backdrop-blur-xs flex items-center space-x-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-red-400" />
              <span>Trade Enquiry</span>
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center space-x-2 pt-4">
            {HERO_BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                onClick={() => setActiveBannerIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  activeBannerIndex === idx ? 'w-6 bg-red-600' : 'w-2 bg-slate-400/50 hover:bg-white'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </section>

      {/* 2. Executive Company Profile & Mission Quote Box */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
                About CIDAK AUTO PARTS LTD
              </span>
              <span className="w-8 h-[2px] bg-red-600" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-snug">
              Independent Leading Aftermarket Automotive Spare Parts Distributor
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <div className="bg-slate-50 border-l-4 border-red-600 rounded-r-2xl p-5 sm:p-6 text-slate-800 shadow-xs">
              <p className="italic text-sm sm:text-base font-medium leading-relaxed">
                {COMPANY_INFO.missionQuote}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 uppercase tracking-wider group"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick Metrics & 3-Year Warranty Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
            
            <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-red-400 font-mono-tech uppercase tracking-widest font-bold">Standard Warranty</div>
                <div className="text-lg font-black text-white">{COMPANY_INFO.warrantyHeadline}</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_INFO.warrantyText}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                <div className="text-xl font-black text-red-400 font-mono-tech">35 Min</div>
                <div className="text-[11px] text-slate-300">From Central London (Ascot HQ)</div>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                <div className="text-xl font-black text-red-400 font-mono-tech">3PL Hubs</div>
                <div className="text-[11px] text-slate-300">UK • Slovenia • Bulgaria</div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('quality')}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors text-center block border border-slate-700"
            >
              View Quality Certification Map →
            </button>

          </div>

        </div>
      </section>

      {/* 3. What We Offer (6 Core Pillars) */}
      <section className="space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Our Core Value Proposition
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            What We Offer
          </h2>
          <p className="text-sm text-slate-600">
            CIDAK delivers high-performance automotive distribution tailored to the commercial needs of international distributors and wholesalers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.pillars.map((pillar, idx) => {
            const Icon = pillarIconMap[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-red-300 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span>CIDAK Standard</span>
                  <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. Complete Product Range Showcase (Leaflet Style Side-by-Side Cards) */}
      <section className="space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
              Automotive Replacement Parts
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              CIDAK Product Range
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 uppercase tracking-wider"
          >
            <span>View All Detailed Leaflets</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Brake Pads */}
          <div 
            onClick={() => onNavigate('product-category', 'brake-pads')}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-red-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src="/images/hero_banner_2.jpg" 
                  alt="CIDAK Brake Pads" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase font-mono-tech shadow-md">
                  ECE R90 Certified
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs font-mono-tech">
                  Copper Free
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  Brake Pads
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {PRODUCTS_DETAILED['brake-pads'].intro}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Safe &amp; Noise Free Braking (RMR Shim)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Ceramic &amp; Semi-Metallic Formulations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% Copper Free (EPA Compliant)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-red-600">
              <span>View Separate Category Page</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Brake Discs */}
          <div 
            onClick={() => onNavigate('product-category', 'brake-discs')}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-red-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src="/images/hero_banner_1.jpg" 
                  alt="CIDAK Brake Discs" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase font-mono-tech shadow-md">
                  Silver Coated
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs font-mono-tech">
                  Ready To Fit
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  Brake Discs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {PRODUCTS_DETAILED['brake-discs'].intro}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Unique Protective Silver Coating</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Foundry Casting &amp; CNC Precision Machined</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>ECE R90 (E-Marked) Approved</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-red-600">
              <span>View Separate Category Page</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Filters */}
          <div 
            onClick={() => onNavigate('product-category', 'filters')}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-red-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src="/images/air_filter.jpg" 
                  alt="CIDAK Filters" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase font-mono-tech shadow-md">
                  5 Filter Ranges
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs font-mono-tech">
                  OE Media
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  Filters (Air, Oil, Fuel, Cabin, Carbon)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {PRODUCTS_DETAILED['filters'].intro}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>High quality filter media close to OE</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Oil filters 100% pressure tested</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Air, Oil, Fuel, Cabin &amp; Bio-Carbon coverage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-red-600">
              <span>View Separate Category Page</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Steering & Suspension */}
          <div 
            onClick={() => onNavigate('product-category', 'steering-suspension')}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-red-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src="/images/steering_suspension.jpg" 
                  alt="CIDAK Steering and Suspension" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase font-mono-tech shadow-md">
                  Safety Critical
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs font-mono-tech">
                  Robotics &amp; CNC
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  Steering &amp; Suspension
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {PRODUCTS_DETAILED['steering-suspension'].intro}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Control Arms, Ball Joints, Links, Bushes, Tie Rods</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Tested at each stage of manufacturing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Salt spray anti-corrosion validated painting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-red-600">
              <span>View Separate Category Page</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Product Range Under Development */}
          <div 
            onClick={() => onNavigate('product-category', 'under-development')}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-red-400 transition-all cursor-pointer flex flex-col justify-between group md:col-span-2 lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
              <div className="relative h-52 sm:h-full overflow-hidden bg-slate-100">
                <img 
                  src="/images/under_development.jpg" 
                  alt="CIDAK Range Under Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase font-mono-tech shadow-md">
                  In Development
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest font-mono-tech">
                    Expansion Roadmap
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Product Range Under Development
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {PRODUCTS_DETAILED['under-development'].intro}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-semibold text-slate-800">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• Water Pumps</div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• Clutch Kits</div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• Shock Absorbers</div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• Wheel Hub Units</div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-bold text-red-600 border-t border-slate-100">
                  <span>Register Early Interest</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 5. European Logistics Network & Warehouse Overview */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono-tech">
              Global &amp; European Distribution
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Head Office &amp; 3PL Warehouse Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Strategically positioned facilities across the United Kingdom, Slovenia, and Bulgaria to guarantee rapid stock fulfillment and international dispatch.
            </p>
          </div>

          <button
            onClick={() => onNavigate('locations')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider border border-slate-700 transition-colors whitespace-nowrap"
          >
            View All Locations &amp; Maps →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICE_LOCATIONS.map((loc) => (
            <div 
              key={loc.id}
              className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800 hover:border-red-500/50 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded uppercase font-mono-tech">
                  {loc.type}
                </span>
                <h3 className="text-base font-bold text-white pt-1">{loc.companyName}</h3>
                {loc.facilityName && (
                  <p className="text-xs text-red-400 font-semibold">{loc.facilityName}</p>
                )}
                <div className="text-xs text-slate-300 space-y-0.5 font-mono-tech pt-1">
                  {loc.addressLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  {loc.postcode && <div>{loc.postcode}</div>}
                  <div className="text-red-400 font-bold">{loc.country}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                {loc.description}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 6. Executive Directors & Direct Commercial Contact */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Corporate Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            CIDAK Executive Leadership
          </h2>
          <p className="text-sm text-slate-600">
            Direct leadership access for distributors, wholesalers, and international purchasing partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DIRECTORS.map((dir, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:border-red-300 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-lg flex items-center justify-center font-mono-tech">
                  {dir.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{dir.name}</h3>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider">{dir.role}</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {dir.bio}
              </p>

              <div className="pt-3 border-t border-slate-200 text-xs font-mono-tech space-y-1 text-slate-700">
                <div>Email: <a href={`mailto:${dir.email}`} className="text-red-600 hover:underline">{dir.email}</a></div>
                <div>Mob: <a href={`tel:${dir.phone}`} className="text-slate-900">{dir.phone}</a></div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 7. Call To Action Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest font-mono-tech text-red-100">
            Wholesale Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to become a CIDAK distributor?
          </h2>
          <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
            Contact our commercial desk today for complete product catalogs, ECE R90 test reports, and competitive container/pallet pricing.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
          >
            Submit Trade Application
          </button>
          <a
            href="mailto:harvinder@cidakautoparts.com"
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/30 backdrop-blur-xs transition-colors"
          >
            Email Commercial Director
          </a>
        </div>
      </section>

    </div>
  );
};
