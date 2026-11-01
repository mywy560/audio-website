import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string }[];
  const stats = t.raw('about.stats') as { value: string; label: string }[];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
        
        {/* 动态音频波形背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        {/* 音频波形装饰 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* 徽章 */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm px-5 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>{t('hero.badge')}</span>
          </div>
          
          {/* 标题 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-slide-up">
            <span className="block">{t('hero.title')}</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in delay-300">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-500">
            <Link href={`/${locale}/products`}
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-3">
              <span>{t('hero.cta')}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href={`/${locale}/contact`}
              className="group relative border-2 border-white/30 hover:border-blue-500/50 hover:bg-blue-500/10 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
              <span>{t('hero.ctaSecondary')}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">✉️</span>
            </Link>
          </div>
          
          {/* 滚动指示器 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">{t('products.title')}</h2>
            <p className="text-gray-400 text-lg">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <div key={item.id} className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                {/* 悬停效果背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 产品图标 */}
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl mb-6 flex items-center justify-center overflow-hidden group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all duration-500">
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    🔊
                  </div>
                  {/* 音频波形动画 */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((height, i) => (
                      <div 
                        key={i}
                        className="w-1 bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t-full"
                        style={{ height: `${height * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* 产品信息 */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">{item.name}</h3>
                    {item.tag && (
                      <span className="text-xs bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-300 border border-blue-500/50 px-3 py-1.5 rounded-full font-medium">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">{item.desc}</p>
                  
                  {/* 查看详情链接 */}
                  <Link href={`/${locale}/products`}
                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group-hover:gap-3">
                    <span>{t('products.viewDetails')}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
                
                {/* 装饰角 */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-transparent transform rotate-45 translate-x-4 -translate-y-4" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${locale}/products`}
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              {t('products.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                <span>{t('about.subtitle')}</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.desc1')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.desc2')}
              </p>
            </div>
            
            <Link href={`/${locale}/about`}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
              <span>{t('about.learnMore')}</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          {/* 右侧统计卡片 */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, index) => (
              <div 
                key={s.label} 
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 悬停效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 数值 */}
                <div className="relative text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </div>
                
                {/* 标签 */}
                <div className="relative text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {s.label}
                </div>
                
                {/* 装饰点 */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full group-hover:bg-blue-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-gray-400 text-lg mb-8">{t('contact.subtitle')}</p>
          <Link href={`/${locale}/contact`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
            {t('contact.send')}
          </Link>
        </div>
      </section>
    </div>
  );
}
