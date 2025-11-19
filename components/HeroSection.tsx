import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-20 bg-gradient-to-br from-brand-50 via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-blue-100/50 to-transparent rounded-bl-[100px] -z-10" />
      
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-900 text-xs font-bold rounded-full mb-2">
            {t('名古屋市名東区・上社駅徒歩1分', '1 min walk from Kamiyashiro Station, Meito-ku, Nagoya')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
            {t('親切・丁寧に、', 'Kind & Careful Care,')} <br />
            <span className="text-brand-500">{t('患者さま一人ひとり', 'Tailored to You')}</span>{t('に', ' ')}<br />
            {t('寄り添う眼科クリニック', 'Eye Clinic')}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            {t(
              '視力の低下、目のかゆみ、飛蚊症など、目のことなら何でもご相談ください。女性医師とスタッフが、わかりやすく優しい診療を心がけています。',
              'Please consult us for any eye concerns such as vision loss, itching, or floaters. Our all-female staff strives to provide easy-to-understand and gentle medical care.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollTo('#schedule')}
              className="px-8 py-4 bg-brand-900 text-white rounded-xl font-bold shadow-lg shadow-brand-900/20 hover:bg-brand-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              {t('診療時間・アクセス', 'Access & Hours')}
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollTo('#services')}
              className="px-8 py-4 bg-white text-brand-900 border border-brand-200 rounded-xl font-bold hover:bg-brand-50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              {t('診療内容を見る', 'Our Services')}
            </button>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3 text-brand-900">
              <Phone className="fill-current" size={24} />
              <span className="text-2xl md:text-3xl font-bold font-mono">052-769-3161</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              {t(
                '※ 予約は不要です。ご不明点はお電話でお問い合わせください。',
                '* No appointment necessary. Please call us for any questions.'
              )}
            </p>
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Abstract Card Stack Visualization */}
          <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{t('診療スケジュール', 'Schedule')}</h3>
                <p className="text-sm text-gray-500">{t('本日の受付状況', 'Status Today')}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Calendar size={24} />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <span className="font-medium text-gray-700">{t('午前診療', 'Morning')}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">10:00 - 13:00</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <span className="font-medium text-gray-700">{t('午後診療', 'Afternoon')}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">15:30 - 19:00</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/50">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/100/100?grayscale" alt="Doctor" className="w-full h-full object-cover opacity-80" />
                 </div>
                 <p className="text-sm text-gray-600 italic">"{t('いつでもお気軽にご相談ください', 'Feel free to contact us anytime')}"</p>
               </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;