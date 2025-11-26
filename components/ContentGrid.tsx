import React, { useState } from 'react';
import { Category } from '../types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ContentGridProps {
  categories: Category[];
  activeCategory: string;
  searchQuery: string;
}

export const ContentGrid: React.FC<ContentGridProps> = ({ categories, searchQuery }) => {
  // State to track expanded sections. Default to all expanded.
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id] // Toggle. If undefined (default open), make it false (close).
    }));
  };
  
  // Filter based on search query
  const filteredCategories = categories.map(cat => ({
      ...cat,
      links: cat.links.filter(link => 
          !searchQuery || 
          link.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          (link.description && link.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
  })).filter(cat => cat.links.length > 0);

  if (filteredCategories.length === 0) {
      return (
          <div className="text-center py-20 text-gray-500 bg-white/50 backdrop-blur-sm rounded-xl border border-dashed border-gray-300">
              <p>No results found for "{searchQuery}"</p>
          </div>
      )
  }

  return (
    <div className="space-y-6 pb-20">
      {filteredCategories.map((cat) => {
        // By default, assume expanded if not explicitly set to false in state
        const isExpanded = expandedSections[cat.id] !== false; 

        return (
          <div key={cat.id} id={cat.id} className="scroll-mt-28 bg-white/60 backdrop-blur-xl rounded-2xl shadow-sm border border-white/50 overflow-hidden">
            
            {/* Section Header */}
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/50 transition-colors"
              onClick={() => toggleSection(cat.id)}
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-brand-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                  {cat.title}
                </h3>
                <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {cat.links.length}
                </span>
              </div>
              <button className="text-gray-400 hover:text-brand-600">
                {isExpanded ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
              </button>
            </div>

            {/* Grid Content */}
            {isExpanded && (
              <div className="p-4 pt-0 animate-in fade-in slide-in-from-top-4 duration-300">
                {/* Mobile: grid-cols-2 (compact), Desktop: grid-cols-4 */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {cat.links.map((link, lIdx) => (
                    <a 
                      key={lIdx} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-brand-300 transition-all duration-300 flex items-center md:items-start gap-3 relative"
                    >
                      {/* Icon Box */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center text-xs md:text-sm font-bold flex-shrink-0 shadow-inner ${link.color || 'bg-gray-100 text-gray-500'}`}>
                          {link.icon || link.title.charAt(0)}
                      </div>

                      <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                              <h4 className="font-bold text-gray-700 text-xs md:text-sm truncate group-hover:text-brand-600 transition-colors">
                                  {link.title}
                              </h4>
                              {/* External Link Icon - Hidden on mobile to save space */}
                              <ExternalLink size={12} className="hidden md:block text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          {/* Description: Hidden on Mobile for compactness */}
                          <p className="hidden md:block text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed h-8">
                              {link.description || '暂无描述'}
                          </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};