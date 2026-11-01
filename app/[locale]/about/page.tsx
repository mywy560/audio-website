import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const factoryItems = t.raw('factoryItems') as string[];
  const whyItems = t.raw('whyItems') as { title: string; desc: string }[];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <h1 className="text-5xl font-bold mb-4">{t('hero')}</h1>
        <p className="text-gray-400 text-lg">{t('heroSub')}</p>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('story')}</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>{t('storyText1')}</p>
            <p>{t('storyText2')}</p>
            <p>{t('storyText3')}</p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('whyUs')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-gray-900 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-lg text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('factory')}</h2>
          <ul className="space-y-3">
            {factoryItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400 text-xl">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
