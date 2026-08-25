import React, { useState, useEffect } from 'react';
import { ProductCategoryType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TradeInquiryModal } from './components/TradeInquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { OurMissionPage } from './pages/OurMissionPage';
import { OurVisionPage } from './pages/OurVisionPage';
import { DirectorDeskPage } from './pages/DirectorDeskPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailedPage } from './pages/ProductDetailedPage';
import { QualityPage } from './pages/QualityPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Parse initial view from current URL pathname
  const parseUrlRoute = (): { view: string; category: ProductCategoryType } => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const searchParams = new URLSearchParams(window.location.search);
    const catQuery = searchParams.get('cat') as ProductCategoryType;

    if (path === '/about/who-we-are') return { view: 'about/who-we-are', category: 'brake-pads' };
    if (path === '/about/our-mission') return { view: 'about/our-mission', category: 'brake-pads' };
    if (path === '/about/our-vision') return { view: 'about/our-vision', category: 'brake-pads' };
    if (path === '/about/director-desk' || path === '/about/director%20desk') return { view: 'about/director-desk', category: 'brake-pads' };
    if (path === '/about') return { view: 'about', category: 'brake-pads' };
    if (path === '/quality-warranty' || path === '/quality') return { view: 'quality', category: 'brake-pads' };
    if (path === '/locations') return { view: 'locations', category: 'brake-pads' };
    if (path === '/products') return { view: 'products', category: catQuery || 'brake-pads' };
    if (path === '/product-category') return { view: 'product-category', category: catQuery || 'brake-pads' };
    if (path === '/product-detailed') return { view: 'product-detailed', category: catQuery || 'brake-pads' };
    if (path === '/contact') return { view: 'contact', category: 'brake-pads' };

    return { view: 'home', category: 'brake-pads' };
  };

  const initialRoute = parseUrlRoute();
  const [currentView, setCurrentView] = useState<string>(initialRoute.view);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryType>(initialRoute.category);

  // Trade Inquiry Modal
  const [isTradeInquiryOpen, setIsTradeInquiryOpen] = useState<boolean>(false);

  // Sync state with browser URL popstate (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const route = parseUrlRoute();
      setCurrentView(route.view);
      setSelectedCategory(route.category);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler with browser URL pushState
  const handleNavigate = (view: string, category?: ProductCategoryType) => {
    const cat = category || selectedCategory || 'brake-pads';
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }

    // Push corresponding pathname to browser location bar
    let targetPath = '/';
    if (view === 'about') targetPath = '/about';
    else if (view === 'about/who-we-are') targetPath = '/about/who-we-are';
    else if (view === 'about/our-mission') targetPath = '/about/our-mission';
    else if (view === 'about/our-vision') targetPath = '/about/our-vision';
    else if (view === 'about/director-desk') targetPath = '/about/director-desk';
    else if (view === 'quality') targetPath = '/quality-warranty';
    else if (view === 'locations') targetPath = '/locations';
    else if (view === 'products') targetPath = '/products';
    else if (view === 'product-category') targetPath = `/product-category?cat=${cat}`;
    else if (view === 'product-detailed') targetPath = `/product-detailed?cat=${cat}`;
    else if (view === 'contact') targetPath = '/contact';

    if (window.location.pathname + window.location.search !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Header / Navigation */}
      <Navbar
        currentView={currentView}
        selectedCategory={selectedCategory}
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsTradeInquiryOpen(true)}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {currentView === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'about/who-we-are' && (
          <WhoWeArePage
            onNavigate={handleNavigate}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'about/our-mission' && (
          <OurMissionPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'about/our-vision' && (
          <OurVisionPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'about/director-desk' && (
          <DirectorDeskPage
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {(currentView === 'products' || currentView === 'product-category') && (
          <ProductsPage
            initialCategory={selectedCategory}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'product-detailed' && (
          <ProductDetailedPage
            categoryId={selectedCategory}
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'quality' && (
          <QualityPage
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'locations' && (
          <LocationsPage
            onOpenInquiry={() => setIsTradeInquiryOpen(true)}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}

      </main>

      {/* Corporate Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsTradeInquiryOpen(true)}
      />

      {/* B2B Trade & Distributor Inquiry Modal */}
      <TradeInquiryModal
        isOpen={isTradeInquiryOpen}
        onClose={() => setIsTradeInquiryOpen(false)}
      />

    </div>
  );
}
