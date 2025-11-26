import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-12 border-t-4 border-brand-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 select-none">
             {/* Simplified Footer Logo */}
             <span className="font-logo font-black text-2xl tracking-tighter italic text-white">
                Lanlonge
                <span className="text-brand-500">.</span>
             </span>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            蓝隆科技 - 欧洲华人的网上家园。提供最全面的欧洲生活资讯、黄页导航及留学旅游服务。
          </p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Lanlonge Inc.
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4 border-b border-slate-600 pb-2 inline-block">关于我们</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-400">公司简介 About Us</a></li>
            <li><a href="#" className="hover:text-brand-400">联系方式 Contact</a></li>
            <li><a href="#" className="hover:text-brand-400">广告合作 Advertising</a></li>
            <li><a href="#" className="hover:text-brand-400">免责声明 Disclaimer</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 border-b border-slate-600 pb-2 inline-block">常用链接</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-400">中国驻欧使馆</a></li>
            <li><a href="#" className="hover:text-brand-400">欧洲时报</a></li>
            <li><a href="#" className="hover:text-brand-400">留学生互助</a></li>
            <li><a href="#" className="hover:text-brand-400">全欧黄页</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 border-b border-slate-600 pb-2 inline-block">关注我们</h3>
          <div className="flex gap-4 mb-4">
            {/* Social Placeholders */}
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brand-600 cursor-pointer transition-colors">We</div>
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brand-600 cursor-pointer transition-colors">Fb</div>
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brand-600 cursor-pointer transition-colors">Tw</div>
          </div>
          <p className="text-xs text-slate-500">
            Email: contact@lanlonge.com
          </p>
        </div>
      </div>
    </footer>
  );
};