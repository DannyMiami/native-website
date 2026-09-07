import {headers} from 'next/headers';
import {redirect} from 'next/navigation';

type RootLocale = 'de' | 'en' | 'zh';

export function detectRootLocale(acceptLanguage: string): RootLocale {
  const languages = acceptLanguage
    .split(',')
    .map(value => value.split(';', 1)[0].trim().toLowerCase())
    .filter(Boolean);

  if (languages.some(language => /^de(?:-|$)/.test(language))) return 'de';

  if (
    languages.some(language =>
      /^zh(?:$|-hans(?:-|$)|-(?:cn|sg)(?:-|$))/.test(language),
    )
  ) {
    return 'zh';
  }

  return 'en';
}

export default async function Root() {
  const requestHeaders = await headers();
  redirect(`/${detectRootLocale(requestHeaders.get('accept-language') ?? '')}`);
}
