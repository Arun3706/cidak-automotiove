import React, { useState } from 'react';
import { 
  FileText, Calendar, Clock, User, Tag, ArrowRight, 
  Search, Settings, Sparkles, ChevronRight, X 
} from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsPageProps {
  news: NewsArticle[];
  onOpenAdmin: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ news, onOpenAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Product Launch', 'Technical Bulletin', 'Company Update', 'Quality Standards', 'Trade Events'];

  const filteredNews = news.filter(article => {
    const matchCategory = selectedCategory === 'All' || article.category === selectedCategory;
    if (!matchCategory) return false;

    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q) ||
      article.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* 1. Header */}
      <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-400 border border-red-500/30 uppercase tracking-widest font-mono-tech">
              Press &amp; Workshop Tech
            </span>
            <button
              onClick={onOpenAdmin}
              className="text-xs text-slate-400 hover:text-white bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800 flex items-center space-x-1"
            >
              <Settings className="w-3 h-3 text-red-400" />
              <span>Publish / Edit News</span>
            </button>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            CIDAK News &amp; Technical Bulletins
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Stay up to date with new product range expansions, technical workshop installation advice, metallurgical quality reports, and international automotive trade exhibitions.
          </p>
        </div>
      </div>

      {/* 2. Search & Category Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search news, technical fitting tips, product releases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>

        <div className="flex overflow-x-auto gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. News Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/60 overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl cursor-pointer"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-red-600 text-white uppercase font-mono-tech shadow-md">
                  {article.category}
                </span>
                {article.isFeatured && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 font-mono-tech shadow-md">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-3 text-[11px] text-slate-400 font-mono-tech mb-2">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/60 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 group-hover:text-white">Read Full Bulletin</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-red-500" />
            </div>
          </div>
        ))}
      </div>

      {/* 4. Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in duration-200">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-red-600 text-white uppercase font-mono-tech">
                  {selectedArticle.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 text-xs font-mono-tech text-slate-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-red-500" />
                    <span>{selectedArticle.author}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    <span>{selectedArticle.date}</span>
                  </span>
                </div>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-950 text-slate-400 px-2.5 py-1 rounded-lg border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
