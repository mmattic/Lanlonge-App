import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { TOP_NAV_LINKS } from '../constants';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-sm py-2' 
        : 'bg-white border-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo & Navigation Container */}
          <div className="flex items-center gap-8">
            {/* Artistic Text Logo */}
            {/* Added pr-4 (padding-right) to prevent italic text clipping */}
            <div className="flex items-center cursor-pointer group select-none pr-4" onClick={() => window.location.reload()}>
              <h1 className="font-logo text-3xl md:text-4xl font-black tracking-wider italic relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-600 drop-shadow-sm group-hover:brightness-110 transition-all">
                  LANLONGE
                </span>
                
                {/* Subtle reflection/glow effect */}
                <span className="absolute left-0 top-full -mt-2 w-full h-full bg-gradient-to-b from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
              {TOP_NAV_LINKS.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all relative group ${
                    link.title.includes('导航') 
                      ? 'bg-white text-brand-600 shadow-sm' 
                      : 'text-gray-600 hover:text-brand-600 hover:bg-white/60'
                  }`}
                >
                  {link.title.split(' ')[0]}
                   {link.isHot && !link.title.includes('导航') && (
                      <Flame size={10} className="absolute top-1 right-1 text-red-500" />
                   )}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center justify-center px-5 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all">
              新手指南
            </button>
            <button 
              className="md:hidden p-2 text-gray-600 bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t border-gray-100 bg-white/95 backdrop-blur-lg shadow-xl">
          <ul className="p-4 space-y-2">
            {TOP_NAV_LINKS.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.url} 
                  className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};