import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Award, Sparkles, 
  Layers, Wrench, ChevronRight, FileText, Send, 
  Flame, Wind, Droplets, AlertCircle, ArrowRight
} from 'lucide-react';
import { PRODUCTS_DETAILED } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface ProductsPageProps {
  initialCategory?: ProductCategoryType;
  onOpenInquiry: () => void;
  onNavigate?: (view: string, category?: ProductCategoryType) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'brake-pads',
  onOpenInquiry,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryType>(initialCategory);

  // Sync active category if initialCategory prop changes
  React.useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const currentProduct = PRODUCTS_DETAILED[activeCategory] || PRODUCTS_DETAILED['brake-pads'];

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200 uppercase tracking-widest font-mono-tech">
              Dedicated Category Page • {currentProduct.name}
            </span>
            <span className="text-xs text-slate-500 font-medium">3 Years / 60,000 KM Warranty</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            CIDAK {currentProduct.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {currentProduct.headline}. Manufactured under strict quality controls and certified strictly to original equipment standards.
          </p>
        </div>
      </div>

      {/* 2. Detailed Product Showcase (Text Left, Images Right & Sub-components) */}
      <div className="space-y-12">
        
        {/* Main Category Header & Intro */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Text & Bullet Points */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
                  Product Leaflet • {currentProduct.name}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                  {currentProduct.headline}
                </h2>
              </div>

              {/* Exact user requested intro text */}
              <div className="bg-slate-50 border-l-4 border-red-600 rounded-r-2xl p-5 text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {currentProduct.intro}
              </div>

              {/* Exact user requested bullet points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono-tech">
                  Key Quality Features &amp; Engineering Standards
                </h4>
                <ul className="space-y-3">
                  {currentProduct.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table (if applicable) */}
              {currentProduct.specifications && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono-tech">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {currentProduct.specifications.map((spec, i) => (
                      <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex justify-between">
                        <span className="text-slate-500 font-medium">{spec.label}:</span>
                        <span className="font-bold text-slate-900 font-mono-tech">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 flex items-center space-x-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enquire for {currentProduct.name}</span>
                </button>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('product-detailed', activeCategory)}
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center space-x-2 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5 text-red-400" />
                    <span>View Single Part Detailed View →</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right: Images Aligned with text */}
            <div className="lg:col-span-5 space-y-6">
              
              {currentProduct.images.map((img, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs group">
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                    <img 
                      src={img.url} 
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {img.badge && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase font-mono-tech shadow-md">
                        {img.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600 font-medium leading-snug">
                    {img.caption}
                  </div>
                </div>
              ))}

              {/* Warranty Assurance Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase font-mono-tech">
                  <ShieldCheck className="w-4 h-4" />
                  <span>OE Matching Guarantee</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  3 Years or 60,000 KMs Warranty
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All CIDAK {currentProduct.name.toLowerCase()} are supplied with full distributor warranty against manufacturing defects.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Filters Special Showcase: Individual Air, Oil, Fuel, Cabin & Carbon Filters */}
        {activeCategory === 'filters' && currentProduct.subFilters && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
                Comprehensive Range
              </span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                Individual Filter Media Classifications
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Explore individual specifications for Air, Oil, Fuel, Cabin &amp; Carbon filters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProduct.subFilters.map((sub, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="sm:col-span-5 h-48 sm:h-full bg-slate-100 relative">
                      <img 
                        src={sub.image} 
                        alt={sub.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-7 p-6 space-y-3">
                      <h4 className="text-lg font-bold text-slate-900">{sub.name}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sub.description}
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700 pt-1">
                        {sub.highlights.map((h, i) => (
                          <li key={i} className="flex items-center space-x-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-600">
                    <span>100% Tested Media</span>
                    <button 
                      onClick={onOpenInquiry}
                      className="hover:underline"
                    >
                      Request Part Catalog →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Steering & Suspension Special Showcase: Sub-Components */}
        {activeCategory === 'steering-suspension' && currentProduct.subSteeringComponents && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
                Complete Axle &amp; Steering Range
              </span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                Safety-Critical Steering &amp; Suspension Components
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                The range covers Control Arms, Ball Joint, Stabilizer Link, Bushes, Tie rods, and complete Suspension Kits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProduct.subSteeringComponents.map((comp, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 bg-slate-100 relative">
                      <img 
                        src={comp.image} 
                        alt={comp.name} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded font-mono-tech">
                        CNC &amp; Robotics
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <h4 className="text-base font-bold text-slate-900">{comp.name}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {comp.description}
                      </p>
                      <ul className="space-y-1 text-[11px] text-slate-700 pt-2">
                        {comp.standards.map((std, i) => (
                          <li key={i} className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{std}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono-tech">Salt Spray Tested</span>
                    <button 
                      onClick={onOpenInquiry}
                      className="font-bold text-red-600 hover:underline"
                    >
                      Enquire →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
