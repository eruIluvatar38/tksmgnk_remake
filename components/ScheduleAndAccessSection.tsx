import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ScheduleAndAccessSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('アクセス・診療時間', 'Access & Hours')}</h2>
            <div className="inline-block bg-brand-800 px-4 py-2 rounded-full text-sm font-medium text-blue-200 border border-brand-700">
              {t('本日は通常どおり診療しております', 'Open as usual today')}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Schedule Column */}
          <AnimatedSection className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-blue-300" />
              <h3 className="text-2xl font-bold">{t('診療時間', 'Consultation Hours')}</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/10 text-blue-200">
                    <th className="pb-3 text-left font-medium">{t('診療時間', 'Hours')}</th>
                    <th className="pb-3 font-medium w-12 text-center">{t('月', 'Mon')}</th>
                    <th className="pb-3 font-medium w-12 text-center">{t('火', 'Tue')}</th>
                    <th className="pb-3 font-medium w-12 text-center">{t('水', 'Wed')}</th>
                    <th className="pb-3 font-medium w-12 text-center">{t('木', 'Thu')}</th>
                    <th className="pb-3 font-medium w-12 text-center">{t('金', 'Fri')}</th>
                    <th className="pb-3 font-medium w-12 text-center text-blue-300">{t('土', 'Sat')}</th>
                    <th className="pb-3 font-medium w-12 text-center text-red-300">{t('日', 'Sun')}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-100">
                  <tr className="border-b border-white/5">
                    <td className="py-4">
                      <span className="block text-xs text-blue-300 mb-1">{t('午前', 'AM')}</span>
                      10:00 - 13:00
                      <span className="block text-xs text-slate-400 mt-1 md:hidden">{t('※土曜 9:00-12:30', '*Sat 9:00-12:30')}</span>
                    </td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg text-white/20">-</td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg">▲</td>
                    <td className="text-center text-lg text-white/20">-</td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <span className="block text-xs text-blue-300 mb-1">{t('午後', 'PM')}</span>
                      15:30 - 19:00
                      <span className="block text-xs text-slate-400 mt-1 md:hidden">{t('※土曜 14:00-16:30', '*Sat 14:00-16:30')}</span>
                    </td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg text-white/20">-</td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg">●</td>
                    <td className="text-center text-lg">▲</td>
                    <td className="text-center text-lg text-white/20">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 space-y-2 text-sm text-blue-200">
              <p>{t('▲ 土曜午前は 9:00〜12:30、午後は 14:00〜16:30', '▲ Sat AM: 9:00-12:30, PM: 14:00-16:30')}</p>
              <p>{t('休診日：日曜・祝日', 'Closed: Sundays & Public Holidays')}</p>
              <p className="mt-4 pt-4 border-t border-white/10 font-bold text-white">
                {t('※ 予約は不要です。受付順に診察いたします。', '* No appointment necessary. Walk-ins welcome.')}
              </p>
            </div>
          </AnimatedSection>

          {/* Access Column */}
          <AnimatedSection delay={0.2} className="space-y-8">
             <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-brand-600" />
                  <h3 className="text-2xl font-bold text-brand-900">{t('アクセス', 'Location')}</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 font-bold">{t('住所', 'Address')}</p>
                    <p className="text-lg font-medium">
                      {t('〒465-0025', '465-0025')}<br/>
                      {t('名古屋市名東区上社1－607', '1-607 Kamiyashiro, Meito-ku, Nagoya')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold">{t('最寄り駅', 'Nearest Station')}</p>
                    <p className="text-lg font-medium text-brand-600">
                      {t('地下鉄東山線「上社駅」より徒歩1分', '1 min walk from Kamiyashiro Station (Higashiyama Line)')}
                    </p>
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 font-bold">{t('お電話', 'Phone')}</p>
                     <div className="flex items-center gap-2 text-xl font-bold font-mono">
                       <Phone size={20} className="fill-slate-800" />
                       052-769-3161
                     </div>
                  </div>
                </div>

                {/* Mock Map */}
                <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.471917469814!2d137.0045!3d35.1705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600365e7c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2z5ZCN5Y-k5bGL5biC5ZCN5p2x5Yy65LiK56S-77yR5LiB55uu77yW77yO77yX!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy"
                    className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  ></iframe>
                  <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-xs font-bold text-slate-700 pointer-events-none">
                    Google Maps
                  </div>
                </div>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAndAccessSection;