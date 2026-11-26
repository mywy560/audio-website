import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string; image: string }[];
  const stats = t.raw('about.stats') as { value: string; label: string }[];
  const featured = products.slice(0, 4);

  return (
    <div className="site-home">
      <section className="home-hero">
        <Image src={products[0].image} alt={products[0].name} fill priority sizes="100vw" className="home-hero-image" />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="eyebrow">SOLVEX LIGHTING · PROFESSIONAL STAGE LIGHTING</p>
          <h1>{t('hero.title')} <span>{t('hero.titleHighlight')}</span></h1>
          <p className="hero-copy">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <Link className="button button-accent" href={`/${locale}/products`}>{t('hero.cta')} <span>↗</span></Link>
            <Link className="button button-outline" href={`/${locale}/contact`}>{t('hero.ctaSecondary')}</Link>
          </div>
          <div className="hero-caption"><span>01</span><i /> {products[0].name}</div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="home-section products-section">
        <div className="section-heading"><div><p className="eyebrow">ENGINEERED FOR THE MOMENT</p><h2>{t('products.title')}</h2><p className="section-copy">{t('products.subtitle')}</p></div><Link className="text-link" href={`/${locale}/products`}>{t('products.viewAll')} <span>↗</span></Link></div>
        <div className="featured-grid">{featured.map((item, index) => <Link href={`/${locale}/products`} key={item.id} className="featured-card"><div className="featured-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, 25vw" className="object-contain" /><span className="card-number">0{index + 1}</span><span className="card-arrow">↗</span></div><div className="featured-info"><div><h3>{item.name}</h3><p>{item.desc}</p></div>{item.tag && <span className="product-tag">{item.tag}</span>}</div></Link>)}</div>
      </section>

      <section className="case-section"><div className="home-section"><div className="section-heading"><div><p className="eyebrow">LIGHTING IN ACTION</p><h2>{locale === 'zh' ? '以光塑造现场' : 'Made for the stage'}</h2><p className="section-copy">{locale === 'zh' ? '从巡回演出到沉浸式空间，为每个现场带来可靠、出色的灯光体验。' : 'Reliable, expressive lighting for touring productions and unforgettable spaces.'}</p></div><Link className="text-link" href={`/${locale}/about`}>{t('about.learnMore')} <span>↗</span></Link></div></div></section>

      <section className="showcase-section"><div className="home-section"><div className="section-heading"><div><p className="eyebrow">REAL LIGHT · REAL IMPACT</p><h2>{locale === 'zh' ? '灯光效果展示' : 'Lighting in motion'}</h2><p className="section-copy">{locale === 'zh' ? '观看 SOLVEX 灯具在真实场景中的色彩、光束与动态表现。' : 'See SOLVEX color, beams and movement in real-world lighting scenes.'}</p></div></div><div className="showcase-grid">{[1, 2, 3, 4].map((number) => <article className="showcase-card" key={number}><video controls preload="none" playsInline poster={`/showcase/lighting-0${number}.jpg`} aria-label={`${locale === 'zh' ? '灯光效果视频' : 'Lighting effects video'} ${number}`}><source src={`/showcase/lighting-0${number}.mp4`} type="video/mp4" />Your browser does not support video.</video><div className="showcase-caption"><span>LIGHTING FILM / 0{number}</span><span>↗</span></div></article>)}</div></div></section>

      <section className="about-band"><div className="about-inner"><div className="about-intro"><p className="eyebrow">SIVI LIGHTING · SOLVEX</p><h2>{t('about.title')}</h2><p>{t('about.desc1')}</p><Link className="text-link" href={`/${locale}/about`}>{t('about.learnMore')} <span>↗</span></Link></div><div className="stats-grid">{stats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></section>

      <section className="contact-band"><p className="eyebrow">LET’S MAKE THE NEXT SHOW BRIGHTER</p><h2>{t('contact.title')}</h2><p>{t('contact.subtitle')}</p><Link className="button button-accent" href={`/${locale}/contact`}>{t('contact.send')} <span>↗</span></Link></section>
    </div>
  );
}
