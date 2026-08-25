import React, { useState } from 'react';
import { 
  ShieldCheck, Award, CheckCircle2, Microscope, 
  Flame, Cpu, Sparkles, PackageCheck, Layers, Wrench, 
  FileText, Send, ArrowRight
} from 'lucide-react';
import { QUALITY_MAP_STEPS, COMPANY_INFO } from '../data/companyData';

interface QualityPageProps {
  onOpenInquiry?: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenInquiry }) => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const iconComponents: Record<string, any> = {
    Microscope,
    Flame,
    Cpu,
    Sparkles,
    CheckCircle2,
    PackageCheck
  };

  const activeStepData = QUALITY_MAP_STEPS.find(s => s.stepNumber === selectedStep) || QUALITY_MAP_STEPS[0];
  const ActiveIcon = iconComponents[activeStepData.iconName] || ShieldCheck;

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200 uppercase tracking-widest font-mono-tech">
              Quality Assurance &amp; Standards
            </span>
            <span className="text-xs text-slate-500 font-medium">ECE R90 • ISO 9001:2015</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            Matching OE Quality For Entire Product Range
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Delivering consistent quality is the prime objective of CIDAK. The quality map below explains how product quality is monitored at each stage until delivery to our distributors.
          </p>
        </div>
      </div>

      {/* 2. 3-Year / 60,000 KM Warranty Statement Box */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono-tech">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Manufacturer Backing</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {COMPANY_INFO.warrantyHeadline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {COMPANY_INFO.warrantyText}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono-tech text-slate-300">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% ECE R90 Approval</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>BER 461/2010 OE Matching</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Quibble Replacement</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 text-center space-y-3">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-md">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl font-black text-white font-mono-tech">3 YEARS</div>
            <div className="text-xs text-slate-300 uppercase tracking-widest font-mono-tech">or 60,000 Kilometres</div>
            <p className="text-[11px] text-slate-400">
              Covers all CIDAK brake pads, brake discs, filters, and steering &amp; suspension parts.
            </p>
          </div>

        </div>
      </div>

      {/* 3. The Interactive 6-Stage Quality Map */}
      <div className="space-y-8">
        
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Quality Assurance Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            CIDAK 6-Stage Quality Map
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Click on any production stage below to examine our metallurgical controls, robotic machining verification, and laboratory testing protocols.
          </p>
        </div>

        {/* Stage Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {QUALITY_MAP_STEPS.map((step) => {
            const StepIcon = iconComponents[step.iconName] || ShieldCheck;
            const isSelected = selectedStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20 scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase font-mono-tech px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {step.stageName}
                  </span>
                  <StepIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-red-600'}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
                  {activeStepData.stageName} Detailed Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                  {activeStepData.title}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeStepData.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono-tech">
                Key Verification Controls:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeStepData.controlMeasures.map((measure, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start space-x-2 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{measure}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono-tech">
              Applied Quality Standard:
            </div>
            <div className="text-lg font-black text-slate-900 font-mono-tech">
              {activeStepData.standard}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Documented inspection certificates and laser batch serial tracking ensure complete accountability before stock transfer.
            </p>
            {onOpenInquiry && (
              <button
                onClick={onOpenInquiry}
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center"
              >
                Request Quality Audit Report
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
