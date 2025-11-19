import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const NewsSection: React.FC = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      date: "2023.08.01",
      title: t("夏季休診のお知らせ", "Summer Holiday Notice"),
      content: t(
        "8月13日（日）から8月16日（水）まで、夏季休診とさせていただきます。ご不便をおかけしますが、よろしくお願いいたします。",
        "We will be closed for summer holidays from August 13th (Sun) to August 16th (Wed). We apologize for any inconvenience."
      )
    },
    {
      date: "2023.12.10",
      title: t("年末年始の休診のお知らせ", "New Year Holiday Notice"),
      content: t(
        "12月29日（金）午後から1月4日（木）まで休診となります。年始は1月5日（金）より通常診療いたします。",
        "We will be closed from the afternoon of December 29th (Fri) to January 4th (Thu). Regular hours resume on January 5th (Fri)."
      )
    },
    {
      date: "2024.04.20",
      title: t("ゴールデンウィーク中の診療について", "Golden Week Hours"),
      content: t(
        "カレンダー通りの診療となります。祝日は休診ですのでご注意ください。",
        "We will be open according to the calendar. Please note that we are closed on public holidays."
      )
    }
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-baseline justify-between mb-10 border-b border-brand-200 pb-4">
            <h2 className="text-3xl font-bold text-brand-900">{t('お知らせ', 'News')}</h2>
            <span className="text-brand-500 font-medium text-sm">News</span>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-default">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                  <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">{item.date}</span>
                  <h3 className="text-lg font-bold text-brand-800 group-hover:text-brand-600 transition-colors flex items-center">
                    {item.title}
                    <ChevronRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 text-brand-500" />
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-0 md:pl-[6.5rem]">
                  {item.content}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;