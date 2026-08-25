import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Phone, Building2, Globe } from 'lucide-react';
import { TradeInquiry } from '../types';

interface TradeInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TradeInquiryModal: React.FC<TradeInquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<TradeInquiry>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    businessType: 'Wholesaler',
    interestedProducts: ['Brake Pads', 'Brake Discs'],
    estimatedMonthlyVolume: 'Containers / Pallets',
    message: ''
  });

  if (!isOpen) return null;

  const productOptions = [
    'Brake Pads (ECE R90 / Copper Free)',
    'Brake Discs (Silver Coated)',
    'Air Filters',
    'Oil Filters',
    'Fuel Filters',
    'Cabin & Carbon Filters',
    'Steering & Suspension Components',
    'New Range Under Development'
  ];

  const handleToggleProduct = (product: string) => {
    setFormData(prev => {
      const exists = prev.interestedProducts.includes(product);
      return {
        ...prev,
        interestedProducts: exists
          ? prev.interestedProducts.filter(p => p !== product)
          : [...prev.interestedProducts, product]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-600/30 text-red-400 border border-red-500/40 uppercase tracking-widest font-mono-tech">
              B2B Commercial Desk
            </span>
            <span className="text-xs text-slate-400">UK • Slovenia • Bulgaria</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Wholesale &amp; Distributor Trade Enquiry
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Partner with CIDAK AUTO PARTS LTD for matching OE quality, competitive tier pricing, and direct dispatch from our European 3PL warehouse network.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Enquiry Successfully Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to CIDAK AUTO PARTS LTD. Our Commercial Director, <strong>Harvinder Handa</strong>, and the operations team will review your application and provide trade catalogs and price schedules within 24 hours.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700 font-mono-tech">
                <div className="font-bold text-slate-900 border-b border-slate-200 pb-1">
                  Direct Contact Confirmation:
                </div>
                <div>Email: harvinder@cidakautoparts.com</div>
                <div>Mobile: +44 7931522602</div>
                <div>Head Office: Ascot, United Kingdom</div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. EuroParts Distribution Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. purchasing@europarts.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +44 123 456789"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Country / Market Territory *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United Kingdom, Germany, France..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  >
                    <option value="Wholesaler">Wholesaler</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Motor Factor">Motor Factor / Buying Group</option>
                    <option value="Fleet / Workshop">Fleet / Workshop Chain</option>
                    <option value="Other">Other Aftermarket Specialist</option>
                  </select>
                </div>
              </div>

              {/* Product Range of Interest */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Product Ranges of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {productOptions.map((opt) => (
                    <label 
                      key={opt}
                      className={`flex items-center space-x-2.5 p-2 rounded-xl border cursor-pointer transition-colors ${
                        formData.interestedProducts.includes(opt)
                          ? 'border-red-600 bg-red-50 text-red-950 font-semibold'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestedProducts.includes(opt)}
                        onChange={() => handleToggleProduct(opt)}
                        className="rounded text-red-600 focus:ring-red-500 w-4 h-4"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Enquiry Details / Specific Part Inquiries
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify your target product lines, container/pallet shipment requirements, or target vehicle coverage..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <div className="text-[11px] text-slate-500 flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>3 Years / 60k KM Warranty Backed</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 flex items-center space-x-2 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
