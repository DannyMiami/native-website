import {notFound} from 'next/navigation';
import {Header,Footer} from '@/components/Site';
import {isLocale} from '@/lib/i18n';
export function generateStaticParams(){return [{locale:'de'},{locale:'en'},{locale:'zh'}]}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <><Header locale={locale}/>{children}<Footer locale={locale}/></>}
