// The portfolio is static HTML/CSS. Keep only the public delivery surface.
import {writeFile,readFile,readdir,stat,access,mkdir,rename,unlink} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist/client');
await access(path.join(root,'index.html'));
const files=[];
async function walk(dir){for(const file of await readdir(dir)){const p=path.join(dir,file);if((await stat(p)).isDirectory())await walk(p);else files.push(p)}}
await walk(root);
const routes=[];
for(const file of files){
 if(file.endsWith('.html')){
  let html=await readFile(file,'utf8');
  html=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<link\b[^>]*(?:rel="modulepreload"|as="script")[^>]*>/gi,'');
  html=html.replace('rel="canonical" href="https://gebran-kastoun.github.io"','rel="canonical" href="https://gebran-kastoun.github.io/"');
  await writeFile(file,html);
  const relative=path.relative(root,file).split(path.sep).join('/');
  if(relative==='404.html')continue;
  const route=relative==='index.html'?'/':'/'+relative.replace(/(?:\/index)?\.html$/,'')+'/';
  if(relative!=='index.html'&&!relative.endsWith('/index.html')){const dest=path.join(root,relative.replace(/\.html$/,''),'index.html');await mkdir(path.dirname(dest),{recursive:true});await rename(file,dest)}
  routes.push(route);
 }else if(/\.(?:js|rsc|map)$/.test(file)||file.endsWith('.json'))await unlink(file);
}
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.sort().map(r=>`<url><loc>https://gebran-kastoun.github.io${r}</loc></url>`).join('')+'</urlset>\n';
await writeFile(path.join(root,'sitemap.xml'),sitemap);
await writeFile(path.join(root,'.nojekyll'),'');
console.log(`Prepared ${routes.length} static routes for GitHub Pages; no client JavaScript.`);
