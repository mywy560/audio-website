import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const ct = useTranslations('contact');
  const locale = useLocale();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-bold text-xl mb-3">🔊 SoundCore</div>
          <p className="text-sm leading-relaxed">{t('desc')}</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">{t('links')}</div>
          <ul className="space-y-2 text-sm">
            {(['home', 'products', 'about', 'contact'] as const).map((key) => (
              <li key={key}>
                <Link href={`/${locale}${key === 'home' ? '' : '/' + key}`} className="hover:text-white transition-colors">
                  {nav(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">{nav('contact')}</div>
          <ul className="space-y-2 text-sm">
            <li>📧 {ct('info.emailAddr')}</li>
            <li>📞 {ct('info.phone')}</li>
            <li>📍 {ct('info.address')}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-600">
        {t('copyright')}
      </div>
    </footer>
  );
}
