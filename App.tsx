import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CategorySidebar } from './components/CategorySidebar';
import { ContentGrid } from './components/ContentGrid';
import { DIRECTORY_DATA } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-600 bg-transparent">
      <Header 
        onSearch={setSearchQuery} 
      />

      <Hero />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 pb-12 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Categories */}
          <aside className="md:col-span-2 hidden md:block h-full">
            <CategorySidebar 
              categories={DIRECTORY_DATA} 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
            />
          </aside>

          {/* Main Content Area */}
          <section className="md:col-span-10">
            <ContentGrid 
              categories={DIRECTORY_DATA} 
              activeCategory={activeCategory}
              searchQuery={searchQuery}
            />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;