'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'zh' : 'en';
  const switchPath = `/${otherLocale}` + pathname.slice(`/${locale}`.length);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href={`/${locale}`} className="group flex items-center gap-3 text-white font-bold text-2xl tracking-tight">
          <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-xl">🔊</span>
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl group-hover:border-blue-400/50 transition-colors" />
          </div>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            SoundCore
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link 
              key={l.href} 
              href={l.href}
              className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors group"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={() => router.push(switchPath)}
            className="group relative flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:scale-105"
          >
            <span className="text-sm font-medium">
              {otherLocale === 'zh' ? '中文' : 'EN'}
            </span>
            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
              {otherLocale === 'zh' ? 'EN' : '中文'}
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden group relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 animate-slide-down">
          <div className="space-y-6">
            {links.map((l) => (
              <Link 
                key={l.href} 
                href={l.href}
                className="block text-gray-300 hover:text-white text-lg font-medium py-3 border-b border-white/10 last:border-0 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            
            <button 
              onClick={() => { router.push(switchPath); setMenuOpen(false); }} 
              className="w-full flex items-center justify-center gap-3 border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl transition-all duration-300 hover:border-blue-500/50 mt-6"
            >
              <span className="text-lg font-medium">
                {otherLocale === 'zh' ? '切换到中文' : 'Switch to English'}
              </span>
              <span className="text-sm opacity-60">
                {otherLocale === 'zh' ? '中文' : 'EN'}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
