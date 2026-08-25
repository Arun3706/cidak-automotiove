import React, { useState } from 'react';
import { 
  Building2, MapPin, Mail, Phone, Clock, 
  Send, CheckCircle2, ShieldCheck, User, Globe 
} from 'lucide-react';
import { OFFICE_LOCATIONS, DIRECTORS } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Wholesale / Distribution Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200 uppercase tracking-widest font-mono-tech">
              Commercial &amp; Operations Desk
            </span>
            <span className="text-xs text-slate-500 font-medium">Direct Executive Access</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            Contact CIDAK AUTO PARTS LTD
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Get in touch with our commercial directors, UK headquarters, or international 3PL logistics facilities for distributor onboarding, stock inquiries, and technical advisory.
          </p>
        </div>
      </div>

      {/* 2. Direct Contacts & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Direct Contacts & Directors */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Contact Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono-tech">
                Direct Communication
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Corporate Contacts
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-mono-tech">
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase">Commercial Email</div>
                  <a href="mailto:harvinder@cidakautoparts.com" className="text-white font-bold hover:text-red-400 transition-colors">
                    harvinder@cidakautoparts.com
                  </a>
                </div>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase">Direct Mobile / WhatsApp</div>
                  <a href="tel:+447931522602" className="text-white font-bold hover:text-red-400 transition-colors">
                    +44 7931522602
                  </a>
                </div>
              </div>
            </div>

            {/* Directors Box */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Company Directors
              </span>
              <div className="space-y-2 text-xs">
                {DIRECTORS.map((dir, i) => (
                  <div key={i} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{dir.name}</div>
                      <div className="text-red-400 text-[11px] font-semibold">{dir.role}</div>
                    </div>
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Head Office Address Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded uppercase font-mono-tech">
              Headquarters
            </span>
            <h4 className="text-xl font-bold text-slate-950">
              CIDAK AUTO PARTS LTD
            </h4>
            <div className="text-xs text-slate-600 font-mono-tech space-y-0.5">
              <div>Craven Lodge, Coronation Road</div>
              <div>Ascot HP22 5EN</div>
              <div className="text-slate-900 font-bold">United Kingdom</div>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Located in Ascot, 35 minutes from Central London.
            </p>
          </div>

        </div>

        {/* Right Col: Interactive Message Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Message Sent Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting CIDAK AUTO PARTS LTD. Your message has been forwarded directly to our Commercial Director, Harvinder Handa. We will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
                  Commercial Inquiry
                </span>
                <h3 className="text-2xl font-black text-slate-950">
                  Send Us a Direct Message
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Motor Parts Ltd"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
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
                    placeholder="e.g. +44 7931 522602"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                >
                  <option value="Wholesale / Distribution Inquiry">Wholesale / Distribution Inquiry</option>
                  <option value="Product Range Leaflets & Pricing">Product Range Leaflets &amp; Pricing</option>
                  <option value="Technical Specification / ECE R90 Report">Technical Specification / ECE R90 Report</option>
                  <option value="Logistics & Warehousing Inquiries">Logistics &amp; Warehousing Inquiries</option>
                  <option value="Other Commercial Matters">Other Commercial Matters</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Message / Order Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please let us know your requirements, target product ranges, or distribution territories..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-slate-900 bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 flex items-center justify-center space-x-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Direct Message</span>
              </button>

            </form>
          )}

        </div>

      </div>

      {/* 3. All 4 Office Locations Directory Cards */}
      <div className="space-y-6 pt-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono-tech">
            Physical Presence
          </span>
          <h3 className="text-2xl font-black text-slate-950 tracking-tight">
            All Office &amp; Warehouse Locations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICE_LOCATIONS.map((loc) => (
            <div 
              key={loc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded uppercase font-mono-tech">
                  {loc.type}
                </span>
                <h4 className="text-base font-bold text-slate-900">{loc.companyName}</h4>
                {loc.facilityName && (
                  <p className="text-xs font-bold text-red-600">{loc.facilityName}</p>
                )}
                <div className="text-xs text-slate-600 font-mono-tech space-y-0.5 pt-1">
                  {loc.addressLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  {loc.postcode && <div>{loc.postcode}</div>}
                  <div className="text-slate-950 font-bold">{loc.country}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono-tech">
                Email: {loc.email}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
