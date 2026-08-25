import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Award, Sparkles, Layers, 
  Wrench, ChevronRight, FileText, Send, ArrowRight, PackageCheck, Cpu, Flame, Compass 
} from 'lucide-react';
import { PRODUCTS_DETAILED } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface ProductDetailedPageProps {
  categoryId?: ProductCategoryType;
  onOpenInquiry: () => void;
  onNavigate: (view: string, category?: ProductCategoryType) => void;
}

export const ProductDetailedPage: React.FC<ProductDetailedPageProps> = ({
  categoryId = 'brake-pads',
  onOpenInquiry,
  onNavigate
}) => {
  const currentProduct = PRODUCTS_DETAILED[categoryId] || PRODUCTS_DETAILED['brake-pads'];
  const [activeTab, setActiveTab] = useState<'specs' | 'highlights' | 'warranty'>('specs');

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Top Breadcrumb & Actions */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono-tech text-slate-600">
        <div className="flex items-center space-x-2">
          <button onClick={() => onNavigate('products')} className="hover:text-red-600 font-bold">
            Products Overview
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('product-category', categoryId)} className="hover:text-red-600">
            {currentProduct.name}
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Detailed Specification View</span>
        </div>

        <button
          onClick={() => onNavigate('product-category', categoryId)}
          className="text-red-600 font-bold hover:underline"
        >
          ← Back to {currentProduct.name} Category
        </button>
      </div>

      {/* Main Detailed Showcase */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Product Images Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-lg relative h-80 sm:h-96">
            <img 
              src={currentProduct.images[0]?.url || '/images/hero_banner_1.jpg'} 
              alt={currentProduct.name} 
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono-tech shadow-md">
              Matching OE Quality
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentProduct.images.slice(0, 2).map((img, idx) => (
              <div key={idx} className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200 h-32 relative">
                <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded font-mono-tech">
                  {img.badge || 'CIDAK Standard'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Technical Details & Spec Sheets */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
              Detailed Part Specification Sheet
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              CIDAK Premium {currentProduct.name}
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              {currentProduct.headline}
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-red-600 rounded-r-2xl p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {currentProduct.intro}
          </div>

          {/* Detailed Specifications Tabs */}
          <div className="space-y-4 pt-2">
            <div className="flex border-b border-slate-200 space-x-4 text-xs font-bold font-mono-tech">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 transition-colors ${activeTab === 'specs' ? 'border-b-2 border-red-600 text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Technical Parameters
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`pb-2 transition-colors ${activeTab === 'highlights' ? 'border-b-2 border-red-600 text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Key Highlights
              </button>
              <button
                onClick={() => setActiveTab('warranty')}
                className={`pb-2 transition-colors ${activeTab === 'warranty' ? 'border-b-2 border-red-600 text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                3-Year Warranty
              </button>
            </div>

            {activeTab === 'specs' && currentProduct.specifications && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {currentProduct.specifications.map((spec, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500 font-medium">{spec.label}:</span>
                    <span className="font-bold text-slate-900 font-mono-tech">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'highlights' && (
              <div className="space-y-3">
                {currentProduct.keyHighlights.map((h, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="font-bold text-slate-900 text-xs">{h.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{h.description}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase font-mono-tech">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3 Years or 60,000 KMs No Quibble Warranty</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  CIDAK AUTO PARTS LTD warrants all {currentProduct.name.toLowerCase()} against any manufacturing defect for 36 months or 60,000 kilometers from installation date.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 flex items-center space-x-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Request Wholesale Pricing &amp; Part Catalog</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
