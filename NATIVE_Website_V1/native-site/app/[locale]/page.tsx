import Link from 'next/link';
import {notFound} from 'next/navigation';
import {homeCopy} from '@/lib/home';
import {isLocale} from '@/lib/i18n';
import type {Metadata} from 'next';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!isLocale(locale))return {};const values={en:{title:'NATIVE — Cross-Cultural Media, Localization & Production',description:'NATIVE helps creators and brands enter new markets through strategy, localization, production, platform management and partnerships.'},de:{title:'NATIVE — Cross-Cultural Media, Lokalisierung & Produktion',description:'NATIVE unterstützt Creator und Marken beim Eintritt in neue Märkte – mit Strategie, Lokalisierung, Produktion, Plattformmanagement und Partnerschaften.'},zh:{title:'NATIVE — 跨文化媒体、本地化与内容制作',description:'NATIVE 帮助品牌与创作者通过策略、本地化、内容制作、平台运营与合作进入新的市场。'}}[locale];return {...values,alternates:{canonical:`/${locale}`,languages:{de:'/de',en:'/en','zh-CN':'/zh','x-default':'/en'}},openGraph:{...values,locale:locale==='de'?'de_DE':locale==='zh'?'zh_CN':'en_US',alternateLocale:locale==='de'?['en_US','zh_CN']:locale==='zh'?['en_US','de_DE']:['de_DE','zh_CN']}}}

export default async function Home({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  const c=homeCopy[locale];

  return <main className="home-page" lang={locale}>
    <section className="home-hero shell">
      <div className="hero-brand" aria-label="NATIVE">NATIVE</div>
      <div className="hero-composition"><div className="hero-index">N° 01<br/>Cross-cultural studio</div><div className="hero-copy">
        <div className="eyebrow">{c.label}</div><h1>{c.claim}</h1><p>{c.intro}</p>
        <div className="actions"><Link className="button primary" href={`/${locale}/creators`}>{c.creatorCta}</Link><Link className="button" href={`/${locale}/brands`}>{c.brandCta}</Link></div>
      </div></div>
      <div className="hero-foot"><span>{c.marketNote}</span><span aria-hidden="true">↓</span></div>
    </section>

    <section className="why-section home-section shell reveal">
      <div className="section-number">01</div><div className="section-kicker">{c.why.label}</div>
      <div className="why-copy"><h2>{c.why.title}</h2><p>{c.why.body}</p></div>
      <div className="why-details">{c.why.details.map((item,i)=><div key={item}><span>0{i+1}</span>{item}</div>)}</div>
    </section>

    <section className="audience-section home-section shell reveal">
      <div className="section-intro"><span className="section-number">02</span><span className="section-kicker">{c.audiences.label}</span></div>
      <div className="audience-panels">{[{...c.audiences.creator,href:`/${locale}/creators`},{...c.audiences.brand,href:`/${locale}/brands`}].map((panel,i)=><article className={`audience-panel audience-panel-${i+1}`} key={panel.kicker}>
        <div className="panel-top"><span>{panel.kicker}</span><span>0{i+1}</span></div><h2>{panel.title}</h2><p>{panel.body}</p>
        <ul>{panel.items.map(item=><li key={item}>{item}</li>)}</ul><Link className="text-link" href={panel.href}>{panel.cta}<span aria-hidden="true">↗</span></Link>
      </article>)}</div>
    </section>

    <section className="services-editorial home-section reveal">
      <div className="shell services-heading"><div><span className="section-number">03</span><span className="section-kicker">{c.services.label}</span></div><div><h2>{c.services.title}</h2><p>{c.services.intro}</p></div></div>
      <div className="service-list">{c.services.items.map(([title,body],i)=><div className="service-row shell" key={title}><span className="service-num">0{i+1}</span><h3>{title}</h3><p>{body}</p><span className="service-arrow" aria-hidden="true">↗</span></div>)}</div>
    </section>

    <section className="markets-section home-section shell reveal">
      <div className="markets-title"><span className="section-number">04</span><div><span className="section-kicker">{c.markets.label}</span><h2>{c.markets.title}</h2></div></div>
      <div className="movement-track" aria-hidden="true"><span>EUROPE</span><i>↔</i><span>CHINA</span></div>
      <div className="market-directions">{[c.markets.europeChina,c.markets.chinaEurope].map((market,i)=><article key={market.direction}><div className="direction-line"><span>{market.direction}</span><span aria-hidden="true">{i===0?'→':'←'}</span></div><h3>{market.title}</h3><p>{market.body}</p></article>)}</div>
      <p className="expansion-note">{c.markets.expansion}</p>
    </section>

    <section className="work-section home-section shell reveal">
      <div className="work-heading"><div><span className="section-number">05</span><span className="section-kicker">{c.work.label}</span></div><div><h2>{c.work.title}</h2><p>{c.work.body}</p></div></div>
      <div className="work-grid">{c.work.placeholders.map((item,i)=><div className={`work-placeholder work-${i+1}`} key={item}><div className="work-frame"><span>NATIVE / 0{i+1}</span><strong>{c.work.status}</strong><span>16:9</span></div><div className="work-caption"><span>{item}</span><span>{c.work.status}</span></div><div className="case-schema">{c.work.schema.map(field=><span key={field}>{field}</span>)}</div></div>)}</div>
    </section>

    <section className="about-preview home-section shell reveal">
      <div><span className="section-number">06</span><span className="section-kicker">{c.about.label}</span></div>
      <div className="about-main"><h2>{c.about.title}</h2><p>{c.about.intro}</p><div className="people">{c.about.people.map((person,i)=><div key={person.name}><span>0{i+1}</span><h3>{person.name}</h3><p>{person.focus}</p></div>)}</div></div>
    </section>

    <section className="final-cta home-section shell reveal"><span className="eyebrow">{c.final.eyebrow}</span><h2>{c.final.title}</h2><Link className="final-link" href={`/${locale}/contact`}>{c.final.cta}<span aria-hidden="true">↗</span></Link></section>
  </main>;
}
