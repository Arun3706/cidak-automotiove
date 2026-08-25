import React, { useState } from 'react';
import { 
  Building2, MapPin, Mail, Phone, Globe, 
  ExternalLink, Copy, Check, Clock, Truck, ShieldCheck, Send 
} from 'lucide-react';
import { OFFICE_LOCATIONS, DIRECTORS } from '../data/companyData';

interface LocationsPageProps {
  onOpenInquiry: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onOpenInquiry }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<string>(OFFICE_LOCATIONS[0].id);

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const selectedLoc = OFFICE_LOCATIONS.find(l => l.id === selectedLocationId) || OFFICE_LOCATIONS[0];

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200 uppercase tracking-widest font-mono-tech">
              Logistics Network
            </span>
            <span className="text-xs text-slate-500 font-medium">UK • Slovenia • Bulgaria</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            Our Offices &amp; 3PL Warehouses
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            CIDAK AUTO PARTS LTD operates its corporate head office in Ascot (35 minutes from Central London) supported by operational facilities and strategically located 3PL warehouse centers across the United Kingdom, Slovenia, and Bulgaria.
          </p>
        </div>
      </div>

      {/* 2. Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OFFICE_LOCATIONS.map((loc) => {
          const fullAddressString = `${loc.companyName}${loc.facilityName ? ` - ${loc.facilityName}` : ''}, ${loc.addressLines.join(', ')}${loc.postcode ? `, ${loc.postcode}` : ''}, ${loc.country}`;
          const isSelected = selectedLocationId === loc.id;

          return (
            <div 
              key={loc.id}
              onClick={() => setSelectedLocationId(loc.id)}
              className={`bg-white rounded-3xl p-8 border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                isSelected
                  ? 'border-red-600 shadow-md ring-2 ring-red-600/10'
                  : 'border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-full uppercase font-mono-tech">
                    {loc.type}
                  </span>
                  <span className="text-xs font-bold text-red-600 font-mono-tech">
                    {loc.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-950">
                    {loc.companyName}
                  </h3>
                  {loc.facilityName && (
                    <p className="text-sm font-bold text-red-600 mt-0.5">
                      Facility: {loc.facilityName}
                    </p>
                  )}
                </div>

                {/* Address Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1 font-mono-tech text-xs text-slate-800">
                  {loc.addressLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  {loc.postcode && <div className="font-bold">{loc.postcode}</div>}
                  <div className="text-red-600 font-bold text-sm pt-1">{loc.country}</div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {loc.description}
                </p>

              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyAddress(loc.id, fullAddressString);
                  }}
                  className="flex items-center space-x-1.5 text-slate-600 hover:text-slate-900 font-semibold"
                >
                  {copiedId === loc.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <div className="text-xs font-bold text-slate-900 font-mono-tech">
                  Tel: +44 7931522602
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* 3. Logistics Capabilities & Freight Times */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono-tech">
            Distribution Speed &amp; Fulfilment
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            European &amp; International 3PL Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            CIDAK's warehouse locations enable optimized customs clearance, multi-currency trade invoicing, and reduced freight transit times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold">
              UK
            </div>
            <h4 className="text-base font-bold text-white">Ascot &amp; Bracknell</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Serving the British aftermarket, motor factors, buying groups, and international trade governance. Next-day pallet dispatch available for domestic UK destinations.
            </p>
          </div>

          <div className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold">
              EU-W
            </div>
            <h4 className="text-base font-bold text-white">Slovenia (2HM Logistics)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Strategic central EU bonded hub for frictionless intra-community dispatch to Germany, France, Italy, Austria, and Western European wholesale partners.
            </p>
          </div>

          <div className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold">
              EU-E
            </div>
            <h4 className="text-base font-bold text-white">Bulgaria (Sofia Hub)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Eastern European regional warehouse maintaining comprehensive buffer stock inventories for rapid local distribution across the Balkan and Mediterranean trade corridors.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono-tech">
            Head Office: Ascot HP22 5EN • United Kingdom
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            Inquire for Regional Stock
          </button>
        </div>
      </div>

    </div>
  );
};
