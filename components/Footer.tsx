import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-xl mb-1">{t('高島眼科', 'Takashima Eye Clinic')}</h4>
          <p className="text-sm">{t('健康な笑顔のお手伝い', 'Supporting Your Healthy Smile')}</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">{t('プライバシーポリシー', 'Privacy Policy')}</a>
          <a href="#" className="hover:text-white transition-colors">{t('サイトマップ', 'Sitemap')}</a>
        </div>

        <div className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Takashima Eye Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;