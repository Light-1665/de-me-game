import fs from 'node:fs/promises';
import {parsePC,parseVN,interleave} from './news-parser.mjs';
const path=new URL('../public/news.json',import.meta.url);
const previous=JSON.parse(await fs.readFile(path,'utf8'));
async function read(url,parse){const r=await fetch(url,{signal:AbortSignal.timeout(15000),headers:{'User-Agent':'DeMeGame-News/1.0','Accept':'application/xml,text/html'}});if(!r.ok)throw Error('Source HTTP '+r.status);const items=parse(await r.text());if(!items.length)throw Error('Source returned no valid articles');return items}
const results=await Promise.allSettled([read('https://lag.com.vn/',parseVN),read('https://www.pcgamer.com/rss/',parsePC)]);
const liveSources=results.filter(r=>r.status==='fulfilled').length;
const [vn,pc]=results.map((r,i)=>r.status==='fulfilled'?r.value:previous.items.filter(n=>n.region===(i===0?'Việt Nam':'Quốc tế')).map(n=>({...n,stale:true})));
const data={items:interleave(vn,pc),fetchedAt:liveSources?new Date().toISOString():previous.fetchedAt,liveSources};
await fs.writeFile(path,JSON.stringify(data,null,2)+'\n');
await fs.writeFile(new URL('../src/news-snapshot.json',import.meta.url),JSON.stringify(data,null,2)+'\n');
console.log(`News snapshot: ${liveSources}/2 live sources, ${data.items.length} articles.`);
for(const r of results)if(r.status==='rejected')console.warn('A news source failed; retained dated fallback:',r.reason.message);
