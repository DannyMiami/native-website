import type {Locale} from './i18n';
export const publicPaths=['','creators','brands','services','cases','about','contact'] as const;
export const siteUrl=()=>process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,'')||'http://localhost:3000';
export const ogLocale:Record<Locale,string>={en:'en_US',de:'de_DE',zh:'zh_CN'};
