import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategorySidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="md:sticky md:top-28">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm border border-white/50 p-2">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4 mt-2">Categories</h4>
        <ul className="space-y-1">
          {categories.map((cat) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[cat.iconName] || Icons.Circle;
            const isActive = activeCategory === cat.id;

            return (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(cat.id);
                      const element = document.getElementById(cat.id);
                      if (element) {
                          const y = element.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({top: y, behavior: 'smooth'});
                      }
                  }}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-3 rounded-xl transition-all group ${
                    isActive 
                      ? 'bg-gradient-to-r from-brand-500 to-blue-600 text-white shadow-md scale-105' 
                      : 'text-gray-600 hover:bg-white hover:text-brand-600 hover:shadow-sm'
                  }`}
                >
                  <IconComponent size={18} className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-brand-500'}`} />
                  <span className="font-medium text-sm">{cat.title.split(' ')[0]}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};