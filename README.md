# BCC411 site - static preview

A static preview of the new BCC411 church site, for review before launch:
https://gy2005.github.io/bcc411-demo/

It is the compiled front-end plus a frozen JSON snapshot of the site's content.
The real site runs a Node/Fastify + Postgres backend that is not deployed here.

What works: every public page, the 中文 / 双语 / EN toggle, sermon audio, videos,
photo albums, testimonies, articles, events, contact and offering pages.
Sermon audio, videos, flyers, and photos stream from bcc411.com, where they live today.

What does not work here (it needs the backend):
- The contact form does not send; it says so and gives the church's email.
- Log in, register, account, and admin do nothing.
- Content is a snapshot (2026-11-07) and will not change.

Pages carry `noindex`, so search engines leave this preview out.

## How it is built

From the private site repo at the commit being previewed:

1. Apply `_demo-build/client-demo.patch` and add `_demo-build/demoKey.ts` as
   `client/src/demoKey.ts`. GET requests then read `api/<hash>.json` (Pages ignores
   query strings), and writes fail with a "this is a preview" message.
2. `VITE_API_URL=/bcc411-demo npm run build -w client -- --base=/bcc411-demo/`
3. Run the API against a freshly migrated and seeded database on port 3099, then
   copy `_demo-build/demo-postbuild.ts` to `client/` and run `npx tsx demo-postbuild.ts`:
   it prefixes root-absolute paths with `/bcc411-demo`, snapshots the API into
   `dist/api/`, and adds `noindex` to every page.
4. Copy `client/dist/` here, keep `.nojekyll`, README, and `_demo-build/`, and push.
