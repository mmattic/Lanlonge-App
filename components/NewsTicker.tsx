import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { MOCK_NEWS } from '../constants';

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-white/50 p-5 mb-8 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <h2 className="flex items-center gap-2 font-bold text-gray-800">
          <div className="p-1.5 bg-red-100 rounded-lg">
             <TrendingUp className="text-red-500" size={18} />
          </div>
          最新资讯 <span className="text-gray-300 font-normal">/ Headlines</span>
        </h2>
        <a href="#" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center bg-brand-50 px-3 py-1 rounded-full transition-colors">
          更多 <ChevronRight size={12} />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main featured news */}
        <div className="relative group cursor-pointer overflow-hidden rounded-xl h-48 md:h-full shadow-lg">
           <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" 
            alt="News" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="inline-block bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">重磅 HEADLINE</span>
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-brand-200 transition-colors">
              2025 欧洲跨境电商新趋势报告发布
            </h3>
          </div>
        </div>

        {/* News List */}
        <ul className="space-y-3">
          {MOCK_NEWS.map((news) => (
            <li key={news.id} className="group">
              <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-2xl font-black text-gray-100 group-hover:text-brand-200 transition-colors">0{news.id}</span>
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-gray-700 font-bold group-hover:text-brand-600 truncate transition-colors">
                        {news.title}
                    </h4>
                    <div className="flex gap-2 text-[10px] text-gray-400 mt-0.5 uppercase tracking-wide font-medium">
                        <span className="text-brand-400">{news.category}</span>
                        <span className="text-gray-300">•</span>
                        <span>{news.date}</span>
                    </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};