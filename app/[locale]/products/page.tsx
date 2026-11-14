import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProductsPage() {
  const t = useTranslations();
  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string; image: string; gallery: string[] }[];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <h1 className="text-5xl font-bold mb-4">{t('productsPage.hero')}</h1>
        <p className="text-gray-400 text-lg">{t('productsPage.heroSub')}</p>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="relative h-64 bg-white p-4">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tag && (
                    <span className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <div className="mt-4 grid grid-cols-5 gap-2" aria-label={`${item.name} product views`}>
                  {item.gallery.map((src, index) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-md bg-white">
                      <Image src={src} alt={`${item.name} view ${index + 1}`} fill sizes="80px" className="object-contain p-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
