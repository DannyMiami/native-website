'use client';
import Link from 'next/link';import {usePathname} from 'next/navigation';import type {Locale} from '@/lib/i18n';
const text={en:{title:'Page not found.',body:'Let’s get you back somewhere useful.',back:'Back to home'},de:{title:'Seite nicht gefunden.',body:'Zurück zu einem sinnvollen Ausgangspunkt.',back:'Zur Startseite'},zh:{title:'页面不存在。',body:'返回一个更有用的起点。',back:'返回首页'}} as const;
export function NotFoundContent(){const pathname=usePathname();const match=pathname.match(/^\/(de|en|zh)(?:\/|$)/);const locale=(match?.[1]||'en') as Locale;const c=text[locale];return <div lang={locale}><span>404 / NATIVE</span><h1>{c.title}</h1><p>{c.body}</p><Link className="creator-button creator-button-light" href={`/${locale}`}>{c.back}<span>↗</span></Link></div>}
