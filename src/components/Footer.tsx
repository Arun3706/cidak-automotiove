import React from 'react';
import { 
  Building2, MapPin, Mail, Phone, ShieldCheck, 
  Award, Globe, CheckCircle2, ArrowUpRight 
} from 'lucide-react';
import { OFFICE_LOCATIONS, DIRECTORS } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface FooterProps {
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* 1. Global Presence & Warranty Banner */}
      <div className="bg-slate-950 border-b border-slate-800 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-base">
                3 Years or 60,000 KMs No Quibble Warranty
              </div>
              <div className="text-xs text-slate-400">
                Backed by strict ECE R90 approval &amp; rigorous multi-stage quality control.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('quality')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              View Quality Assurance Map
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Apply for Distribution
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Corporate Intro & Registration */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-lg font-mono-tech shadow-md">
                C
              </div>
              <div>
                <span className="text-xl font-black text-white font-mono-tech tracking-tight">CIDAK AUTO PARTS LTD</span>
                <p className="text-[11px] text-slate-400 font-medium">Independent Leading Aftermarket Distributor</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              CIDAK AUTO PARTS LTD is an independent leading company in United Kingdom and Europe, distributing aftermarket automotive spare parts to wholesalers and distributors worldwide.
            </p>

            {/* Direct Contacts */}
            <div className="space-y-2 pt-2 text-xs font-mono-tech">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <a href="mailto:harvinder@cidakautoparts.com" className="hover:text-white transition-colors underline decoration-slate-700">
                  harvinder@cidakautoparts.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:+447931522602" className="hover:text-white transition-colors">
                  +44 7931522602
                </a>
              </div>
            </div>

            {/* Directors */}
            <div className="pt-3 border-t border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Executive Directors
              </span>
              <div className="space-y-1 text-xs text-slate-300">
                <div><span className="font-semibold text-white">Harvinder Handa</span> — Commercial Director</div>
                <div><span className="font-semibold text-white">Dr Sukh Handa</span> — Operational Director</div>
              </div>
            </div>
          </div>

          {/* Col 2: Product Ranges */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('product-category', 'brake-pads')} 
                  className="hover:text-white hover:translate-x-1 transition-all text-left"
                >
                  Brake Pads (ECE R90 / Copper Free)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-category', 'brake-discs')} 
                  className="hover:text-white hover:translate-x-1 transition-all text-left"
                >
                  Brake Discs (Silver Coated)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-category', 'filters')} 
                  className="hover:text-white hover:translate-x-1 transition-all text-left"
                >
                  Filters (Air, Oil, Fuel, Cabin)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-category', 'steering-suspension')} 
                  className="hover:text-white hover:translate-x-1 transition-all text-left"
                >
                  Steering &amp; Suspension
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-category', 'under-development')} 
                  className="hover:text-white hover:translate-x-1 transition-all text-left"
                >
                  Range Under Development
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Company &amp; Governance
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Corporate Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about/who-we-are')} className="hover:text-white transition-colors text-left">
                  Who We Are
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about/our-mission')} className="hover:text-white transition-colors text-left">
                  Our Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about/our-vision')} className="hover:text-white transition-colors text-left">
                  Our Vision
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about/director-desk')} className="hover:text-white transition-colors text-left font-bold text-slate-200">
                  Director Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Our Locations
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="font-bold text-white block">Head Office (UK):</span>
                <span>Craven Lodge, Coronation Rd, Ascot HP22 5EN</span>
              </div>
              <div>
                <span className="font-bold text-white block">UK Office:</span>
                <span>Venture House, Arlington Sq, Bracknell RG12 1WA</span>
              </div>
              <div>
                <span className="font-bold text-white block">Overseas 3PL Hub (Slovenia):</span>
                <span>Kidriceva Cesta 92, 4220 Skofja Loka</span>
              </div>
              <div>
                <span className="font-bold text-white block">Overseas Office &amp; WH (Bulgaria):</span>
                <span>81 Tzar Boris III Blvd, SOFIA, 1612</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-6 px-4 sm:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} CIDAK AUTO PARTS LTD. All Rights Reserved. Matching OE Quality Automotive Parts.</p>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>ECE R90 Homologated</span>
            <span>•</span>
            <span>BER 461/2010 Compliant</span>
            <span>•</span>
            <span>3 Years / 60,000 KMs Warranty</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
