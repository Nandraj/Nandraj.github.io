'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "46429f4a405e87e53887d2afebb5523a",
"icons/Icon-192.png": "467d70673d1e355d5aebe84dadff8712",
"icons/Icon-512.png": "467d70673d1e355d5aebe84dadff8712",
"index.html": "1a30affa3930f1b14e248b3f1ce4a8d5",
"/": "1a30affa3930f1b14e248b3f1ce4a8d5",
"main.dart.js": "7c46156a03b9e74fb612a463abd8042d",
"manifest.json": "62dafac0906afef71de129fbd86b2973"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
