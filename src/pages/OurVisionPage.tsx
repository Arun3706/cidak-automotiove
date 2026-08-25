import React from 'react';
import { Eye, Compass, Leaf, Cpu, Globe, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProductCategoryType } from '../types';

interface OurVisionPageProps {
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const OurVisionPage: React.FC<OurVisionPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const visionGoals = [
    {
      icon: Leaf,
      title: 'Eco-Conscious Automotive Friction',
      description: 'Leading the aftermarket transition towards 100% Copper-Free ceramic and semi-metallic friction compounds in full compliance with United States EPA regulations and European eco-directives.'
    },
    {
      icon: Cpu,
      title: 'Robotics & Automated Precision Manufacturing',
      description: 'Expanding automated robotics and CNC computerized numeric machining across all steering, suspension, and brake rotor production lines for zero-tolerance DTV (<10μm).'
    },
    {
      icon: Globe,
      title: 'Expanded European & Global 3PL Network',
      description: 'Strengthening our regional distribution hubs in the UK, Slovenia, and Bulgaria to guarantee next-day regional freight dispatch to European motor factor networks.'
    },
    {
      icon: Award,
      title: 'Extended Product Range Roadmap',
      description: 'Continuously expanding product homologations into Water Pumps, Shock Absorbers, Clutch Kits, and Wheel Hub Bearings matching OE standards.'
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Showcase */}
      <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 sm:p-14 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/under_development.jpg" 
            alt="CIDAK R&D Metrology Vision" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider font-mono-tech shadow-md">
            <span>Corporate Vision • Sustainable Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Our Vision
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            To be the premier independent aftermarket spare parts brand recognized across Europe and global markets for OE-level quality, environmental leadership, and unmatched distributor commercial value.
          </p>
        </div>
      </div>

      {/* Strategic Vision Grid */}
      <div className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Long-Term Strategy
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Pillars of Our Corporate Vision
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Driving innovation, eco-compliance, and robotics automation in automotive aftermarket parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionGoals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4 hover:border-red-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* R&D Roadmap Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-black text-white">
            Explore Range Under Development
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Preview our upcoming product lines including Water Pumps, Shock Absorbers, Clutch Kits, and Wheel Bearings.
          </p>
        </div>

        <button
          onClick={() => onNavigate('products', 'under-development')}
          className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md whitespace-nowrap"
        >
          View Development Roadmap →
        </button>
      </div>

    </div>
  );
};
