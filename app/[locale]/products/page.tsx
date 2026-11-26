import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProductsPage() {
  const t = useTranslations();
  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string; image: string; gallery: string[] }[];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 px-6 text-center border-b border-white/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,.16),transparent_55%),#0b0f13]">
        <div className="text-orange-400 text-xs tracking-[0.24em] uppercase mb-4">SOLVEX / Lighting collection</div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">{t('productsPage.hero')}</h1>
        <p className="text-gray-400 text-base md:text-lg">{t('productsPage.heroSub')}</p>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((item) => (
            <div key={item.id} className="group bg-[#11161c] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-orange-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-72 bg-white p-4">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-base leading-snug">{item.name}</h3>
                  {item.tag && (
                    <span className="text-xs bg-orange-400/10 text-orange-300 border border-orange-400/20 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed min-h-10">{item.desc}</p>
                <div className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label={`${item.name} product views`}>
                  {item.gallery.map((src, index) => (
                    <div key={src} className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-white/10">
                      <Image src={src} alt={`${item.name} view ${index + 1}`} fill sizes="56px" className="object-contain p-1" />
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
