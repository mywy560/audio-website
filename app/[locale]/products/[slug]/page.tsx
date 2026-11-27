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
  const product = (messages.products.items as Product[]).find((item) => item.id === slug);
  if (!product) return <main className="product-not-found"><h1>Product not found</h1><Link href={`/${locale}/products`}>← {messages.nav.products}</Link></main>;

  const t = await getTranslations({locale});
  const isZh = locale === 'zh';
  const isK1 = product.id === 'k1-led';
  const sections = isZh
    ? { overview:'功能概述', specifications:'技术规格', features:'主要特点', dimensions:'产品尺寸', illuminance:'照度图', effects:'效果展示', downloads:'文档下载', library:'灯库下载', pending:'资料待补充', contact:'如需该产品的完整规格、尺寸图或下载资料，请联系我们获取。', download:'联系索取', noFile:'暂无可公开下载的文件' }
    : { overview:'Overview', specifications:'Technical Specifications', features:'Key Features', dimensions:'Product Dimensions', illuminance:'Illuminance Diagram', effects:'Lighting Effects', downloads:'Documents', library:'Lighting Library', pending:'Information coming soon', contact:'Contact us for the full specifications, dimension drawings, or downloadable product documents.', download:'Request information', noFile:'No public downloads available yet' };
  const specs = isK1
    ? (isZh ? [['灯具类型','三合一摇头光束灯'],['效果模式','光束 / 图案 / 染色'],['混色系统','CMY'],['色温调节','独立 CTO'],['控制协议','DMX512 / RDM']] : [['Fixture type','3-in-1 moving head beam'],['Effect modes','Beam / Spot / Wash'],['Color mixing','CMY'],['Color temperature','Independent CTO'],['Control','DMX512 / RDM']])
    : [];
  const features = isK1
    ? (isZh ? ['集光束、图案与染色效果于一体','支持 CMY 混色','独立 CTO 色温调节','支持 DMX512 / RDM 控制'] : ['Beam, spot and wash effects in one fixture','CMY color mixing','Independent CTO adjustment','DMX512 / RDM control'])
    : [product.desc];

  return (
    <div className="product-detail-page">
      <div className="detail-breadcrumb"><Link href={`/${locale}`}>{messages.nav.home}</Link><span>/</span><Link href={`/${locale}/products`}>{messages.nav.products}</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-detail-inner">
        <div className="product-detail-heading"><p className="eyebrow">SOLVEX LIGHTING / {product.id.replaceAll('-', ' ').toUpperCase()}</p><h1>{product.name}</h1><p>{product.desc}</p></div>
        <div className="product-detail-layout">
          <div className="product-detail-gallery"><div className="product-detail-visual"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 700px) 100vw, 55vw" className="object-contain" /><span>{product.id.toUpperCase()} / SOLVEX</span></div><div className="detail-thumbnails">{product.gallery.map((src, index) => <div className="detail-thumbnail" key={src}><Image src={src} alt={`${product.name} view ${index + 1}`} fill sizes="96px" /><span>0{index + 1}</span></div>)}</div></div>
          <div className="product-detail-copy"><h2>{sections.overview}</h2><p>{isK1 ? (isZh ? 'K1 将光束、图案与染色效果整合于一台灯具，适合需要灵活切换舞台效果的灯光设计。CMY 混色系统与独立 CTO 色温调节，为不同场景提供更细致的色彩控制。' : 'K1 combines beam, spot and wash effects in one fixture. CMY color mixing and independent CTO adjustment provide flexible color control for stage designs.') : product.desc}</p><Link className="button button-accent detail-contact-button" href={`/${locale}/contact`}>{t('nav.contact')} <span>↗</span></Link></div>
        </div>
      </section>

      <section className="detail-information"><div className="detail-information-inner">
        <div className="detail-section-heading"><p className="eyebrow">{product.id.toUpperCase()} / SPECIFICATIONS</p><h2>{sections.specifications}</h2></div>
        {specs.length ? <dl className="detail-spec-list">{specs.map(([label,value])=><div className="detail-spec-row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <div className="detail-pending">{sections.pending}<p>{sections.contact}</p></div>}

        <div className="detail-feature-block"><div><p className="eyebrow">DESIGNED FOR THE STAGE</p><h2>{sections.features}</h2></div><ul>{features.map((feature)=><li key={feature}>{feature}</li>)}</ul></div>

        <div className="detail-media-sections">
          <section className="detail-media-block"><div className="detail-section-heading"><p className="eyebrow">DRAWING</p><h2>{sections.dimensions}</h2></div><div className="detail-pending media-pending">{sections.pending}<p>{sections.contact}</p></div></section>
          <section className="detail-media-block"><div className="detail-section-heading"><p className="eyebrow">PHOTOMETRICS</p><h2>{sections.illuminance}</h2></div><div className="detail-pending media-pending">{sections.pending}<p>{sections.contact}</p></div></section>
        </div>

        <section className="detail-effects"><div className="detail-section-heading"><p className="eyebrow">LIGHTING IN MOTION</p><h2>{sections.effects}</h2></div><p>{isZh ? '以下为舞台灯光效果视频，展示光束、色彩与动态变化。' : 'Stage lighting videos showing beams, color and movement.'}</p><div className="product-video-grid">{[2,3].map((number)=><video key={number} controls preload="none" playsInline poster={`/showcase/lighting-0${number}.jpg`}><source src={`/showcase/lighting-0${number}.mp4`} type="video/mp4" /></video>)}</div></section>

        <div className="detail-download-grid"><section className="detail-download-block"><div className="detail-section-heading"><p className="eyebrow">PRODUCT FILES</p><h2>{sections.downloads}</h2></div><p>{sections.noFile}</p><Link href={`/${locale}/contact`}>{sections.download} ↗</Link></section><section className="detail-download-block"><div className="detail-section-heading"><p className="eyebrow">LIGHTING CONSOLE</p><h2>{sections.library}</h2></div><p>{sections.noFile}</p><Link href={`/${locale}/contact`}>{sections.download} ↗</Link></section></div>
      </div></section>
    </div>
  );
}
