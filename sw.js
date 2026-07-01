const CACHE_NAME = 'sermons-pwa-v1.04';
const ASSETS = [
  '/Chris-Sermons/',
  '/Chris-Sermons/index.html',
  '/Chris-Sermons/manifest.json',
  'https://cdn.tailwindcss.com'
];

// Install Service Worker and cache core structural assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate worker and clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Simple network-first look strategy for content loading
self.addEventListener('fetch', (e) => {
  // Let Firebase URLs pass through directly via network standard streams
  if (e.request.url.includes('firebase')) {
    return;
  }
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
