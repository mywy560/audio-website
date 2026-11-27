import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string; image: string; gallery: string[] }[];

  return (
    <div className="min-h-screen product-catalog">
      <section className="catalog-hero">
        <div className="catalog-hero-inner">
          <p className="eyebrow">SOLVEX LIGHTING / COLLECTION 2026</p>
          <h1>{t('productsPage.hero')}</h1>
          <p>{t('productsPage.heroSub')}</p>
          <div className="catalog-count"><span>08</span> {locale === 'zh' ? '个专业灯具系列' : 'professional fixture series'}</div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-toolbar"><span>{locale === 'zh' ? '产品系列' : 'PRODUCT SERIES'}</span><span>{String(products.length).padStart(2, '0')} / {locale === 'zh' ? '全部产品' : 'ALL PRODUCTS'}</span></div>
        <div className="catalog-grid">
          {products.map((item, index) => (
            <Link key={item.id} href={`/${locale}/products/${item.id}`} id={item.id} className="catalog-card">
              <div className="catalog-image">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="catalog-main-image" />
                <span className="catalog-index">SERIES / {String(index + 1).padStart(2, '0')}</span>
                {item.tag && <span className="catalog-tag">{item.tag}</span>}
              </div>
              <div className="catalog-card-body">
                <div className="catalog-title-row"><div><p className="catalog-model">{item.id.replaceAll('-', ' ').toUpperCase()}</p><h2>{item.name}</h2></div><span className="catalog-link-mark">↗</span></div>
                <p className="catalog-description">{item.desc}</p>
                <div className="catalog-gallery" aria-label={`${item.name} product views`}>
                  {item.gallery.map((src, viewIndex) => <div className="catalog-thumb" key={src}><Image src={src} alt={`${item.name} view ${viewIndex + 1}`} fill sizes="72px" /><span>0{viewIndex + 1}</span></div>)}
                  <span className="view-count">{item.gallery.length} {locale === 'zh' ? '张产品图' : 'VIEWS'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="catalog-cta-wrap"><div className="catalog-cta"><p>{locale === 'zh' ? '需要产品规格或方案建议？' : 'Looking for specifications or a lighting solution?'}</p><Link href={`/${locale}/contact`}>{t('nav.contact')} <span>↗</span></Link></div></section>
    </div>
  );
}
