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
const prefix = 'p-52dsw';
const CACHE_NAME = prefix + '00';

var path = `/enchant/p-52dsw`;

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
        path + `/kotoba11.gif?timestamp=${timeStamp}`,
        path + `/kotoba11.mp3?timestamp=${timeStamp}`,
        path + `/kotoba12.gif?timestamp=${timeStamp}`,
        path + `/kotoba12.mp3?timestamp=${timeStamp}`,
        path + `/kotoba13.gif?timestamp=${timeStamp}`,
        path + `/kotoba13.mp3?timestamp=${timeStamp}`,
        path + `/kotoba14.gif?timestamp=${timeStamp}`,
        path + `/kotoba14.mp3?timestamp=${timeStamp}`,
        path + `/kotoba21.gif?timestamp=${timeStamp}`,
        path + `/kotoba21.mp3?timestamp=${timeStamp}`,
        path + `/kotoba22.gif?timestamp=${timeStamp}`,
        path + `/kotoba22.mp3?timestamp=${timeStamp}`,
        path + `/kotoba23.gif?timestamp=${timeStamp}`,
        path + `/kotoba23.mp3?timestamp=${timeStamp}`,
        path + `/kotoba24.gif?timestamp=${timeStamp}`,
        path + `/kotoba24.mp3?timestamp=${timeStamp}`,
        path + `/kotoba31.gif?timestamp=${timeStamp}`,
        path + `/kotoba31.mp3?timestamp=${timeStamp}`,
        path + `/kotoba32.gif?timestamp=${timeStamp}`,
        path + `/kotoba32.mp3?timestamp=${timeStamp}`,
        path + `/kotoba33.gif?timestamp=${timeStamp}`,
        path + `/kotoba33.mp3?timestamp=${timeStamp}`,
        path + `/kotoba34.gif?timestamp=${timeStamp}`,
        path + `/kotoba34.mp3?timestamp=${timeStamp}`,
        path + `/kotoba41.gif?timestamp=${timeStamp}`,
        path + `/kotoba41.mp3?timestamp=${timeStamp}`,
        path + `/kotoba42.gif?timestamp=${timeStamp}`,
        path + `/kotoba42.mp3?timestamp=${timeStamp}`,
        path + `/kotoba43.gif?timestamp=${timeStamp}`,
        path + `/kotoba43.mp3?timestamp=${timeStamp}`,
        path + `/kotoba44.gif?timestamp=${timeStamp}`,
        path + `/kotoba44.mp3?timestamp=${timeStamp}`,
        path + `/arrow1.gif?timestamp=${timeStamp}`,
        path + `/arrow2.gif?timestamp=${timeStamp}`,
        path + `/p1.gif?timestamp=${timeStamp}`,
        path + `/p2.gif?timestamp=${timeStamp}`,
        path + `/p3.gif?timestamp=${timeStamp}`,
        path + `/p4.gif?timestamp=${timeStamp}`,
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
