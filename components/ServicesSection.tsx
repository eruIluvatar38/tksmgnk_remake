import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Eye, Glasses, Activity, Search } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("眼科一般診療", "General Ophthalmology"),
      desc: t(
        "充血、目やに、まぶたの腫れ、視力低下、視界の異常、飛蚊症などの診察と治療を行います。アレルギー性結膜炎（花粉症）などもご相談ください。",
        "Diagnosis and treatment of redness, discharge, eyelid swelling, vision loss, visual abnormalities, and floaters. We also treat allergic conjunctivitis (hay fever)."
      ),
      icon: <Eye size={32} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: t("コンタクト・メガネ処方", "Contact Lenses & Glasses"),
      desc: t(
        "患者さまのライフスタイルや目の状態に合わせた最適なコンタクトレンズ・メガネの処方を行います。初めての方にも丁寧に指導いたします。",
        "We prescribe the best contact lenses and glasses for your lifestyle and eye condition. We also provide careful instruction for first-time users."
      ),
      icon: <Glasses size={32} />,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: t("緑内障検診", "Glaucoma Screening"),
      desc: t(
        "緑内障は自覚症状がほとんどなく進行する病気です。40歳を過ぎたら定期的な検診をお勧めします。早期発見・早期治療が視力を守る鍵です。",
        "Glaucoma progresses with almost no subjective symptoms. Regular screenings are recommended after age 40. Early detection and treatment are key to saving vision."
      ),
      icon: <Search size={32} />,
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      title: t("糖尿病網膜症検診", "Diabetic Retinopathy"),
      desc: t(
        "糖尿病の合併症として起こる網膜症の検査です。自覚症状がなくても進行している場合がありますので、内科医と連携しながら定期的にチェックします。",
        "Examinations for retinopathy caused by diabetes. It may progress without symptoms, so we check regularly in cooperation with internal medicine doctors."
      ),
      icon: <Activity size={32} />,
      color: "text-rose-500",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">{t('診療内容', 'Our Services')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t(
                '目に関するあらゆるお悩みに対応いたします。',
                'We handle all kinds of eye-related concerns.'
              )}
              <br className="hidden md:block" />
              {t(
                '急な症状（急患）も随時受け付けております。',
                'We also accept urgent cases at any time.'
              )}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 h-full flex flex-col">
                <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;