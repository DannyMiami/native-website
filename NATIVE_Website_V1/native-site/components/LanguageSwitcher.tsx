'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import type {Locale} from '@/lib/i18n';

export function LanguageSwitcher({locale}:{locale:Locale}) {
  const pathname=usePathname();
  const href=(next:Locale)=>pathname.replace(/^\/(de|en|zh)(?=\/|$)/,`/${next}`);
  return <div className="langs" aria-label="Language">
    <Link className={locale==='de'?'lang active':'lang'} href={href('de')}>DE</Link>
    <Link className={locale==='en'?'lang active':'lang'} href={href('en')}>EN</Link>
    <Link className={locale==='zh'?'lang active':'lang'} href={href('zh')}>中文</Link>
  </div>;
}
