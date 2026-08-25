import React, { useState } from 'react';
import { 
  ShieldCheck, Phone, Mail, ChevronDown, 
  MapPin, Award, Building2, Layers, Menu, X, FileText, Send
} from 'lucide-react';
import { ProductCategoryType } from '../types';

interface NavbarProps {
  currentView: string;
  selectedCategory: ProductCategoryType;
  onNavigate: (view: string, category?: ProductCategoryType) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  selectedCategory,
  onNavigate,
  onOpenInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const aboutSubPages = [
    { view: 'about', label: 'Company Overview', desc: 'Full corporate profile & Ascot HQ intro' },
    { view: 'about/who-we-are', label: 'Who We Are', desc: 'Ascot UK HQ & European distribution heritage' },
    { view: 'about/our-mission', label: 'Our Mission', desc: 'Wholesaler partnerships & 3-year warranty' },
    { view: 'about/our-vision', label: 'Our Vision', desc: 'Eco copper-free friction & automated CNC' },
    { view: 'about/director-desk', label: 'Director Desk', desc: 'Harvinder Handa & Dr Sukh Handa leadership' },
  ];

  const productCategories: { id: ProductCategoryType; label: string; desc: string }[] = [
    { id: 'brake-pads', label: 'Brake Pads', desc: 'Safe & noise-free ECE R90 copper-free pads' },
    { id: 'brake-discs', label: 'Brake Discs', desc: 'Silver coated anti-corrosion high carbon rotors' },
    { id: 'filters', label: 'Filters (Air, Oil, Fuel, Cabin)', desc: 'OE-grade filter media across 5 filter types' },
    { id: 'steering-suspension', label: 'Steering & Suspension', desc: 'CNC & robotics precision safety components' },
    { id: 'under-development', label: 'Range Under Development', desc: 'Upcoming product lines & roadmap' },
  ];

  const handleNavClick = (view: string, category?: ProductCategoryType) => {
    onNavigate(view, category);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      
      {/* Top Corporate Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center space-x-4 text-slate-300">
            <span className="flex items-center space-x-1 font-medium">
              <Building2 className="w-3.5 h-3.5 text-red-500" />
              <span>Head Office: Ascot (35 mins from Central London)</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Warehouses: UK • Slovenia • Bulgaria</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="mailto:harvinder@cidakautoparts.com" 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-red-400" />
              <span className="font-mono-tech">harvinder@cidakautoparts.com</span>
            </a>
            <a 
              href="tel:+447931522602" 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span className="font-mono-tech">+44 7931522602</span>
            </a>
            <span className="hidden lg:inline-flex items-center space-x-1 bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[11px] font-semibold">
              <Award className="w-3 h-3 mr-1" />
              3 Yrs / 60,000 KM Warranty
            </span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-md shadow-red-600/20 group-hover:bg-red-700 transition-colors">
              <span className="text-white font-black text-xl tracking-tighter font-mono-tech">C</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-950 font-mono-tech">CIDAK</span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-200 uppercase tracking-wider">UK &amp; EU</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight">
                AUTO PARTS LTD • DISTRIBUTOR
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentView === 'home'
                  ? 'bg-slate-100 text-red-600 font-bold'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold flex items-center space-x-1 transition-colors ${
                  currentView.startsWith('about')
                    ? 'bg-slate-100 text-red-600 font-bold'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
              </button>

              {aboutDropdownOpen && (
                <div 
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Corporate Sections
                    </span>
                  </div>
                  {aboutSubPages.map((item) => (
                    <button
                      key={item.view}
                      onClick={() => handleNavClick(item.view)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex flex-col ${
                        currentView === item.view
                          ? 'bg-red-50 text-red-700'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span className="font-bold text-sm text-slate-900">{item.label}</span>
                      <span className="text-xs text-slate-500 leading-snug">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold flex items-center space-x-1 transition-colors ${
                  currentView === 'products' || currentView === 'product-category' || currentView === 'product-detailed'
                    ? 'bg-slate-100 text-red-600 font-bold'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
              </button>

              {productsDropdownOpen && (
                <div 
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Product Categories
                    </span>
                  </div>
                  {productCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleNavClick('product-category', cat.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex flex-col ${
                        selectedCategory === cat.id
                          ? 'bg-red-50 text-red-700'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span className="font-bold text-sm text-slate-900">{cat.label}</span>
                      <span className="text-xs text-slate-500 leading-snug">{cat.desc}</span>
                    </button>
                  ))}
                  <div className="pt-2 mt-1 border-t border-slate-100">
                    <button
                      onClick={() => handleNavClick('products')}
                      className="w-full text-center py-2 text-xs font-bold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      View All Product Categories →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('quality')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1.5 ${
                currentView === 'quality'
                  ? 'bg-slate-100 text-red-600 font-bold'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Quality &amp; Warranty</span>
            </button>

            <button
              onClick={() => handleNavClick('locations')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1.5 ${
                currentView === 'locations'
                  ? 'bg-slate-100 text-red-600 font-bold'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Locations &amp; Offices</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentView === 'contact'
                  ? 'bg-slate-100 text-red-600 font-bold'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>

          </nav>

          {/* Action Button: B2B Trade Enquiry */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-red-600/20 flex items-center space-x-2 transition-all hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Trade Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenInquiry}
              className="p-2 rounded-lg bg-red-600 text-white text-xs font-bold"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold ${
              currentView === 'home' ? 'bg-red-50 text-red-600' : 'text-slate-700'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold ${
              currentView === 'about' ? 'bg-red-50 text-red-600' : 'text-slate-700'
            }`}
          >
            About Us
          </button>

          <div className="border-y border-slate-100 py-2 space-y-1">
            <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">Products</div>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick('products', cat.id)}
                className={`w-full text-left pl-6 pr-3 py-1.5 rounded-lg text-sm ${
                  currentView === 'products' && selectedCategory === cat.id
                    ? 'font-bold text-red-600'
                    : 'text-slate-600'
                }`}
              >
                • {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('quality')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-between ${
              currentView === 'quality' ? 'bg-red-50 text-red-600' : 'text-slate-700'
            }`}
          >
            <span>Quality &amp; Warranty</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">3 Yrs / 60k KM</span>
          </button>

          <button
            onClick={() => handleNavClick('locations')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold ${
              currentView === 'locations' ? 'bg-red-50 text-red-600' : 'text-slate-700'
            }`}
          >
            Locations &amp; Offices
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold ${
              currentView === 'contact' ? 'bg-red-50 text-red-600' : 'text-slate-700'
            }`}
          >
            Contact Us
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md text-center"
            >
              Submit Trade Enquiry
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
