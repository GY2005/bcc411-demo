// Demo build only (not in the main repo): run after `vite build --base=/bcc411-demo/`.
// 1) prefixes root-absolute asset paths and home links with the Pages base,
// 2) snapshots every API response the public pages request into dist/api/<key>.json,
// 3) marks every page noindex.
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { demoKey } from './src/demoKey';

const BASE = '/bcc411-demo';
const API = process.env.SNAPSHOT_API ?? 'http://localhost:3099';
const dist = join(import.meta.dirname, 'dist');

const ASSET = /(?<![\w./:\\-])\/(?=(?:brand|fonts|events|video-posters|uploads)\/|(?:favicon\.png|lang-init\.js)\b)/g;
const prefix = (s: string) =>
  s.replace(ASSET, `${BASE}/`).replace(/href=(\\?)"\/\1"/g, `href=$1"${BASE}/$1"`).replace(/href:"\/"/g, `href:"${BASE}/"`);

const walk = (d: string): string[] =>
  readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

let rewritten = 0;
for (const f of walk(dist).filter((f) => /\.(html|js|css)$/.test(f))) {
  const before = readFileSync(f, 'utf8');
  let after = prefix(before);
  if (f.endsWith('.html') && !after.includes('name="robots"')) {
    after = after.replace(/<meta charset="UTF-8" \/>|<meta charset="utf-8" \/>|<meta charset="UTF-8">/i, (m) => `${m}\n    <meta name="robots" content="noindex" />`);
    if (!after.includes('name="robots"')) throw new Error(`no charset meta in ${f}`);
  }
  if (after !== before) { writeFileSync(f, after); rewritten++; }
}

const get = async (path: string) => {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.text();
};
const paths: string[] = ['/api/auth/session', '/api/sermons', '/api/events', '/api/posts', '/api/videos', '/api/videos?featured=true', '/api/photos', '/api/locations'];
for (const c of ['sunday', 'retreat', 'teaching']) paths.push(`/api/sermons?category=${c}`);
for (const k of ['article', 'testimony']) paths.push(`/api/posts?kind=${k}`, `/api/posts?kind=${k}&summary=true`);
const posts = JSON.parse(await get('/api/posts')).items as { id: string }[];
for (const p of posts) paths.push(`/api/posts/${encodeURIComponent(p.id)}`);
const photos = JSON.parse(await get('/api/photos')).items as { album: string }[];
for (const a of new Set(photos.map((p) => p.album))) paths.push(`/api/photos?album=${encodeURIComponent(a)}`);

mkdirSync(join(dist, 'api'), { recursive: true });
const seen = new Map<string, string>();
for (const p of paths) {
  const key = demoKey(p);
  if (seen.has(key)) throw new Error(`key collision: ${p} vs ${seen.get(key)}`);
  seen.set(key, p);
  writeFileSync(join(dist, 'api', `${key}.json`), prefix(await get(p)));
}
writeFileSync(join(dist, 'api', 'index.txt'), [...seen].map(([k, p]) => `${k}  ${p}`).join('\n') + '\n');
console.log(`rewrote ${rewritten} files; wrote ${seen.size} API snapshots (${posts.length} posts)`);
