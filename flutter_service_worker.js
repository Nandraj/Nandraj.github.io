'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "75a68d374f1de351835b2aa9806de1d4",
"assets/assets/images/NR.jpg": "11f084dc515bebb3976546c988fd58bf",
"assets/assets%255Cfonts%255COpen_Sans%255COpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets%255Cfonts%255COpen_Sans%255COpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/FontManifest.json": "bc7d29a2ac4870f3c7873eb114b9f413",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "96455c2092dbf61f915e5bc8a0c3baf5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "46429f4a405e87e53887d2afebb5523a",
"icons/Icon-192.png": "467d70673d1e355d5aebe84dadff8712",
"icons/Icon-512.png": "467d70673d1e355d5aebe84dadff8712",
"index.html": "a8c0307282ee5d5fbb9086d0f598928d",
"/": "a8c0307282ee5d5fbb9086d0f598928d",
"main.dart.js": "df7158f4942123d0914fcae198d614fe",
"manifest.json": "223512c2e6196936d54609f7c3d16f2f"
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
