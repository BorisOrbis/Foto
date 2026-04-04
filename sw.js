// FotoKalk Service Worker — auto-verzioniran
// CACHE_VERSION se zamjenjuje pri svakom GitHub Actions deploymentu

const CACHE_NAME = 'fotokalk-__BUILD_VERSION__';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

const OPTIONAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// ─── Install ─────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cache.addAll(ASSETS.filter(a => !a.startsWith('http')));
      for (const url of OPTIONAL_ASSETS) {
        try {
          const res = await fetch(url);
          if (res.ok) await cache.put(url, res);
        } catch (_) { /* nema interneta — preskočiti */ }
      }
    })
  );
  self.skipWaiting();
});

// ─── Activate ────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ─── Fetch ───────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  if (url.hostname.includes('google.com') || url.hostname.includes('waze.com')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const toCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
