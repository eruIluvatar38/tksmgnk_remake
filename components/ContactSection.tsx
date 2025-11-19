import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Send } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('success');
      alert(t(
        "お問い合わせを受け付けました。（デモ機能のため、実際には送信されません）",
        "Inquiry received. (This is a demo, no message was actually sent)"
      ));
      setFormStatus('idle');
    }, 1500);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-900 mb-16">{t('お問い合わせ', 'Contact Us')}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <AnimatedSection className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-brand-500 pl-4">{t('お電話・ご来院について', 'Phone & Visits')}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {t('当クリニックは', 'Our clinic ')}
                <span className="font-bold text-brand-600 bg-brand-50 px-1">{t('予約不要', 'does not require appointments')}</span>
                {t('です。', '. ')}<br />
                {t(
                  '診療時間内に直接ご来院ください。受付順に診察いたします。',
                  'Please visit directly during opening hours. We operate on a first-come, first-served basis.'
                )}
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-2">{t('お電話でのご相談', 'Phone Inquiries')}</p>
                <p className="text-3xl font-bold text-brand-900 font-mono">052-769-3161</p>
              </div>
            </div>

            <div>
               <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-brand-500 pl-4">{t('急患対応について', 'Urgent Cases')}</h3>
               <p className="text-slate-600 leading-relaxed text-sm">
                 {t(
                   '急な目の痛み、怪我、急激な視力低下などの場合は、可能な限り優先的に対応いたします。ご来院前にお電話いただけるとスムーズです。',
                   'We prioritize urgent cases such as sudden pain, injury, or vision loss. Please call ahead if possible.'
                 )}
               </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-900/5 border border-brand-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6">{t('お問い合わせフォーム', 'Contact Form')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('お名前', 'Name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                    placeholder={t("山田 太郎", "John Doe")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('メールアドレス', 'Email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t('お問い合わせ内容', 'Message')}</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none resize-none"
                    placeholder={t("ご質問内容をご記入ください", "Your message here...")}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? t('送信中...', 'Sending...') : t('送信する', 'Send Message')}
                  {!formStatus && <Send size={18} />}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  {t(
                    '※ 緊急を要する症状に関するご相談は、必ずお電話にてお願いいたします。',
                    '* Please contact us by phone for urgent medical concerns.'
                  )}
                </p>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;