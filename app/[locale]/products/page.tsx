import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string; image: string; gallery: string[] }[];
  const k1 = products.find((item) => item.id === 'k1-led');
  const k1Specs = locale === 'zh'
    ? [['模式', '光束 / 图案 / 染色'], ['混色', 'CMY 混色系统'], ['色温', '独立 CTO 调节'], ['控制', 'DMX512 / RDM']]
    : [['Modes', 'Beam / Spot / Wash'], ['Mixing', 'CMY color mixing'], ['Color temp', 'Independent CTO'], ['Control', 'DMX512 / RDM']];

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
            <article key={item.id} id={item.id} className="catalog-card">
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
            </article>
          ))}
        </div>
      </section>

      {k1 && <section className="product-detail-section" id="k1-details">
        <div className="product-detail-inner">
          <div className="product-detail-heading"><p className="eyebrow">FEATURED FIXTURE / K1</p><h2>{k1.name}</h2><p>{k1.desc}</p></div>
          <div className="product-detail-layout">
            <div className="product-detail-visual"><Image src={k1.image} alt={k1.name} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-contain" /><span>K1 / SOLVEX</span></div>
            <div className="product-detail-copy"><h3>{locale === 'zh' ? '功能概述' : 'Overview'}</h3><p>{locale === 'zh' ? 'K1 将光束、图案与染色效果整合于一台灯具，适合需要灵活切换舞台效果的灯光设计。CMY 混色系统与独立 CTO 色温调节，为不同场景提供更细致的色彩控制。' : 'K1 combines beam, spot and wash effects in one fixture. CMY color mixing and independent CTO adjustment provide flexible color control for stage designs.'}</p><div className="product-spec-grid">{k1Specs.map(([label, value]) => <div className="product-spec" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><p className="spec-note">{locale === 'zh' ? '完整技术参数请向我们索取产品资料。' : 'Contact us for the full technical specification sheet.'}</p><Link className="button button-accent" href={`/${locale}/contact`}>{t('nav.contact')} <span>↗</span></Link></div>
          </div>
        </div>
      </section>}

      <section className="product-video-section"><div className="product-video-inner"><div className="section-heading"><div><p className="eyebrow">LIGHTING IN MOTION</p><h2>{locale === 'zh' ? '灯光效果展示' : 'Lighting in motion'}</h2><p className="section-copy">{locale === 'zh' ? '观看舞台灯光的光束、色彩与动态效果。' : 'Explore stage beams, color and movement.'}</p></div></div><div className="product-video-grid">{[2, 3].map((number) => <video key={number} controls preload="none" playsInline poster={`/showcase/lighting-0${number}.jpg`}><source src={`/showcase/lighting-0${number}.mp4`} type="video/mp4" /></video>)}</div></div></section>

      <section className="catalog-cta-wrap"><div className="catalog-cta"><p>{locale === 'zh' ? '需要产品规格或方案建议？' : 'Looking for specifications or a lighting solution?'}</p><Link href={`/${locale}/contact`}>{t('nav.contact')} <span>↗</span></Link></div></section>
    </div>
  );
}
