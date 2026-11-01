'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const ct = useTranslations('contact');
  const faqs = t.raw('faqs') as { q: string; a: string }[];
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <h1 className="text-5xl font-bold mb-4">{t('hero')}</h1>
        <p className="text-gray-400 text-lg">{t('heroSub')}</p>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-white/10 rounded-2xl p-10 overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
            {/* 装饰背景 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl transform -translate-x-8 translate-y-8" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <span className="text-lg">✉️</span>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('formTitle')}
                </h2>
              </div>
              
              {sent ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✅</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-3">{t('success')}</div>
                  <p className="text-gray-400">我们会在24小时内回复您</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">{ct('name')} *</label>
                      <input 
                        required 
                        className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">{ct('email')} *</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">{t('company')}</label>
                    <input 
                      className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="您的公司名称（可选）"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">{t('subject')}</label>
                    <input 
                      className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="咨询主题"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">{ct('message')} *</label>
                    <textarea 
                      required 
                      rows={6}
                      className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="请详细描述您的需求..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-3"
                  >
                    <span>{t('send')}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('infoTitle')}</h2>
            <ul className="space-y-4 text-gray-400 mb-10">
              <li className="flex gap-3"><span>📍</span>{ct('info.address')}</li>
              <li className="flex gap-3"><span>📞</span>{ct('info.phone')}</li>
              <li className="flex gap-3"><span>📧</span>{ct('info.emailAddr')}</li>
              <li className="flex gap-3"><span>🕐</span>{ct('info.hours')}</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">{t('faqTitle')}</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-gray-900 border border-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">{faq.q}</div>
                  <div className="text-gray-400 text-sm">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
