import type {MetadataRoute} from 'next';
export default function manifest():MetadataRoute.Manifest{return {name:'NATIVE',short_name:'NATIVE',description:'Cross-cultural media, localization and production.',start_url:'/en',display:'standalone',background_color:'#f4f1eb',theme_color:'#f4f1eb',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml'}]}}
