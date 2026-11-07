/** Demo build only: maps an API path (with its query) to a static file name, so
 *  GitHub Pages, which ignores query strings, can serve every filtered list. */
export function demoKey(path: string): string {
  const u = new URL(path, 'http://demo.invalid');
  const params = [...u.searchParams.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  const norm = u.pathname + (params.length ? `?${new URLSearchParams(params).toString()}` : '');
  let h1 = 0x811c9dc5;
  let h2 = 0x5bd1e995;
  for (let i = 0; i < norm.length; i++) {
    const c = norm.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = Math.imul(h2 ^ c, 0x5bd1e995) ^ (h2 >>> 13);
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}
