import type {Metadata} from 'next';import {notFound} from 'next/navigation';import {contactCopy} from '@/lib/contact';import {isLocale} from '@/lib/i18n';import {ContactForm} from '@/components/ContactForm';
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {locale}=await params;if(!isLocale(locale))return {};const {seo}=contactCopy[locale];return {title:seo.title,description:seo.description,alternates:{canonical:`/${locale}/contact`,languages:{de:'/de/contact',en:'/en/contact','zh-CN':'/zh/contact','x-default':'/en/contact'}}};}
function Mark({number,label}:{number:string;label:string}){return <div className="creator-mark"><span>{number}</span><span>{label}</span></div>}
export default async function ContactPage({params}:Props){const {locale}=await params;if(!isLocale(locale))notFound();const c=contactCopy[locale];return <main className="contact-page" lang={locale}>
<section className="contact-hero shell"><Mark number="01" label={c.hero.eyebrow}/><div className="contact-hero-grid"><h1>{c.hero.title}</h1><div>{c.hero.paras.map(x=><p key={x}>{x}</p>)}</div></div></section>
<ContactForm copy={c}/>
<section className="contact-next creator-section"><div className="shell"><Mark number="04" label="WHAT HAPPENS NEXT"/><div className="contact-next-heading"><h2>{c.nextSection.title}</h2><p>{c.nextSection.body}</p></div><p className="creator-list-lead">{c.nextSection.lead}</p><div className="contact-next-steps">{c.nextSection.items.map(x=><span key={x}>{x}</span>)}</div></div></section>
<section className="contact-other creator-section shell"><Mark number="05" label="OTHER WAYS TO WORK WITH NATIVE"/><h2>{c.other.title}</h2><div className="contact-other-grid">{c.other.items.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
<section className="contact-final creator-section"><div className="shell"><Mark number="06" label="CONTACT"/><div className="creator-final-grid"><h2>{c.final.title}</h2><p>{c.final.body}</p></div></div></section>
</main>}
