import React, { useState } from 'react';
import { 
  ShieldCheck, Award, ArrowRight, CheckCircle2, Sparkles, 
  Layers, Disc, Wind, Droplet, Filter, Cpu, Wrench, Download, 
  FileText, Search, ShoppingCart, Check, ChevronRight, HelpCircle
} from 'lucide-react';
import { ProductCategoryType, ProductItem } from '../types';
import { CATEGORIES_DATA, PRODUCTS_DATABASE } from '../data/mockData';
import { TechnicalDiagram } from '../components/TechnicalDiagram';

interface ProductCategoryPageProps {
  category: ProductCategoryType;
  onSelectCategory: (category: ProductCategoryType) => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  category,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
}) => {
  const currentCatInfo = CATEGORIES_DATA[category] || CATEGORIES_DATA['brake-pads'];
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  // Filter products in this category
  const categoryProducts = PRODUCTS_DATABASE.filter(p => {
    const isCategory = p.category === category;
    if (!isCategory) return false;
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    return (
      p.partNumber.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.oemReferences.some(o => o.toLowerCase().includes(q)) ||
      p.competitorCrossRefs.some(c => c.partNumber.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q)) ||
      p.compatibleVehicles.some(v => `${v.make} ${v.model}`.toLowerCase().includes(q))
    );
  });

  const allCategoryKeys: { id: ProductCategoryType; label: string; icon: any }[] = [
    { id: 'brake-pads', label: 'Brake Pads', icon: Layers },
    { id: 'brake-discs', label: 'Brake Discs', icon: Disc },
    { id: 'air-filter', label: 'Air Filters', icon: Wind },
    { id: 'oil-filter', label: 'Oil Filters', icon: Droplet },
    { id: 'fuel-filter', label: 'Fuel Filters', icon: Filter },
    { id: 'cabin-filter', label: 'Cabin & Carbon Filters', icon: Sparkles },
  ];

  const handleAddWithFeedback = (product: ProductItem) => {
    onAddToCart(product);
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* 1. Category Switcher Tabs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex overflow-x-auto gap-2">
        {allCategoryKeys.map((item) => {
          const Icon = item.icon;
          const isActive = category === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Hero Category Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="relative min-h-[320px] flex items-center p-6 sm:p-12">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentCatInfo.bannerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-red-600 text-white font-mono-tech uppercase tracking-wider">
                CIDAK {currentCatInfo.shortTitle}
              </span>
              {currentCatInfo.standards.map((std, i) => (
                <span key={i} className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700 font-mono-tech">
                  {std}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {currentCatInfo.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {currentCatInfo.fullDesc}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Technical Engineering Highlights & CAD Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CAD Vector Schematic */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Engineered Architectural Diagram</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {currentCatInfo.schematicNote}
            </p>

            <TechnicalDiagram
              type={category}
              partNumber={`CIDAK-${currentCatInfo.shortTitle.toUpperCase().replace(/\s+/g, '')}`}
            />
          </div>
        </div>

        {/* 3 Core Tech Pillars */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            <div>
              <span className="text-xs font-mono-tech text-red-500 font-bold uppercase tracking-wider">
                Manufacturing Innovation
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Technical Highlights &amp; Material Quality
              </h3>
            </div>

            <div className="space-y-4">
              {currentCatInfo.techHighlights.map((tech, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-red-600/10 text-red-500 border border-red-500/20 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{tech.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key bullet specifications */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono-tech">
                Quality Assurance Checkpoints:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {currentCatInfo.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Active Part Numbers Catalogue in this Category */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono-tech text-red-500 font-bold uppercase tracking-wider">
              {currentCatInfo.title} References
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Catalogue References ({categoryProducts.length} Parts Available)
            </h3>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search part #, OEM, vehicle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 font-mono-tech"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 border border-slate-800 hover:border-red-500/60 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-red-950/20 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-lg bg-red-600 text-white font-mono-tech font-bold text-xs tracking-wider shadow-sm">
                    {product.partNumber}
                  </span>
                  <span className="text-[11px] font-mono-tech text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                    24M Warranty
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {product.name}
                </h4>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Technical Specs list */}
                <div className="grid grid-cols-2 gap-2 my-4 text-xs font-mono-tech">
                  {product.technicalSpecs.slice(0, 4).map((spec, i) => (
                    <div key={i} className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">{spec.label}</span>
                      <span className="text-slate-100 font-bold">{spec.value} {spec.unit || ''}</span>
                    </div>
                  ))}
                </div>

                {/* Cross reference mapping */}
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] font-mono-tech text-slate-300 mb-4">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">
                    Direct Cross References:
                  </div>
                  <div className="flex flex-wrap gap-1 text-slate-200">
                    {product.competitorCrossRefs.slice(0, 3).map((c, i) => (
                      <span key={i} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-[10px]">
                        <strong className="text-red-400">{c.brand}:</strong> {c.partNumber}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Full Tech Sheet</span>
                </button>

                <button
                  onClick={() => handleAddWithFeedback(product)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1 transition-colors shadow-md ${
                    addedItemMap[product.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-600 hover:bg-red-500 text-white'
                  }`}
                  title="Add to Quote Basket"
                >
                  {addedItemMap[product.id] ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ShoppingCart className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
