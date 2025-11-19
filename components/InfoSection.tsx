import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Baby, Car, ArrowUpCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const InfoSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <AnimatedSection>
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-100 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                  <Baby size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{t('キッズスペースについて', 'Kids Space')}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t(
                  '当院では、お子様連れの患者さまにも安心して通っていただけるよう、キッズスペースを設けております。',
                  'We have a kids space so that patients with children can visit with peace of mind.'
                )}
              </p>
              <div className="bg-white/60 p-4 rounded-xl border border-orange-100/50">
                <p className="text-sm text-orange-800 font-medium">
                  {t(
                    '※ 現在、感染症予防対策のため、おもちゃ等の設置を一時的に控えております。ご理解とご協力をお願い申し上げます。',
                    '* Currently, we are temporarily refraining from providing toys to prevent infection. We appreciate your understanding.'
                  )}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Car size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{t('アクセス・バリアフリー', 'Access & Barrier Free')}</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <p className="text-slate-600">
                    <span className="font-bold text-slate-800">{t('駐車場あり：', 'Parking:')}</span> 
                    {t(
                      '1階に専用駐車場がございます。満車の場合は近隣のコインパーキングをご利用ください。',
                      'Dedicated parking is available on the 1st floor. If full, please use nearby coin parking.'
                    )}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                     <ArrowUpCircle size={18} className="text-blue-400" />
                  </div>
                  <p className="text-slate-600">
                    <span className="font-bold text-slate-800">{t('エレベーター完備：', 'Elevator:')}</span> 
                    {t(
                      '足腰の不自由な方、車椅子の方もそのまま2階の受付へお上がりいただけます。',
                      'Those with difficulty walking or in wheelchairs can go directly to the reception on the 2nd floor.'
                    )}
                  </p>
                </li>
              </ul>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;