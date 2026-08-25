import React, { useState } from 'react';
import { X, Plus, Edit2, Trash2, Check, Sparkles, Image, FileText, Layers, Eye, RefreshCw, Sliders } from 'lucide-react';
import { BannerItem, NewsArticle, ProductCategoryType } from '../types';

interface AdminManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  banners: BannerItem[];
  news: NewsArticle[];
  onUpdateBanners: (banners: BannerItem[]) => void;
  onUpdateNews: (news: NewsArticle[]) => void;
}

export const AdminManagerModal: React.FC<AdminManagerModalProps> = ({
  isOpen,
  onClose,
  banners,
  news,
  onUpdateBanners,
  onUpdateNews,
}) => {
  const [activeTab, setActiveTab] = useState<'banners' | 'news'>('banners');

  // Banner editing state
  const [editingBanner, setEditingBanner] = useState<BannerItem | null>(null);
  const [isCreatingBanner, setIsCreatingBanner] = useState(false);

  // News editing state
  const [editingNews, setEditingNews] = useState<NewsArticle | null>(null);
  const [isCreatingNews, setIsCreatingNews] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (!isOpen) return null;

  // --- BANNER HANDLERS ---
  const handleSaveBanner = (bannerToSave: BannerItem) => {
    let updated: BannerItem[];
    if (banners.some(b => b.id === bannerToSave.id)) {
      updated = banners.map(b => b.id === bannerToSave.id ? bannerToSave : b);
      showToast('Banner updated successfully!');
    } else {
      updated = [bannerToSave, ...banners];
      showToast('New banner added to front page!');
    }
    onUpdateBanners(updated);
    setEditingBanner(null);
    setIsCreatingBanner(false);
  };

  const handleDeleteBanner = (id: string) => {
    if (banners.length <= 1) {
      alert('You must have at least 1 banner for the homepage.');
      return;
    }
    const updated = banners.filter(b => b.id !== id);
    onUpdateBanners(updated);
    showToast('Banner removed.');
  };

  const handleToggleBannerLive = (id: string) => {
    const updated = banners.map(b => b.id === id ? { ...b, isLive: !b.isLive } : b);
    onUpdateBanners(updated);
    showToast('Banner visibility toggled.');
  };

  // --- NEWS HANDLERS ---
  const handleSaveNews = (newsToSave: NewsArticle) => {
    let updated: NewsArticle[];
    if (news.some(n => n.id === newsToSave.id)) {
      updated = news.map(n => n.id === newsToSave.id ? newsToSave : n);
      showToast('News article updated!');
    } else {
      updated = [newsToSave, ...news];
      showToast('New article published to homepage!');
    }
    onUpdateNews(updated);
    setEditingNews(null);
    setIsCreatingNews(false);
  };

  const handleDeleteNews = (id: string) => {
    const updated = news.filter(n => n.id !== id);
    onUpdateNews(updated);
    showToast('News article deleted.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono-tech text-red-400 uppercase font-bold tracking-wider">CIDAK Web Administration</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800">Live Sync</span>
              </div>
              <h2 className="text-lg font-bold text-white">Front Page Content &amp; Banner Manager</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="bg-slate-950/50 px-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => { setActiveTab('banners'); setEditingBanner(null); setIsCreatingBanner(false); }}
              className={`flex items-center space-x-2 py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'banners'
                  ? 'border-red-500 text-red-400 bg-red-950/20'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Hero Banners ({banners.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab('news'); setEditingNews(null); setIsCreatingNews(false); }}
              className={`flex items-center space-x-2 py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'news'
                  ? 'border-red-500 text-red-400 bg-red-950/20'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Latest News &amp; Bulletins ({news.length})</span>
            </button>
          </div>

          {toastMessage && (
            <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded border border-emerald-800 flex items-center space-x-1 animate-pulse">
              <Check className="w-3.5 h-3.5" />
              <span>{toastMessage}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: HERO BANNERS MANAGEMENT */}
          {activeTab === 'banners' && (
            <div>
              {!editingBanner && !isCreatingBanner ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">Homepage Hero Banners</h3>
                      <p className="text-xs text-slate-400">Configure slides, headlines, badges, and background imagery</p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingBanner({
                          id: `b-${Date.now()}`,
                          title: 'NEW CIDAK PRODUCT INNOVATION',
                          subtitle: 'Precision engineered automotive aftermarket solutions with OE performance.',
                          tagline: 'CIDAK AUTOMOTIVE',
                          badge: 'NEW RANGE LAUNCH',
                          ctaText: 'Explore Part Numbers',
                          ctaAction: 'vehicle-search',
                          bgGradient: 'from-slate-950 via-slate-900 to-red-950',
                          accentColor: '#DC2626',
                          imageUrl: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=1200&q=80',
                          isLive: true,
                          order: banners.length + 1
                        });
                        setIsCreatingBanner(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Banner</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {banners.map((banner, idx) => (
                      <div
                        key={banner.id}
                        className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center space-x-3">
                          {banner.imageUrl && (
                            <img
                              src={banner.imageUrl}
                              alt={banner.title}
                              className="w-16 h-12 object-cover rounded-lg border border-slate-800 shrink-0"
                            />
                          )}
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-900">
                                {banner.badge}
                              </span>
                              <span className="text-xs text-slate-400 font-mono-tech">Slide #{idx + 1}</span>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                                banner.isLive ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {banner.isLive ? 'Active' : 'Draft'}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-white">{banner.title}</h4>
                            <p className="text-xs text-slate-400 line-clamp-1">{banner.subtitle}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 self-end sm:self-auto">
                          <button
                            onClick={() => handleToggleBannerLive(banner.id)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                          >
                            {banner.isLive ? 'Hide' : 'Show'}
                          </button>
                          <button
                            onClick={() => { setEditingBanner({ ...banner }); setIsCreatingBanner(false); }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBanner(banner.id)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Banner Edit / Create Form */
                editingBanner && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveBanner(editingBanner);
                    }}
                    className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <h4 className="text-sm font-bold text-white">
                        {isCreatingBanner ? 'Create New Banner Slide' : 'Edit Banner Slide'}
                      </h4>
                      <button
                        type="button"
                        onClick={() => { setEditingBanner(null); setIsCreatingBanner(false); }}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">Headline Title</label>
                        <input
                          type="text"
                          required
                          value={editingBanner.title}
                          onChange={(e) => setEditingBanner({ ...editingBanner, title: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">Top Badge Text</label>
                        <input
                          type="text"
                          value={editingBanner.badge}
                          onChange={(e) => setEditingBanner({ ...editingBanner, badge: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Subtitle / Summary</label>
                      <textarea
                        rows={2}
                        value={editingBanner.subtitle}
                        onChange={(e) => setEditingBanner({ ...editingBanner, subtitle: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">CTA Button Text</label>
                        <input
                          type="text"
                          value={editingBanner.ctaText}
                          onChange={(e) => setEditingBanner({ ...editingBanner, ctaText: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">CTA Action Target</label>
                        <select
                          value={editingBanner.ctaAction}
                          onChange={(e) => setEditingBanner({ ...editingBanner, ctaAction: e.target.value as any })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        >
                          <option value="vehicle-search">Vehicle &amp; Competitor Part Lookup</option>
                          <option value="product-category">Product Range Page</option>
                          <option value="quality">Quality &amp; R90 Standards</option>
                          <option value="webshop">Online Catalogue</option>
                          <option value="contact">Contact &amp; Distributor Portal</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Background Image URL</label>
                      <input
                        type="url"
                        value={editingBanner.imageUrl || ''}
                        onChange={(e) => setEditingBanner({ ...editingBanner, imageUrl: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <label className="flex items-center space-x-2 text-xs text-slate-300">
                        <input
                          type="checkbox"
                          checked={editingBanner.isLive}
                          onChange={(e) => setEditingBanner({ ...editingBanner, isLive: e.target.checked })}
                          className="rounded bg-slate-900 border-slate-700 text-red-600 focus:ring-red-500"
                        />
                        <span>Publish Live to Homepage</span>
                      </label>

                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => { setEditingBanner(null); setIsCreatingBanner(false); }}
                          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold"
                        >
                          Save &amp; Update Front Page
                        </button>
                      </div>
                    </div>
                  </form>
                )
              )}
            </div>
          )}

          {/* TAB 2: NEWS & PRESS BULLETIN MANAGEMENT */}
          {activeTab === 'news' && (
            <div>
              {!editingNews && !isCreatingNews ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">Latest News &amp; Technical Bulletins</h3>
                      <p className="text-xs text-slate-400">Publish product releases, workshop tech guides, and brand updates</p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingNews({
                          id: `n-${Date.now()}`,
                          title: '',
                          slug: `article-${Date.now()}`,
                          category: 'Product Launch',
                          summary: '',
                          content: '',
                          date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
                          readTime: '3 min read',
                          author: 'CIDAK Technical Engineering',
                          imageUrl: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80',
                          tags: ['Automotive', 'OE Standard'],
                          isFeatured: false
                        });
                        setIsCreatingNews(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Publish New Article</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {news.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-16 h-12 object-cover rounded-lg border border-slate-800 shrink-0"
                          />
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-red-400">
                                {item.category}
                              </span>
                              <span className="text-xs text-slate-400 font-mono-tech">{item.date}</span>
                              {item.isFeatured && (
                                <span className="text-[10px] bg-amber-950 text-amber-400 px-1.5 py-0.5 rounded border border-amber-800">
                                  Featured
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-white">{item.title}</h4>
                            <p className="text-xs text-slate-400 line-clamp-1">{item.summary}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 self-end sm:self-auto">
                          <button
                            onClick={() => { setEditingNews({ ...item }); setIsCreatingNews(false); }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNews(item.id)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* News Edit / Create Form */
                editingNews && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveNews(editingNews);
                    }}
                    className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <h4 className="text-sm font-bold text-white">
                        {isCreatingNews ? 'Draft New Press Release or Technical Bulletin' : 'Edit Article'}
                      </h4>
                      <button
                        type="button"
                        onClick={() => { setEditingNews(null); setIsCreatingNews(false); }}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs text-slate-300 font-semibold mb-1">Article Headline</label>
                        <input
                          type="text"
                          required
                          value={editingNews.title}
                          onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                          placeholder="e.g. CIDAK Launches New High-Carbon Disc Range..."
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">Category</label>
                        <select
                          value={editingNews.category}
                          onChange={(e) => setEditingNews({ ...editingNews, category: e.target.value as any })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        >
                          <option value="Product Launch">Product Launch</option>
                          <option value="Technical Bulletin">Technical Bulletin</option>
                          <option value="Company Update">Company Update</option>
                          <option value="Quality Standards">Quality Standards</option>
                          <option value="Trade Events">Trade Events</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Summary (Front Page Card Excerpt)</label>
                      <textarea
                        rows={2}
                        required
                        value={editingNews.summary}
                        onChange={(e) => setEditingNews({ ...editingNews, summary: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Full Content</label>
                      <textarea
                        rows={5}
                        required
                        value={editingNews.content}
                        onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">Image URL</label>
                        <input
                          type="url"
                          value={editingNews.imageUrl}
                          onChange={(e) => setEditingNews({ ...editingNews, imageUrl: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-semibold mb-1">Author / Department</label>
                        <input
                          type="text"
                          value={editingNews.author}
                          onChange={(e) => setEditingNews({ ...editingNews, author: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <label className="flex items-center space-x-2 text-xs text-slate-300">
                        <input
                          type="checkbox"
                          checked={editingNews.isFeatured}
                          onChange={(e) => setEditingNews({ ...editingNews, isFeatured: e.target.checked })}
                          className="rounded bg-slate-900 border-slate-700 text-red-600 focus:ring-red-500"
                        />
                        <span>Pin as Featured Article on Front Page</span>
                      </label>

                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => { setEditingNews(null); setIsCreatingNews(false); }}
                          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold"
                        >
                          Publish to Website
                        </button>
                      </div>
                    </div>
                  </form>
                )
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Updates take effect immediately on the live front page.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
