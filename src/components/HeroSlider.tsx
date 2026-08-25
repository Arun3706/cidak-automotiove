import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BannerItem, ProductCategoryType } from '../types';

interface HeroSliderProps {
  banners: BannerItem[];
  onNavigate: (view: string, category?: ProductCategoryType) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ banners, onNavigate }) => {
  const activeBanners = banners.filter(b => b.isLive);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (activeBanners.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeBanners.length, isPaused]);

  if (activeBanners.length === 0) return null;

  const currentBanner = activeBanners[currentIndex] || activeBanners[0];

  const handleCtaClick = () => {
    if (currentBanner.ctaAction === 'vehicle-search') {
      onNavigate('vehicle-search');
    } else if (currentBanner.ctaAction === 'product-category') {
      onNavigate('product-category', currentBanner.targetCategory || 'brake-pads');
    } else if (currentBanner.ctaAction === 'quality') {
      onNavigate('quality');
    } else if (currentBanner.ctaAction === 'webshop') {
      onNavigate('webshop');
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade Transition */}
      <div className="relative min-h-[380px] sm:min-h-[420px] flex items-center">
        {activeBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 max-w-xl px-6 sm:px-10 py-8 sm:py-10 w-full">
          <div>
            {/* Badge & Tagline */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-600 text-white tracking-widest uppercase shadow-md shadow-red-600/30">
                {currentBanner.badge}
              </span>
              <span className="text-xs font-mono uppercase text-slate-200 tracking-wider">
                {currentBanner.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug uppercase drop-shadow-md">
              {currentBanner.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-sm text-slate-200 font-semibold leading-relaxed">
              {currentBanner.subtitle}
            </p>

            {/* Key USPs / Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200">
              <span className="flex items-center space-x-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700/80 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span>ECE R90 Approved</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700/80 backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>OE Matching Quality</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700/80 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>3 Yrs / 60,000 KMs Warranty</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCtaClick}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{currentBanner.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('locations')}
                className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 transition-all"
              >
                Ascot HQ & Logistics Hubs
              </button>
            </div>
          </div>
        </div>
      </div>
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700 transition-all"
              >
                Ascot HQ & Logistics Hubs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      {activeBanners.length > 1 && (
        <div className="absolute bottom-4 right-6 z-20 flex items-center space-x-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + activeBanners.length) % activeBanners.length)}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-1.5">
            {activeBanners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-6 bg-red-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % activeBanners.length)}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
