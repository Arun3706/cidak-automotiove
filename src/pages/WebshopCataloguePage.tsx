import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, ShoppingCart, LayoutGrid, List, Check, 
  ArrowRight, ShieldCheck, Download, Sparkles, SlidersHorizontal, 
  Layers, Disc, Wind, Droplet, Fuel, UserCheck 
} from 'lucide-react';
import { ProductItem, ProductCategoryType } from '../types';
import { PRODUCTS_DATABASE } from '../data/mockData';

interface WebshopCataloguePageProps {
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const WebshopCataloguePage: React.FC<WebshopCataloguePageProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'partNumber' | 'name'>('partNumber');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'brake-pads', label: 'Brake Pads' },
    { id: 'brake-discs', label: 'Brake Discs' },
    { id: 'air-filter', label: 'Air Filters' },
    { id: 'oil-filter', label: 'Oil Filters' },
    { id: 'fuel-filter', label: 'Fuel Filters' },
    { id: 'cabin-filter', label: 'Cabin & Carbon Filters' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATABASE.filter(p => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      if (!matchCat) return false;

      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();

      return (
        p.partNumber.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.oemReferences.some(o => o.toLowerCase().includes(q)) ||
        p.competitorCrossRefs.some(c => c.partNumber.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q)) ||
        p.compatibleVehicles.some(v => `${v.make} ${v.model}`.toLowerCase().includes(q))
      );
    }).sort((a, b) => {
      if (sortBy === 'partNumber') {
        return a.partNumber.localeCompare(b.partNumber);
      }
      return a.name.localeCompare(b.name);
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddWithFeedback = (product: ProductItem) => {
    onAddToCart(product);
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* 1. Header & Webshop Announcement */}
      <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-400 border border-red-500/30 uppercase tracking-widest font-mono-tech">
                Electronic Product Catalogue
              </span>
              <span className="text-xs text-slate-400 font-mono-tech">Over 15,000 Verified References</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              CIDAK Digital Parts Catalogue
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed">
              Explore the comprehensive catalog of CIDAK braking and filtration parts. You can filter by category, cross-reference competitor numbers, and add references directly to your Trade Quote Basket for instant volume pricing.
            </p>
          </div>

          {/* B2B Webshop Feature Notice (User requested: Webshop will add on later) */}
          <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-red-500/30 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-red-400 font-bold uppercase">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>Full B2B Webshop Online Soon</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct self-service online checkout, live warehouse stock reservation, and ERP API connectors are currently in motor factor rollout.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              For current trade orders, submit your RFQ via the Quote Basket.
            </div>
          </div>

        </div>
      </div>

      {/* 2. Catalogue Controls Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by part number, OEM, cross-ref (Brembo, Bosch, MANN), vehicle..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 font-mono-tech"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>

          {/* View Mode & Sort */}
          <div className="flex items-center space-x-3 self-end lg:self-auto">
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold transition-colors ${
                  viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs font-semibold transition-colors ${
                  viewMode === 'table' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="List / Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 font-mono-tech"
            >
              <option value="partNumber">Sort: Part Number (A-Z)</option>
              <option value="name">Sort: Product Name</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-2 pt-2 border-t border-slate-800 pb-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Catalogue Display (Grid or Table) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
          <p className="text-sm font-bold text-slate-300">No catalogue references found matching "{searchTerm}"</p>
          <p className="text-xs text-slate-400">Try searching by vehicle make, model, or a competitor part number.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-xl font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 border border-slate-800 hover:border-red-500/60 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-lg bg-red-600 text-white font-mono-tech font-bold text-xs tracking-wider">
                    {product.partNumber}
                  </span>
                  <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-slate-400 font-mono-tech border border-slate-800">
                    {product.categoryName}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {product.name}
                </h4>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Technical Specs pills */}
                <div className="grid grid-cols-2 gap-2 my-4 text-xs font-mono-tech">
                  {product.technicalSpecs.slice(0, 4).map((spec, i) => (
                    <div key={i} className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">{spec.label}</span>
                      <span className="text-slate-200 font-bold">{spec.value} {spec.unit || ''}</span>
                    </div>
                  ))}
                </div>

                {/* Cross References */}
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 text-[10px] font-mono-tech text-slate-400 mb-4">
                  <span className="block text-slate-400 uppercase mb-1 font-bold">Cross-Ref Match:</span>
                  <div className="flex flex-wrap gap-1">
                    {product.competitorCrossRefs.slice(0, 3).map((c, i) => (
                      <span key={i} className="bg-slate-900 px-1.5 py-0.5 rounded text-slate-300">
                        {c.brand}: {c.partNumber}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-colors"
                >
                  Technical Sheet
                </button>

                <button
                  onClick={() => handleAddWithFeedback(product)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors shadow-md ${
                    addedItemMap[product.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-600 hover:bg-red-500 text-white'
                  }`}
                  title="Add to Quote Basket"
                >
                  {addedItemMap[product.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Quote</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 font-mono-tech border-b border-slate-800 uppercase tracking-wider">
                <tr>
                  <th className="p-4">CIDAK Part #</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Direct OE Reference</th>
                  <th className="p-4">Key Specifications</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono-tech">
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-950/50 transition-colors">
                    <td className="p-4 font-bold text-red-400">
                      {p.partNumber}
                    </td>
                    <td className="p-4 text-slate-300 font-sans">
                      {p.categoryName}
                    </td>
                    <td className="p-4 text-slate-200 font-sans font-medium">
                      {p.name}
                    </td>
                    <td className="p-4 text-slate-400">
                      {p.oemReferences[0] || 'Direct Match'}
                    </td>
                    <td className="p-4 text-slate-300 text-[11px]">
                      {p.technicalSpecs[0]?.label}: {p.technicalSpecs[0]?.value}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => onSelectProduct(p)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-sans font-semibold"
                        >
                          Specs
                        </button>
                        <button
                          onClick={() => handleAddWithFeedback(p)}
                          className="px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-sans font-bold flex items-center space-x-1"
                        >
                          {addedItemMap[p.id] ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
                          <span>Quote</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
