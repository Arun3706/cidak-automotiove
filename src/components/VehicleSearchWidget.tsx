import React, { useState, useMemo } from 'react';
import { Search, Car, ArrowRight, CheckCircle2, Shield, Wrench, Sparkles, Filter, FileText, ChevronRight, AlertCircle } from 'lucide-react';
import { PRODUCTS_DATABASE, VEHICLE_MAKES, CATEGORIES_DATA } from '../data/mockData';
import { ProductItem, ProductCategoryType } from '../types';

interface VehicleSearchWidgetProps {
  onSelectProduct: (product: ProductItem) => void;
  onNavigateToCategory?: (category: ProductCategoryType) => void;
  initialMode?: 'cross-ref' | 'vehicle';
  isCompact?: boolean;
}

export const VehicleSearchWidget: React.FC<VehicleSearchWidgetProps> = ({
  onSelectProduct,
  onNavigateToCategory,
  initialMode = 'cross-ref',
  isCompact = false,
}) => {
  const [activeTab, setActiveTab] = useState<'cross-ref' | 'vehicle'>(initialMode);
  
  // Cross-reference search query
  const [searchQuery, setSearchQuery] = useState('');
  const [isFlashing, setIsFlashing] = useState(false);
  const [lastFoundBrand, setLastFoundBrand] = useState<string | null>(null);

  // Vehicle selector state
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Fast sample search chips
  const sampleCompetitors = [
    { brand: 'Bosch', code: '0 986 424 797', type: 'Brake Pad' },
    { brand: 'Brembo', code: 'P 85 020', type: 'Brake Pad' },
    { brand: 'Mann-Filter', code: 'C 27 009', type: 'Air Filter' },
    { brand: 'Mann-Filter', code: 'W 712/95', type: 'Oil Filter' },
    { brand: 'Mann-Filter', code: 'PU 8008', type: 'Fuel Filter' },
    { brand: 'Ferodo', code: 'FDB1641', type: 'Brake Pad' },
    { brand: 'Brembo', code: '09.9145.11', type: 'Brake Disc' },
    { brand: 'OEM Ref', code: '1K0 698 151', type: 'VAG Brake Pad' },
  ];

  // Cross reference match computation
  const crossRefResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase().replace(/[\s\-_/.]/g, '');
    if (!query || query.length < 2) return [];

    return PRODUCTS_DATABASE.filter(product => {
      // Check CIDAK part number
      const normCidak = product.partNumber.toLowerCase().replace(/[\s\-_/.]/g, '');
      if (normCidak.includes(query)) return true;

      // Check OEM references
      const oemMatch = product.oemReferences.some(oem => 
        oem.toLowerCase().replace(/[\s\-_/.]/g, '').includes(query)
      );
      if (oemMatch) return true;

      // Check Competitor cross-references (Bosch, Brembo, Ferodo, Mann, Mahle, etc.)
      const compMatch = product.competitorCrossRefs.some(comp => 
        comp.partNumber.toLowerCase().replace(/[\s\-_/.]/g, '').includes(query) ||
        comp.brand.toLowerCase().includes(query)
      );
      if (compMatch) return true;

      // Check Product Name
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  // Handle cross reference search click/input with instant flash highlight
  const handleCompetitorSearch = (code: string, brand?: string) => {
    setSearchQuery(code);
    setIsFlashing(true);
    setLastFoundBrand(brand || null);
    setTimeout(() => {
      setIsFlashing(false);
    }, 1200);
  };

  // Extract unique models for selected make
  const availableModels = useMemo(() => {
    if (!selectedMake) return [];
    const modelsSet = new Set<string>();
    PRODUCTS_DATABASE.forEach(p => {
      p.compatibleVehicles.forEach(v => {
        if (v.make.toLowerCase() === selectedMake.toLowerCase()) {
          modelsSet.add(v.model);
        }
      });
    });
    return Array.from(modelsSet);
  }, [selectedMake]);

  // Extract vehicles filtered
  const vehicleFilteredResults = useMemo(() => {
    if (!selectedMake) return [];
    return PRODUCTS_DATABASE.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Vehicle match
      return p.compatibleVehicles.some(v => {
        const makeMatch = v.make.toLowerCase() === selectedMake.toLowerCase();
        const modelMatch = !selectedModel || v.model.toLowerCase() === selectedModel.toLowerCase();
        return makeMatch && modelMatch;
      });
    });
  }, [selectedMake, selectedModel, selectedCategory]);

  return (
    <div id="vehicle-search-widget" className="w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
      {/* Search Header & Tab Switcher */}
      <div className="bg-slate-950/80 border-b border-slate-800 p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-red-600/20 text-red-400 border border-red-500/30 tracking-wider uppercase">
              CIDAK Lookup Engine
            </span>
            <span className="text-xs text-slate-400 font-mono-tech">100% Direct OE Cross-Match</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
            Vehicle & Competitor Cross-Reference Search
          </h2>
        </div>

        {/* Tab selection buttons */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('cross-ref')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'cross-ref'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Competitor / OEM Number</span>
          </button>

          <button
            onClick={() => setActiveTab('vehicle')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'vehicle'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Search by Vehicle</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 sm:p-6">
        {/* TAB 1: COMPETITOR & OEM CROSS REFERENCE FINDER */}
        {activeTab === 'cross-ref' && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                Enter Competitor Part Number, OEM Reference, or CIDAK Code:
              </label>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.length > 2) {
                      setIsFlashing(true);
                      setTimeout(() => setIsFlashing(false), 900);
                    }
                  }}
                  placeholder="e.g. Bosch 0986424797, Brembo P85020, Mann C27009, 1K0698151, FDB1641..."
                  className={`w-full pl-12 pr-28 py-3.5 bg-slate-950 border rounded-xl text-white placeholder-slate-500 font-mono-tech text-sm sm:text-base focus:outline-none transition-all duration-300 ${
                    isFlashing 
                      ? 'border-red-500 ring-4 ring-red-500/30 bg-red-950/20' 
                      : 'border-slate-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  }`}
                />

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sample Quick Clicks */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Try instant cross-match:</span>
                {sampleCompetitors.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCompetitorSearch(sample.code, sample.brand)}
                    className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-md border border-slate-700 text-[11px] font-mono-tech transition-colors"
                  >
                    <span className="text-red-400 font-semibold">{sample.brand}</span>: {sample.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Cross Reference Results Showcase */}
            {searchQuery.length >= 2 && (
              <div className={`mt-6 rounded-xl border transition-all duration-500 p-4 ${
                isFlashing 
                  ? 'bg-red-950/40 border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.2)]' 
                  : 'bg-slate-950/70 border-slate-800'
              }`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-sm font-bold text-white">
                      Found {crossRefResults.length} Matching CIDAK Direct Part{crossRefResults.length === 1 ? '' : 's'}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    100% Direct Fitment Guarantee
                  </span>
                </div>

                {crossRefResults.length === 0 ? (
                  <div className="text-center py-8 text-slate-400">
                    <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2 opacity-80" />
                    <p className="text-sm text-slate-300 font-semibold">No exact match found for "{searchQuery}"</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                      Try searching by vehicle make above or contact CIDAK technical support for custom cross-referencing.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {crossRefResults.map((product) => {
                      const matchedCompetitor = product.competitorCrossRefs.find(c => 
                        c.partNumber.toLowerCase().replace(/[\s\-_/.]/g, '').includes(searchQuery.toLowerCase().replace(/[\s\-_/.]/g, '')) ||
                        c.brand.toLowerCase().includes(searchQuery.toLowerCase())
                      );

                      const matchedOem = product.oemReferences.find(o => 
                        o.toLowerCase().replace(/[\s\-_/.]/g, '').includes(searchQuery.toLowerCase().replace(/[\s\-_/.]/g, ''))
                      );

                      return (
                        <div
                          key={product.id}
                          className="bg-slate-900 border border-slate-800 hover:border-red-500/60 rounded-xl p-4 transition-all hover:shadow-xl hover:shadow-red-950/30 flex flex-col justify-between"
                        >
                          <div>
                            {/* Flash Badge Indicator */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono-tech text-xs font-bold tracking-wider">
                                {product.partNumber}
                              </span>
                              <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                                {product.categoryName}
                              </span>
                            </div>

                            <h3 className="text-base font-bold text-white mb-1 hover:text-red-400 transition-colors">
                              {product.name}
                            </h3>

                            {/* Flash Cross Reference Match Callout */}
                            {(matchedCompetitor || matchedOem) && (
                              <div className="my-2.5 p-2 rounded-lg bg-red-950/40 border border-red-800/60 text-xs flex items-center justify-between">
                                <div className="flex items-center space-x-1.5 text-red-200">
                                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                                  <span className="font-semibold">
                                    {matchedCompetitor ? `${matchedCompetitor.brand} ${matchedCompetitor.partNumber}` : `OEM: ${matchedOem}`}
                                  </span>
                                </div>
                                <span className="text-[10px] uppercase font-bold text-emerald-400">
                                  CIDAK Equivalent
                                </span>
                              </div>
                            )}

                            {/* Key specs */}
                            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300 my-2 font-mono-tech">
                              {product.technicalSpecs.slice(0, 2).map((sp, idx) => (
                                <div key={idx} className="bg-slate-950 p-1.5 rounded border border-slate-800/60">
                                  <span className="text-[10px] text-slate-400 block">{sp.label}:</span>
                                  <span className="font-semibold text-white">{sp.value} {sp.unit || ''}</span>
                                </div>
                              ))}
                            </div>

                            {/* Compatible vehicles preview */}
                            <div className="text-[11px] text-slate-400 mt-2">
                              <span className="text-slate-400 font-medium">Fits: </span>
                              {product.compatibleVehicles.slice(0, 2).map(v => `${v.make} ${v.model}`).join(', ')}
                              {product.compatibleVehicles.length > 2 && ` +${product.compatibleVehicles.length - 2} more`}
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                            <span className="text-xs text-emerald-400 flex items-center">
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> In Stock (UK &amp; EU)
                            </span>
                            <button
                              onClick={() => onSelectProduct(product)}
                              className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center space-x-1 transition-colors"
                            >
                              <span>View Full Specs</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: STEP-BY-STEP VEHICLE SELECTOR */}
        {activeTab === 'vehicle' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1: Select Make */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  1. Vehicle Make
                </label>
                <select
                  value={selectedMake}
                  onChange={(e) => {
                    setSelectedMake(e.target.value);
                    setSelectedModel('');
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-red-500"
                >
                  <option value="">-- Select Make --</option>
                  {VEHICLE_MAKES.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Step 2: Select Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  2. Vehicle Model
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-red-500 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <option value="">{selectedMake ? '-- All Models --' : '-- Select Make First --'}</option>
                  {availableModels.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              {/* Step 3: Product Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  3. Product Range
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-red-500"
                >
                  <option value="all">All 6 Product Ranges</option>
                  <option value="brake-pads">Brake Pads</option>
                  <option value="brake-discs">Brake Discs</option>
                  <option value="air-filter">Air Filters</option>
                  <option value="oil-filter">Oil Filters</option>
                  <option value="fuel-filter">Fuel Filters</option>
                  <option value="cabin-filter">Cabin &amp; Carbon Filters</option>
                </select>
              </div>

              {/* Reset action */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedMake('');
                    setSelectedModel('');
                    setSelectedCategory('all');
                  }}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-3 rounded-xl text-sm font-semibold transition-colors border border-slate-700"
                >
                  Reset Filter
                </button>
              </div>
            </div>

            {/* Vehicle Results Display */}
            {selectedMake && (
              <div className="mt-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Compatible CIDAK Components for {selectedMake} {selectedModel ? `• ${selectedModel}` : ''}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Showing {vehicleFilteredResults.length} approved OE-replacement parts
                    </p>
                  </div>
                </div>

                {vehicleFilteredResults.length === 0 ? (
                  <div className="text-center py-8 bg-slate-950 rounded-xl border border-slate-800 text-slate-400">
                    <p className="text-sm font-medium">No parts found matching this specific filter combination.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicleFilteredResults.map(product => (
                      <div
                        key={product.id}
                        className="bg-slate-950 border border-slate-800 hover:border-red-500 rounded-xl p-4 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono-tech text-xs font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/50">
                              {product.partNumber}
                            </span>
                            <span className="text-[10px] uppercase font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                              {product.categoryName}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-white mb-2">
                            {product.name}
                          </h4>

                          <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                            {product.description}
                          </p>

                          <div className="bg-slate-900 p-2 rounded text-[11px] text-slate-300 font-mono-tech border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">OEM Reference:</span>
                            {product.oemReferences.slice(0, 2).join(' / ')}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="text-[11px] text-emerald-400 font-medium">24M Warranty</span>
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="px-3 py-1 rounded-md bg-slate-800 hover:bg-red-600 text-white text-xs font-semibold transition-colors"
                          >
                            View Part
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
