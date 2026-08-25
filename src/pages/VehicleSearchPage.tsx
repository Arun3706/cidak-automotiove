import React from 'react';
import { VehicleSearchWidget } from '../components/VehicleSearchWidget';
import { ProductCategoryType, ProductItem } from '../types';
import { Search, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

interface VehicleSearchPageProps {
  onSelectProduct: (product: ProductItem) => void;
  onNavigateToCategory: (category: ProductCategoryType) => void;
}

export const VehicleSearchPage: React.FC<VehicleSearchPageProps> = ({
  onSelectProduct,
  onNavigateToCategory,
}) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-400 border border-red-500/30 uppercase tracking-widest font-mono-tech">
            Part Identification Engine
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Vehicle &amp; Competitor Part Lookup
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Quickly identify the exact CIDAK part reference by entering any OEM code or competitor aftermarket part number (e.g. Bosch, Brembo, Ferodo, TRW, MANN, Mahle), or search by Year, Make, and Model.
          </p>
        </div>
      </div>

      {/* Embedded Search Widget */}
      <VehicleSearchWidget
        onSelectProduct={onSelectProduct}
        onNavigateToCategory={onNavigateToCategory}
      />

      {/* Pro Tips for Workshops */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center space-x-2 text-white font-bold text-sm">
            <span className="text-red-500">1.</span>
            <span>Competitor Cross-Lookup</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Type any competitor part number with or without spaces and special characters. Our cross-reference engine automatically strips formatting to match exact cross-references.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center space-x-2 text-white font-bold text-sm">
            <span className="text-red-500">2.</span>
            <span>Axle &amp; Fitment Check</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Check front vs. rear axle fitment notes, disc diameter (e.g. 288mm vs 312mm), and brake caliper system type before ordering to guarantee first-time fit.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center space-x-2 text-white font-bold text-sm">
            <span className="text-red-500">3.</span>
            <span>TecDoc &amp; MAM Compatible</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            All CIDAK data is fully aligned with TecDoc and MAM Autopart catalog standards for seamless motor factor stock integration.
          </p>
        </div>
      </div>

    </div>
  );
};
