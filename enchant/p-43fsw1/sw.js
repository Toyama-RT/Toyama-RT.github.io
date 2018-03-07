/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// Version 0.6.3
let version = '0.6.2';

//'use strict';
const prefix = 'p-43fsw1';
const CACHE_NAME = prefix + '02';

var path = `/enchant/p-43fsw1`;

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        `/`,
        path + `/index.html?timestamp=${timeStamp}`,
        path + `/js/lib/enchant.js?timestamp=${timeStamp}`,
        path + `/js/lib/plugins/nineleap.enchant.js?timestamp=${timeStamp}`,
        path + `/js/lib/plugins/ui.enchant.js?timestamp=${timeStamp}`,
        path + `/js/main.js?timestamp=${timeStamp}`,
        path + `/jump.mp3?timestamp=${timeStamp}`,
        path + `/gameover.mp3?timestamp=${timeStamp}`,
        path + `/apad.png?timestamp=${timeStamp}`,
        path + `/end.png?timestamp=${timeStamp}`,
        path + `/font0.png?timestamp=${timeStamp}`,
        path + `/icon0.png?timestamp=${timeStamp}`,
        path + `/pad.png?timestamp=${timeStamp}`,
        path + `/start.png?timestamp=${timeStamp}`,
        path + `/kotoba1.gif?timestamp=${timeStamp}`,
        path + `/kotoba1.mp3?timestamp=${timeStamp}`,
        path + `/kotoba2.gif?timestamp=${timeStamp}`,
        path + `/kotoba2.mp3?timestamp=${timeStamp}`,
        path + `/kotoba3.gif?timestamp=${timeStamp}`,
        path + `/kotoba3.mp3?timestamp=${timeStamp}`,
        path + `/kotoba4.gif?timestamp=${timeStamp}`,
        path + `/kotoba4.mp3?timestamp=${timeStamp}`,
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  //event.waitUntil(self.clients.claim());
    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // ホワイトリストにないキャッシュで同じ接頭語がついているキャッシュを削除する
                    if (cacheWhitelist.indexOf(cacheName) === -1 && cacheName.indexOf(prefix) === 0) {
                        return caches.delete(cacheName);
                        console.log('Deleting out of date cache:', cacheName);
                    }
                })
            );
        })
    );

});

self.addEventListener('fetch', event => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
