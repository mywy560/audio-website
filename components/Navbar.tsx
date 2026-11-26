'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

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
    <nav className="fixed top-0 w-full z-50 bg-[#090b0e]/90 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link href={`/${locale}`} aria-label="SOLVEX home" className="group flex items-center">
          <span className="flex h-10 w-36 items-center rounded-md bg-white px-2 py-1 transition-transform duration-300 group-hover:scale-[1.03]">
            <Image src="/logo.png" alt="SOLVEX" width={320} height={64} className="h-auto w-full object-contain" priority />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link 
              key={l.href} 
              href={l.href}
              className="relative text-gray-400 hover:text-white text-[13px] font-medium transition-colors group"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={() => router.push(switchPath)}
            className="group relative flex items-center gap-2 border border-white/15 hover:border-orange-400/50 text-gray-200 px-3.5 py-2 rounded-md transition-all duration-200"
          >
            <span className="text-sm font-medium">
              {otherLocale === 'zh' ? '中文' : 'EN'}
            </span>
            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
              {otherLocale === 'zh' ? 'EN' : '中文'}
            </span>
            <span className="text-orange-400 text-xs">↗</span>
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
