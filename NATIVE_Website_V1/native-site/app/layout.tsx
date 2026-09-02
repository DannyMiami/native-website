import './globals.css';
import type {Metadata,Viewport} from 'next';
const configuredUrl=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';
export const metadata:Metadata={metadataBase:new URL(configuredUrl),title:{default:'NATIVE — Cross-Cultural Media, Localization & Production',template:'%s'},description:'NATIVE helps creators and brands enter new markets through strategy, localization, production, platform management and partnerships.',applicationName:'NATIVE',openGraph:{type:'website',siteName:'NATIVE',title:'NATIVE — Cross-Cultural Media, Localization & Production',description:'Make your brand feel local.',images:[{url:'/opengraph-image',width:1200,height:630,alt:'NATIVE — Make your brand feel local.'}]},twitter:{card:'summary_large_image',title:'NATIVE — Cross-Cultural Media, Localization & Production',description:'Make your brand feel local.',images:['/opengraph-image']},icons:{icon:'/icon.svg',apple:'/apple-icon.svg'},manifest:'/manifest.webmanifest'};
export const viewport:Viewport={themeColor:'#f4f1eb',colorScheme:'light'};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
