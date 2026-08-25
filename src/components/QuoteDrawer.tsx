import React, { useState } from 'react';
import { X, Trash2, Send, CheckCircle2, FileDown, Printer, Building, User, Mail, Phone, MessageSquare, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<'distributor' | 'garage' | 'fleet' | 'export'>('garage');

  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    vatOrRegNumber: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end animate-in fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border-l border-slate-800 shadow-2xl h-full flex flex-col justify-between">
        
        {/* Drawer Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono-tech uppercase font-bold text-red-500 tracking-wider">CIDAK B2B PORTAL</span>
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span>Trade Quote &amp; Part Inquiry Basket</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-red-600/20 text-red-400 font-mono-tech border border-red-500/30">
                {items.reduce((acc, curr) => acc + curr.quantity, 0)} items
              </span>
            </h3>
          </div>

          <div className="flex items-center space-x-1">
            {items.length > 0 && (
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Print Quote"
              >
                <Printer className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Quote Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.contactName || 'Valued Customer'}</span>. Reference <span className="font-mono-tech text-red-400 font-bold">#CDK-RFQ-{Math.floor(100000 + Math.random() * 900000)}</span> has been logged with CIDAK European Sales Desk.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-left space-y-1 font-mono-tech">
                <div>Company: <span className="text-white">{formData.company || 'Direct Garage'}</span></div>
                <div>Account Email: <span className="text-white">{formData.email}</span></div>
                <div>Line Items: <span className="text-white">{items.length} References</span></div>
                <div>Estimated Turnaround: <span className="text-emerald-400">Within 2 Business Hours</span></div>
              </div>
              <button
                onClick={() => {
                  onClearCart();
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Return to Parts Catalogue
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mx-auto text-slate-500 border border-slate-700">
                <FileDown className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-300">Your Quote Basket is Empty</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Search part numbers or browse product lines and click "Add to Trade Quote" to generate a bulk RFQ.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span>Selected Parts</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 text-[11px]"
                  >
                    Clear All
                  </button>
                </div>

                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-mono-tech font-bold text-xs text-red-400">
                          {product.partNumber}
                        </span>
                        <span className="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400">
                          {product.categoryName}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-white line-clamp-1">{product.name}</h5>
                      <span className="text-[10px] text-slate-400 font-mono-tech block mt-0.5">
                        OE: {product.oemReferences[0] || 'Direct Match'}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center bg-slate-900 rounded-lg border border-slate-800 p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono-tech font-bold text-white">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-slate-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'garage', label: 'Independent Garage' },
                    { id: 'distributor', label: 'Motor Factor / Wholesaler' },
                    { id: 'fleet', label: 'Fleet Maintenance' },
                    { id: 'export', label: 'International Importer' },
                  ].map(type => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id as any)}
                      className={`p-2 rounded-lg border text-left font-medium transition-colors ${
                        inquiryType === type.id
                          ? 'bg-red-950/40 border-red-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information Form */}
              <form onSubmit={handleSubmit} id="quote-form" className="space-y-3">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Contact &amp; Delivery Details
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Company / Trading Name *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Contact Name *"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Business Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / Mobile *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Country (e.g. United Kingdom)"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                  />
                  <input
                    type="text"
                    placeholder="VAT / Reg Number (Optional)"
                    value={formData.vatOrRegNumber}
                    onChange={(e) => setFormData({ ...formData, vatOrRegNumber: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Special instructions, fleet requirements, or custom delivery requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500"
                />
              </form>
            </div>
          )}
        </div>

        {/* Drawer Footer Action */}
        {!isSubmitted && items.length > 0 && (
          <div className="bg-slate-950 p-6 border-t border-slate-800 space-y-3">
            <button
              type="submit"
              form="quote-form"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xl shadow-red-600/30"
            >
              {isSubmitting ? (
                <span>Submitting to Sales Desk...</span>
              ) : (
                <>
                  <span>Submit RFQ / Request Trade Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-slate-400">
              ⚡ Trade pricing and bulk carton rates dispatched by email within 2 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
