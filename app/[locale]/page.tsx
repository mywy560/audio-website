import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const products = t.raw('products.items') as { id: string; name: string; desc: string; tag: string; image: string }[];
  const stats = t.raw('about.stats') as { value: string; label: string }[];
  const featured = products.slice(0, 4);
  const cases = [
    { title: locale === 'zh' ? '现场演出与巡演' : 'Live concerts & tours', image: products[0]?.image },
    { title: locale === 'zh' ? '专业剧院与舞台' : 'Theatres & stages', image: products[1]?.image },
    { title: locale === 'zh' ? '娱乐空间与酒吧' : 'Entertainment venues', image: products[2]?.image },
  ];

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

      <section className="case-section"><div className="home-section"><div className="section-heading"><div><p className="eyebrow">LIGHTING IN ACTION</p><h2>{locale === 'zh' ? '以光塑造现场' : 'Made for the stage'}</h2><p className="section-copy">{locale === 'zh' ? '从巡回演出到沉浸式空间，为每个现场带来可靠、出色的灯光体验。' : 'Reliable, expressive lighting for touring productions and unforgettable spaces.'}</p></div><Link className="text-link" href={`/${locale}/about`}>{t('about.learnMore')} <span>↗</span></Link></div><div className="case-grid">{cases.map((item, index) => <Link key={item.title} href={`/${locale}/about`} className="case-card"><div className="case-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw" className="object-cover" /></div><div className="case-label"><span>0{index + 1} / APPLICATION</span><h3>{item.title}</h3><span className="case-arrow">↗</span></div></Link>)}</div></div></section>

      <section className="about-band"><div className="about-inner"><div className="about-intro"><p className="eyebrow">SIVI LIGHTING · SOLVEX</p><h2>{t('about.title')}</h2><p>{t('about.desc1')}</p><Link className="text-link" href={`/${locale}/about`}>{t('about.learnMore')} <span>↗</span></Link></div><div className="stats-grid">{stats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></section>

      <section className="contact-band"><p className="eyebrow">LET’S MAKE THE NEXT SHOW BRIGHTER</p><h2>{t('contact.title')}</h2><p>{t('contact.subtitle')}</p><Link className="button button-accent" href={`/${locale}/contact`}>{t('contact.send')} <span>↗</span></Link></section>
    </div>
  );
}
