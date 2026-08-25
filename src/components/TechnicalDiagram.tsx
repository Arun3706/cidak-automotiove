import React from 'react';
import { ProductCategoryType } from '../types';

interface TechnicalDiagramProps {
  type: ProductCategoryType | 'brake-pad' | 'brake-disc' | 'air-filter' | 'oil-filter' | 'fuel-filter' | 'cabin-filter';
  partNumber?: string;
  specs?: { label: string; value: string; unit?: string }[];
  highlightColor?: string;
  interactive?: boolean;
}

export const TechnicalDiagram: React.FC<TechnicalDiagramProps> = ({
  type,
  partNumber = 'CIDAK-SPEC',
  specs = [],
  highlightColor = '#DC2626',
  interactive = true,
}) => {
  // Normalize type
  const normType = type === 'brake-pads' ? 'brake-pad' :
                   type === 'brake-discs' ? 'brake-disc' :
                   type === 'cabin-filter' ? 'cabin-filter' :
                   type;

  return (
    <div className="relative w-full rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono-tech select-none overflow-hidden group">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Technical CAD Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-slate-300 font-semibold tracking-wider">CAD SCHEMATIC: {partNumber}</span>
        </div>
        <div className="flex items-center space-x-3 text-[10px] text-slate-400">
          <span>SCALE 1:1</span>
          <span>OE GEOMETRY</span>
          <span className="text-emerald-400">ISO 9001 APPROVED</span>
        </div>
      </div>

      {/* SVG Vector Blueprint */}
      <div className="relative h-56 flex items-center justify-center my-2">
        {normType === 'brake-pad' && (
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-52 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            <defs>
              <linearGradient id="padGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="frictionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>

            {/* Dimension Lines & Markers */}
            <line x1="40" y1="20" x2="360" y2="20" stroke="#64748B" strokeDasharray="3,3" strokeWidth="1" />
            <line x1="40" y1="15" x2="40" y2="25" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="360" y1="15" x2="360" y2="25" stroke="#DC2626" strokeWidth="1.5" />
            <text x="200" y="16" fill="#F87171" fontSize="10" textAnchor="middle" fontWeight="bold">OVERALL WIDTH: 146.0 mm</text>

            {/* Backing plate tabs */}
            <path d="M 40 100 L 70 60 L 330 60 L 360 100 L 340 150 L 60 150 Z" fill="url(#padGrad)" stroke="#475569" strokeWidth="2" />
            
            {/* Vulcanised Anti-Squeal Shim layer */}
            <path d="M 75 65 L 325 65 L 340 100 L 325 145 L 75 145 L 60 100 Z" fill="#0F172A" stroke="#DC2626" strokeWidth="1.5" />
            <text x="200" y="90" fill="#DC2626" fontSize="9" textAnchor="middle" fontWeight="bold">CIDAK® R90 THERMAL SCORCH BED</text>
            <text x="200" y="105" fill="#94A3B8" fontSize="8" textAnchor="middle">VULCANISED ACOUSTIC SHIM</text>

            {/* Central Dust & Thermal Expansion Slot */}
            <rect x="196" y="65" width="8" height="80" fill="#020617" stroke="#64748B" strokeWidth="1" rx="2" />
            
            {/* Chamfered edge lines */}
            <line x1="85" y1="70" x2="110" y2="140" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="315" y1="70" x2="290" y2="140" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />

            {/* Piston Wear Clip Mounts */}
            <circle cx="85" cy="85" r="5" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="315" cy="85" r="5" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />

            {/* Height dimension */}
            <line x1="380" y1="60" x2="380" y2="150" stroke="#64748B" strokeDasharray="3,3" strokeWidth="1" />
            <line x1="375" y1="60" x2="385" y2="60" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="375" y1="150" x2="385" y2="150" stroke="#DC2626" strokeWidth="1.5" />
            <text x="388" y="110" fill="#F87171" fontSize="9" transform="rotate(90,388,110)" textAnchor="middle">H: 54.7 mm</text>
          </svg>
        )}

        {normType === 'brake-disc' && (
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-52 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            <defs>
              <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="60%" stopColor="#1E293B" />
                <stop offset="85%" stopColor="#334155" />
                <stop offset="100%" stopColor="#475569" />
              </radialGradient>
            </defs>

            {/* Rotor Outer Ring */}
            <circle cx="200" cy="100" r="85" fill="url(#discGrad)" stroke="#64748B" strokeWidth="2" />
            <circle cx="200" cy="100" r="78" fill="none" stroke="#DC2626" strokeDasharray="4,4" strokeWidth="1" />
            
            {/* Geomet Friction Ring */}
            <circle cx="200" cy="100" r="56" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            
            {/* Center Hub & Bolt Pattern (5x112) */}
            <circle cx="200" cy="100" r="32" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
            <circle cx="200" cy="100" r="16" fill="#020617" stroke="#DC2626" strokeWidth="1.5" />
            
            {/* 5 Wheel Lug Holes */}
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const cx = 200 + Math.cos(rad) * 24;
              const cy = 100 + Math.sin(rad) * 24;
              return <circle key={i} cx={cx} cy={cy} r="4" fill="#020617" stroke="#94A3B8" strokeWidth="1.5" />;
            })}

            {/* Fixing screw hole */}
            <circle cx="188" cy="80" r="2.5" fill="#DC2626" />

            {/* Directional Vane Callouts */}
            <line x1="200" y1="10" x2="200" y2="190" stroke="#64748B" strokeDasharray="3,3" strokeWidth="0.8" />
            <text x="200" y="195" fill="#F87171" fontSize="9" textAnchor="middle" fontWeight="bold">DIAMETER: Ø 288.0 mm / GEOMET 500® COATED</text>
            <text x="65" y="100" fill="#94A3B8" fontSize="8" textAnchor="middle">VENTILATED</text>
            <text x="335" y="100" fill="#94A3B8" fontSize="8" textAnchor="middle">DTV &lt; 0.03mm</text>
          </svg>
        )}

        {normType === 'air-filter' && (
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-52 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            {/* Outer PU Frame */}
            <rect x="60" y="30" width="280" height="140" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2.5" />
            <rect x="72" y="42" width="256" height="116" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1" />
            
            {/* Pleated Filter Paper Texture */}
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={i} x1={80 + i * 10.4} y1="42" x2={80 + i * 10.4} y2="158" stroke={i % 2 === 0 ? '#DC2626' : '#64748B'} strokeWidth="1.2" opacity="0.75" />
            ))}

            {/* Sealing Perimeter Callout */}
            <text x="200" y="22" fill="#F87171" fontSize="9" textAnchor="middle" fontWeight="bold">POLYURETHANE AIRTIGHT GASKET (269 × 190 mm)</text>
            <text x="200" y="105" fill="#FFFFFF" fontSize="10" textAnchor="middle" fontWeight="bold" className="bg-slate-950 px-2">CIDAK 99.8% SYNTHETIC MICRO-MEDIA</text>
            <text x="200" y="185" fill="#94A3B8" fontSize="8" textAnchor="middle">AIRFLOW DIRECTION → LOW RESTRICTION PLEATING</text>
          </svg>
        )}

        {normType === 'oil-filter' && (
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-52 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            {/* Steel Canister Outline */}
            <path d="M 140 40 L 260 40 Q 275 40 275 60 L 275 160 Q 275 175 250 175 L 150 175 Q 125 175 125 160 L 125 60 Q 125 40 140 40 Z" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            
            {/* Internal Cutaway Section */}
            <rect x="145" y="65" width="110" height="90" fill="#0F172A" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3,3" />
            
            {/* Pleated Core */}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1={155 + i * 12.5} y1="70" x2={155 + i * 12.5} y2="150" stroke="#F87171" strokeWidth="2" />
            ))}

            {/* Silicone Anti-drain valve */}
            <ellipse cx="200" cy="50" rx="35" ry="8" fill="#DC2626" opacity="0.8" />
            <circle cx="200" cy="50" r="10" fill="#020617" stroke="#FFFFFF" strokeWidth="1" />
            
            <text x="200" y="25" fill="#F87171" fontSize="9" textAnchor="middle" fontWeight="bold">HEAVY GAUGE STEEL &gt; 20 BAR BURST RATED</text>
            <text x="200" y="112" fill="#FFFFFF" fontSize="8" textAnchor="middle">SYNTHETIC CORE</text>
            <text x="325" y="55" fill="#DC2626" fontSize="8" textAnchor="middle">SILICONE VALVE</text>
            <line x1="280" y1="52" x2="235" y2="50" stroke="#DC2626" strokeWidth="1" />
            <text x="200" y="192" fill="#94A3B8" fontSize="8" textAnchor="middle">CONNECTING THREAD: 3/4"-16 UNF / BYPASS 2.5 BAR</text>
          </svg>
        )}

        {normType === 'fuel-filter' && (
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-52 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            {/* In-Line Cylinder */}
            <rect x="130" y="50" width="140" height="100" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            
            {/* Spigots */}
            <rect x="80" y="90" width="50" height="20" rx="3" fill="#334155" stroke="#DC2626" strokeWidth="1.5" />
            <rect x="270" y="90" width="50" height="20" rx="3" fill="#334155" stroke="#DC2626" strokeWidth="1.5" />
            <circle cx="75" cy="100" r="6" fill="#020617" stroke="#DC2626" strokeWidth="1.5" />
            <circle cx="325" cy="100" r="6" fill="#020617" stroke="#DC2626" strokeWidth="1.5" />

            {/* Dual Chamber separator */}
            <line x1="200" y1="52" x2="200" y2="148" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="165" y="85" fill="#94A3B8" fontSize="8" textAnchor="middle">STAGE 1</text>
            <text x="165" y="98" fill="#F87171" fontSize="7" textAnchor="middle">MICRO-PORE</text>
            
            <text x="235" y="85" fill="#94A3B8" fontSize="8" textAnchor="middle">STAGE 2</text>
            <text x="235" y="98" fill="#38BDF8" fontSize="7" textAnchor="middle">WATER COAL.</text>

            <text x="200" y="32" fill="#F87171" fontSize="9" textAnchor="middle" fontWeight="bold">COMMON RAIL CRDi 2500-BAR RATED</text>
            <text x="200" y="175" fill="#94A3B8" fontSize="8" textAnchor="middle">HYDROPHOBIC WATER SEPARATION &gt; 98% EFFICIENCY</text>
          </svg>
        )}

        {normType === 'cabin-filter' && (
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-52 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            {/* 4 Multi-Layers */}
            <rect x="70" y="40" width="260" height="30" rx="4" fill="#334155" stroke="#64748B" strokeWidth="1" />
            <text x="200" y="60" fill="#CBD5E1" fontSize="8" textAnchor="middle">LAYER 1: PARTICULATE PRE-FILTER (PM10)</text>

            <rect x="70" y="72" width="260" height="30" rx="4" fill="#1E293B" stroke="#0284C7" strokeWidth="1" />
            <text x="200" y="92" fill="#38BDF8" fontSize="8" textAnchor="middle">LAYER 2: ELECTROSTATIC MICRO-FIBER (PM2.5 / PM0.3)</text>

            <rect x="70" y="104" width="260" height="30" rx="4" fill="#090D16" stroke="#DC2626" strokeWidth="1.5" />
            <text x="200" y="124" fill="#F87171" fontSize="8" textAnchor="middle" fontWeight="bold">LAYER 3: COCONUT ACTIVATED CARBON (NO2 &amp; ODOR TRAP)</text>

            <rect x="70" y="136" width="260" height="24" rx="4" fill="#064E3B" stroke="#10B981" strokeWidth="1" />
            <text x="200" y="152" fill="#6EE7B7" fontSize="8" textAnchor="middle">LAYER 4: BIO-FUNCTIONAL POLYPHENOL ANTI-ALLERGEN</text>

            <text x="200" y="24" fill="#F87171" fontSize="9" textAnchor="middle" fontWeight="bold">4-STAGE BIO-FUNCTIONAL ACTIVATED CARBON CARTRIDGE</text>
            <text x="200" y="180" fill="#94A3B8" fontSize="8" textAnchor="middle">VDI 6032 HYGIENE CERTIFIED / PASSENGER CABIN SAFETY</text>
          </svg>
        )}
      </div>

      {/* Technical Spec Matrix Footnote */}
      {specs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-800 text-[11px]">
          {specs.slice(0, 3).map((spec, i) => (
            <div key={i} className="bg-slate-950/60 p-1.5 rounded border border-slate-800/80">
              <span className="text-slate-400 block text-[10px] uppercase">{spec.label}</span>
              <span className="text-slate-100 font-semibold">{spec.value} {spec.unit || ''}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
