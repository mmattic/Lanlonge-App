import React, { useState } from 'react';
import { Search, Globe, Zap } from 'lucide-react';

interface SearchEngine {
  id: string;
  label: string;
  placeholder: string;
  buttonText: string;
  urlTemplate: string;
}

const SEARCH_ENGINES: SearchEngine[] = [
  { 
    id: 'Baidu', 
    label: '百度', 
    placeholder: '在 Baidu 中搜索...', 
    buttonText: '百度一下',
    urlTemplate: 'https://www.baidu.com/s?wd=' 
  },
  { 
    id: 'Google', 
    label: '谷歌', 
    placeholder: '在 Google 中搜索...', 
    buttonText: '谷歌搜索',
    urlTemplate: 'https://www.google.com/search?q=' 
  },
  { 
    id: 'AmazonUK', 
    label: '英亚', 
    placeholder: '搜索英国亚马逊...', 
    buttonText: '英亚搜索',
    urlTemplate: 'https://www.amazon.co.uk/s?k=' 
  },
  { 
    id: 'AmazonDE', 
    label: '德亚', 
    placeholder: '搜索德国亚马逊...', 
    buttonText: '德亚搜索',
    urlTemplate: 'https://www.amazon.de/s?k=' 
  },
  { 
    id: 'AmazonUS', 
    label: '美亚', 
    placeholder: '搜索美国亚马逊...', 
    buttonText: '美亚搜索',
    urlTemplate: 'https://www.amazon.com/s?k=' 
  },
];

export const Hero: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('Baidu');
  const [searchQuery, setSearchQuery] = useState('');

  const currentEngine = SEARCH_ENGINES.find(e => e.id === activeTabId) || SEARCH_ENGINES[0];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const url = `${currentEngine.urlTemplate}${encodeURIComponent(searchQuery)}`;
    window.open(url, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Light Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50"></div>
      
      {/* Animated Aurora Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl mix-blend-multiply filter animate-blob opacity-70"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000 opacity-70"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000 opacity-70"></div>
      
      {/* Grid Overlay for Texture (reinforced from body) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="font-logo text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-wide drop-shadow-sm">
          欧洲跨境卖家信赖的资源导航
        </h1>
        <p className="text-slate-500 text-sm md:text-base mb-10 tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2">
          <Globe size={16} className="text-brand-500" /> Trusted Resources for Cross-Border Business
        </p>
        
        <div className="max-w-3xl mx-auto shadow-2xl shadow-blue-500/10 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 p-2 relative animate-float">
          {/* Search Tabs */}
          <div className="flex justify-center md:justify-start gap-1 mb-2 px-1">
            {SEARCH_ENGINES.map(engine => (
              <button 
                key={engine.id}
                onClick={() => setActiveTabId(engine.id)}
                className={`px-4 md:px-6 py-2 text-xs md:text-sm font-bold rounded-lg transition-all duration-300 ${
                  activeTabId === engine.id 
                    ? 'bg-white text-brand-600 shadow-sm scale-105' 
                    : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-700'
                }`}
              >
                {engine.label}
              </button>
            ))}
          </div>

          {/* Search Input Area */}
          <div className="relative group">
             {/* Glow effect behind input */}
             <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 via-cyan-300 to-brand-300 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
             <div className="relative bg-white rounded-xl flex items-center p-1.5 shadow-inner">
               <div className="pl-4 text-gray-400">
                  <Search size={20} />
               </div>
               <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={currentEngine.placeholder}
                  className="flex-grow px-3 py-3 text-gray-800 outline-none text-base bg-transparent placeholder-gray-400 font-medium"
                  autoFocus
               />
               <button 
                  onClick={handleSearch}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
               >
                  {currentEngine.buttonText}
               </button>
             </div>
          </div>
        </div>

        {/* Quick Links below search */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-medium">
           <span className="text-slate-500 flex items-center gap-1 font-bold"><Zap size={14} className="text-orange-400 fill-orange-400"/> 热门工具:</span>
           {[
             { name: 'FBA计算器', url: 'https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US' },
             { name: 'VAT注册', url: 'https://www.gov.uk/vat-registration' },
             { name: '海外仓', url: 'https://www.goodcang.com/' },
             { name: '汇率换算', url: 'https://www.xe.com/' }
           ].map((item, i) => (
             <a 
               key={i}
               href={item.url} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="px-4 py-1.5 rounded-full bg-white/60 text-slate-600 border border-white/60 hover:bg-white hover:text-brand-600 hover:border-brand-200 hover:shadow-md transition-all cursor-pointer backdrop-blur-sm"
             >
               {item.name}
             </a>
           ))}
        </div>
      </div>
    </div>
  );
};