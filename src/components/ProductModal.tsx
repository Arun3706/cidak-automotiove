import React, { useState } from 'react';
import { X, Check, FileText, Download, ShieldCheck, Printer, ShoppingCart, Sparkles, AlertCircle, Share2, Layers, Car, Wrench } from 'lucide-react';
import { ProductItem } from '../types';
import { TechnicalDiagram } from './TechnicalDiagram';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'schematic' | 'crossref' | 'vehicles' | 'specs'>('schematic');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [showPrintView, setShowPrintView] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded bg-red-600 text-white font-mono-tech font-bold text-sm tracking-wider shadow-sm">
              {product.partNumber}
            </span>
            <div>
              <span className="text-xs text-slate-400 font-mono-tech block">CIDAK AFTERMARKET SPECIFICATION</span>
              <h2 className="text-lg font-bold text-white leading-tight">{product.name}</h2>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Print Specification Sheet"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-950/50 px-6 border-b border-slate-800 flex overflow-x-auto space-x-2">
          {[
            { id: 'schematic', label: 'CAD Schematic & Blueprints', icon: Layers },
            { id: 'crossref', label: 'Competitor & OEM Cross-Ref', icon: Sparkles },
            { id: 'vehicles', label: `Vehicle Applications (${product.compatibleVehicles.length})`, icon: Car },
            { id: 'specs', label: 'Technical Data & Certs', icon: Wrench },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-400 bg-red-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
          {/* TAB 1: SCHEMATIC */}
          {activeTab === 'schematic' && (
            <div className="space-y-6">
              <TechnicalDiagram
                type={product.diagramSvgType}
                partNumber={product.partNumber}
                specs={product.technicalSpecs}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Product Description & Engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.features.map((feat, i) => (
                      <span key={i} className="text-[11px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Manufacturing Quality Seal
                  </h4>
                  <div className="flex items-center space-x-3 text-xs text-slate-300">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>100% Homologated:</strong> {product.certifications.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-300">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                    <span><strong>Warranty:</strong> {product.warrantyMonths} Months / 30,000 Miles Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-300">
                    <FileText className="w-5 h-5 text-blue-400 shrink-0" />
                    <span><strong>Weight:</strong> {product.weightKg} kg net | EAN: {product.eanBarcode || '5060892010421'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMPETITOR & OEM CROSS REFERENCES */}
          {activeTab === 'crossref' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Competitor Brand Cross-Reference Table</span>
                  </h4>
                  <span className="text-xs text-slate-400">Direct 1:1 Interchangeability</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left text-xs font-mono-tech">
                    <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-3">Competitor Brand</th>
                        <th className="p-3">Competitor Part #</th>
                        <th className="p-3">CIDAK Replacement</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300">
                      {product.competitorCrossRefs.map((comp, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/50">
                          <td className="p-3 font-semibold text-white">{comp.brand}</td>
                          <td className="p-3 text-red-400 font-bold">{comp.partNumber}</td>
                          <td className="p-3 text-white font-bold">{product.partNumber}</td>
                          <td className="p-3 text-emerald-400 font-sans">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                              ✓ {comp.notes || 'Direct OE Match'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* OEM Reference numbers */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Original Equipment (OE) Part Numbers</h4>
                <div className="flex flex-wrap gap-2">
                  {product.oemReferences.map((oem, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 font-mono-tech text-xs"
                    >
                      OE #{oem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VEHICLE APPLICATIONS */}
          {activeTab === 'vehicles' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Confirmed Vehicle Applications</h4>
              
              <div className="space-y-2">
                {product.compatibleVehicles.map((veh, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-white text-sm">{veh.make} {veh.model}</span>
                        <span className="text-xs text-red-400 font-mono-tech">({veh.yearRange})</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Engine: {veh.engine} {veh.kwHp ? `• ${veh.kwHp}` : ''} {veh.chassisCode ? `• Chassis: ${veh.chassisCode}` : ''}
                      </div>
                    </div>

                    <span className="self-start sm:self-auto text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono-tech">
                      {veh.fittingPosition || product.fittingPosition || 'OE Fit'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TECHNICAL SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.technicalSpecs.map((sp, idx) => (
                  <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">{sp.label}</span>
                    <span className="text-sm font-mono-tech font-bold text-white">
                      {sp.value} {sp.unit || ''}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/50">
                <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                  Quality &amp; Testing Homologation
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Manufactured in strictly audited IATF 16949 / ISO 9001 certified facilities. Every batch is metallurgically and acoustically tested to guarantee OE compliance with Block Exemption Regulation BER 461/2010.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action Bar */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Ready for dispatch from CIDAK European Hub</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleAdd}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Quote Basket!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Trade Quote Basket</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
