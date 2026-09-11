const base="https://travelogue-ashy.vercel.app";
export default function robots(){return {rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:`${base}/sitemap.xml`};}
