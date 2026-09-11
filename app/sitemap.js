import { destinations } from "@/lib/destinations";
const base="https://travelogue-ashy.vercel.app";
export default function sitemap(){const now=new Date();return [{url:base,lastModified:now},{url:`${base}/destinations`,lastModified:now},{url:`${base}/feeds`,lastModified:now},{url:`${base}/packages`,lastModified:now},{url:`${base}/about`,lastModified:now},{url:`${base}/privacy`,lastModified:now},{url:`${base}/terms`,lastModified:now},...destinations.map(d=>({url:`${base}/destinations/${d.slug}`,lastModified:now}))]}
