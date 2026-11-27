import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Product = { id: string; name: string; desc: string; tag: string; image: string; gallery: string[] };

export function generateStaticParams() {
  return ['darth-vader-420', 'h3-led', 'k1-led', 'r460', 's5', 'squidward', 'tp800f', 'tp-l7'].map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const products = messages.products.items as Product[];
  const product = products.find((item) => item.id === slug);
  if (!product) return <main className="product-not-found"><h1>Product not found</h1><Link href={`/${locale}/products`}>← {messages.nav.products}</Link></main>;

  const t = await getTranslations({locale});
  const isK1 = product.id === 'k1-led';
  const specifications = locale === 'zh'
    ? [['模式', '光束 / 图案 / 染色'], ['混色', 'CMY 混色系统'], ['色温', '独立 CTO 调节'], ['控制', 'DMX512 / RDM']]
    : [['Modes', 'Beam / Spot / Wash'], ['Mixing', 'CMY color mixing'], ['Color temp', 'Independent CTO'], ['Control', 'DMX512 / RDM']];

  return (
    <div className="product-detail-page">
      <div className="detail-breadcrumb"><Link href={`/${locale}`}>{messages.nav.home}</Link><span>/</span><Link href={`/${locale}/products`}>{messages.nav.products}</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-detail-inner">
        <div className="product-detail-heading"><p className="eyebrow">SOLVEX LIGHTING / {product.id.replaceAll('-', ' ').toUpperCase()}</p><h1>{product.name}</h1><p>{product.desc}</p></div>
        <div className="product-detail-layout">
          <div className="product-detail-gallery"><div className="product-detail-visual"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 700px) 100vw, 55vw" className="object-contain" /><span>{product.id.toUpperCase()} / SOLVEX</span></div><div className="detail-thumbnails">{product.gallery.map((src, index) => <div className="detail-thumbnail" key={src}><Image src={src} alt={`${product.name} view ${index + 1}`} fill sizes="96px" /><span>0{index + 1}</span></div>)}</div></div>
          <div className="product-detail-copy"><h2>{locale === 'zh' ? '功能概述' : 'Overview'}</h2><p>{isK1 ? (locale === 'zh' ? 'K1 将光束、图案与染色效果整合于一台灯具，适合需要灵活切换舞台效果的灯光设计。CMY 混色系统与独立 CTO 色温调节，为不同场景提供更细致的色彩控制。' : 'K1 combines beam, spot and wash effects in one fixture. CMY color mixing and independent CTO adjustment provide flexible color control for stage designs.') : product.desc}</p>
            {isK1 ? <><h3 className="detail-spec-heading">{locale === 'zh' ? '主要规格' : 'Key specifications'}</h3><div className="product-spec-grid">{specifications.map(([label, value]) => <div className="product-spec" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></> : <div className="detail-gallery-note">{locale === 'zh' ? `产品图片展示 ${product.gallery.length} 个视角。详细技术参数请联系我们获取产品资料。` : `${product.gallery.length} product views are available. Contact us for the full technical specification sheet.`}</div>}
            <p className="spec-note">{locale === 'zh' ? '完整技术参数与产品资料请向我们索取。' : 'Contact us for the full technical specification sheet.'}</p><Link className="button button-accent" href={`/${locale}/contact`}>{t('nav.contact')} <span>↗</span></Link>
          </div>
        </div>
      </section>
      <section className="product-video-section"><div className="product-video-inner"><div className="section-heading"><div><p className="eyebrow">LIGHTING IN MOTION</p><h2>{locale === 'zh' ? '灯光效果展示' : 'Lighting in motion'}</h2><p className="section-copy">{locale === 'zh' ? '观看舞台灯光的光束、色彩与动态效果。' : 'Explore stage beams, color and movement.'}</p></div></div><div className="product-video-grid">{[2, 3].map((number) => <video key={number} controls preload="none" playsInline poster={`/showcase/lighting-0${number}.jpg`}><source src={`/showcase/lighting-0${number}.mp4`} type="video/mp4" /></video>)}</div></div></section>
    </div>
  );
}
