import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Heart, UserCheck, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
       
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">{t('当クリニックについて', 'About Our Clinic')}</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {t('「やさしく、わかりやすく」', '"Gentle and Easy to Understand"')} <br />
              {t('安心できる医療を提供します', 'Providing Care You Can Trust')}
            </h3>
            <p className="text-slate-600 leading-loose mb-6 text-lg">
              {t(
                '高島眼科では、患者さま一人ひとりの声に耳を傾け、丁寧な説明と治療を心がけています。医師をはじめ、看護師、スタッフ全員が女性です。女性ならではのきめ細やかな気配りで、小さなお子様からご年配の方まで、安心して受診していただける環境を整えています。',
                'At Takashima Eye Clinic, we listen to each patient and strive to provide careful explanations and treatment. All of our doctors, nurses, and staff are women. We create an environment where everyone, from small children to the elderly, can feel at ease with attentive care.'
              )}
            </p>
            <p className="text-slate-600 leading-loose mb-8 text-lg">
              {t(
                '目の不調は不安なものです。私たちはその不安を少しでも取り除けるよう、笑顔での対応を大切にしています。',
                'Eye problems can be worrying. We value approaching you with a smile to help relieve that anxiety as much as possible.'
              )}
            </p>

            <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
              <h4 className="flex items-center gap-2 text-brand-800 font-bold mb-4">
                <MessageCircle size={20} />
                {t('患者さまの声', 'Patient Feedback')}
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-slate-600 text-sm">
                    "{t(
                      '先生の説明がとても丁寧で、不安がなくなりました。スタッフの方も親切で通いやすいです。',
                      'The doctor\'s explanation was very thorough and relieved my anxiety. The staff are also kind and it is easy to visit.'
                    )}"
                  </p>
                  <p className="text-right text-xs text-slate-400 mt-2">- {t('40代 女性', 'Female, 40s')}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-slate-600 text-sm">
                    "{t(
                      '子供が怖がらずに診察を受けられました。院内の雰囲気も明るくて良いです。',
                      'My child was able to receive an examination without being scared. The atmosphere in the clinic is bright and good.'
                    )}"
                  </p>
                  <p className="text-right text-xs text-slate-400 mt-2">- {t('30代 男性 (お子様同伴)', 'Male, 30s (with child)')}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                  <div className="bg-blue-50 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300">
                    <Heart className="mx-auto text-brand-500 mb-2" size={32} />
                    <h4 className="font-bold text-brand-900">{t('親切な対応', 'Kind Care')}</h4>
                    <p className="text-xs text-slate-500 mt-1">{t('寄り添うケア', 'Supportive')}</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                    <img src="https://picsum.photos/400/500?random=1" alt="Clinic Interior" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                    <img src="https://picsum.photos/400/500?random=2" alt="Medical Equipment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="bg-cyan-50 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300">
                    <UserCheck className="mx-auto text-cyan-500 mb-2" size={32} />
                    <h4 className="font-bold text-brand-900">{t('専門スタッフ', 'Staff')}</h4>
                    <p className="text-xs text-slate-500 mt-1">{t('全員女性スタッフ', 'All Female')}</p>
                  </div>
               </div>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;