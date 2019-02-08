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
const prefix = 'p-44fsw1';
const CACHE_NAME = prefix + '00';

var path = `/enchant/p-44fsw1`;
  let timeStamp = Date.now();

var urlsToCache = [
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
        path + `/img/a.png?timestamp=${timeStamp}`,
        path + `/img/i.png?timestamp=${timeStamp}`,
        path + `/img/u.png?timestamp=${timeStamp}`,
        path + `/img/e.png?timestamp=${timeStamp}`,
        path + `/img/o.png?timestamp=${timeStamp}`,
        path + `/img/ka.png?timestamp=${timeStamp}`,
        path + `/img/ki.png?timestamp=${timeStamp}`,
        path + `/img/ku.png?timestamp=${timeStamp}`,
        path + `/img/ke.png?timestamp=${timeStamp}`,
        path + `/img/ko.png?timestamp=${timeStamp}`,
/*        path + `/img/sa.png?timestamp=${timeStamp}`,
        path + `/img/si.png?timestamp=${timeStamp}`,
        path + `/img/su.png?timestamp=${timeStamp}`,
        path + `/img/se.png?timestamp=${timeStamp}`,
        path + `/img/so.png?timestamp=${timeStamp}`,
        path + `/img/ta.png?timestamp=${timeStamp}`,
        path + `/img/ti.png?timestamp=${timeStamp}`,
        path + `/img/tu.png?timestamp=${timeStamp}`,
        path + `/img/te.png?timestamp=${timeStamp}`,
        path + `/img/to.png?timestamp=${timeStamp}`,
        path + `/img/na.png?timestamp=${timeStamp}`,
        path + `/img/ni.png?timestamp=${timeStamp}`,
        path + `/img/nu.png?timestamp=${timeStamp}`,
        path + `/img/ne.png?timestamp=${timeStamp}`,
        path + `/img/no.png?timestamp=${timeStamp}`,
        path + `/img/ha.png?timestamp=${timeStamp}`,
        path + `/img/hi.png?timestamp=${timeStamp}`,
        path + `/img/hu.png?timestamp=${timeStamp}`,
        path + `/img/he.png?timestamp=${timeStamp}`,
        path + `/img/ho.png?timestamp=${timeStamp}`,
        path + `/img/ma.png?timestamp=${timeStamp}`,
        path + `/img/mi.png?timestamp=${timeStamp}`,
        path + `/img/mu.png?timestamp=${timeStamp}`,
        path + `/img/me.png?timestamp=${timeStamp}`,
        path + `/img/mo.png?timestamp=${timeStamp}`,
        path + `/img/ya.png?timestamp=${timeStamp}`,
        path + `/img/yu.png?timestamp=${timeStamp}`,
        path + `/img/yo.png?timestamp=${timeStamp}`,
        path + `/img/ra.png?timestamp=${timeStamp}`,
        path + `/img/ri.png?timestamp=${timeStamp}`,
        path + `/img/ru.png?timestamp=${timeStamp}`,
        path + `/img/re.png?timestamp=${timeStamp}`,
        path + `/img/ro.png?timestamp=${timeStamp}`,
        path + `/img/wa.png?timestamp=${timeStamp}`,
        path + `/img/woi.png?timestamp=${timeStamp}`,
        path + `/img/nn.png?timestamp=${timeStamp}`,
        path + `/img/zenbukesu.png?timestamp=${timeStamp}`,
        path + `/snd/a.mp3?timestamp=${timeStamp}`,
        path + `/snd/i.mp3?timestamp=${timeStamp}`,
        path + `/snd/u.mp3?timestamp=${timeStamp}`,
        path + `/snd/e.mp3?timestamp=${timeStamp}`,
        path + `/snd/o.mp3?timestamp=${timeStamp}`,
        path + `/snd/ka.mp3?timestamp=${timeStamp}`,
        path + `/snd/ki.mp3?timestamp=${timeStamp}`,
        path + `/snd/ku.mp3?timestamp=${timeStamp}`,
        path + `/snd/ke.mp3?timestamp=${timeStamp}`,
        path + `/snd/ko.mp3?timestamp=${timeStamp}`,
        path + `/snd/sa.mp3?timestamp=${timeStamp}`,
        path + `/snd/si.mp3?timestamp=${timeStamp}`,
        path + `/snd/su.mp3?timestamp=${timeStamp}`,
        path + `/snd/se.mp3?timestamp=${timeStamp}`,
        path + `/snd/so.mp3?timestamp=${timeStamp}`,
        path + `/snd/ta.mp3?timestamp=${timeStamp}`,
        path + `/snd/ti.mp3?timestamp=${timeStamp}`,
        path + `/snd/tu.mp3?timestamp=${timeStamp}`,
        path + `/snd/te.mp3?timestamp=${timeStamp}`,
        path + `/snd/to.mp3?timestamp=${timeStamp}`,
        path + `/snd/na.mp3?timestamp=${timeStamp}`,
        path + `/snd/ni.mp3?timestamp=${timeStamp}`,
        path + `/snd/nu.mp3?timestamp=${timeStamp}`,
        path + `/snd/ne.mp3?timestamp=${timeStamp}`,
        path + `/snd/no.mp3?timestamp=${timeStamp}`,
        path + `/snd/ha.mp3?timestamp=${timeStamp}`,
        path + `/snd/hi.mp3?timestamp=${timeStamp}`,
        path + `/snd/hu.mp3?timestamp=${timeStamp}`,
        path + `/snd/he.mp3?timestamp=${timeStamp}`,
        path + `/snd/ho.mp3?timestamp=${timeStamp}`,
        path + `/snd/ma.mp3?timestamp=${timeStamp}`,
        path + `/snd/mi.mp3?timestamp=${timeStamp}`,
        path + `/snd/mu.mp3?timestamp=${timeStamp}`,
        path + `/snd/me.mp3?timestamp=${timeStamp}`,
        path + `/snd/mo.mp3?timestamp=${timeStamp}`,
        path + `/snd/ya.mp3?timestamp=${timeStamp}`,
        path + `/snd/i.mp3?timestamp=${timeStamp}`,
        path + `/snd/yu.mp3?timestamp=${timeStamp}`,
        path + `/snd/e.mp3?timestamp=${timeStamp}`,
        path + `/snd/yo.mp3?timestamp=${timeStamp}`,
        path + `/snd/ra.mp3?timestamp=${timeStamp}`,
        path + `/snd/ri.mp3?timestamp=${timeStamp}`,
        path + `/snd/ru.mp3?timestamp=${timeStamp}`,
        path + `/snd/re.mp3?timestamp=${timeStamp}`,
        path + `/snd/ro.mp3?timestamp=${timeStamp}`,
        path + `/snd/wa.mp3?timestamp=${timeStamp}`,
        path + `/snd/wo.mp3?timestamp=${timeStamp}`,
        path + `/snd/nn.mp3?timestamp=${timeStamp}`,
        path + `/snd/zenbukesu.mp3?timestamp=${timeStamp}`,
        path + `/snd/gameover.mp3?timestamp=${timeStamp}`*/
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})))
      .then(() => self.skipWaiting());
      })
  );
});

/*
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
        path + `/img/a.png?timestamp=${timeStamp}`,
        path + `/img/i.png?timestamp=${timeStamp}`,
        path + `/img/u.png?timestamp=${timeStamp}`,
        path + `/img/e.png?timestamp=${timeStamp}`,
        path + `/img/o.png?timestamp=${timeStamp}`,
        path + `/img/ka.png?timestamp=${timeStamp}`,
        path + `/img/ki.png?timestamp=${timeStamp}`,
        path + `/img/ku.png?timestamp=${timeStamp}`,
        path + `/img/ke.png?timestamp=${timeStamp}`,
        path + `/img/ko.png?timestamp=${timeStamp}`,
        path + `/img/sa.png?timestamp=${timeStamp}`,
        path + `/img/si.png?timestamp=${timeStamp}`,
        path + `/img/su.png?timestamp=${timeStamp}`,
        path + `/img/se.png?timestamp=${timeStamp}`,
        path + `/img/so.png?timestamp=${timeStamp}`,
        path + `/img/ta.png?timestamp=${timeStamp}`,
        path + `/img/ti.png?timestamp=${timeStamp}`,
        path + `/img/tu.png?timestamp=${timeStamp}`,
        path + `/img/te.png?timestamp=${timeStamp}`,
        path + `/img/to.png?timestamp=${timeStamp}`,
        path + `/img/na.png?timestamp=${timeStamp}`,
        path + `/img/ni.png?timestamp=${timeStamp}`,
        path + `/img/nu.png?timestamp=${timeStamp}`,
        path + `/img/ne.png?timestamp=${timeStamp}`,
        path + `/img/no.png?timestamp=${timeStamp}`,
        path + `/img/ha.png?timestamp=${timeStamp}`,
        path + `/img/hi.png?timestamp=${timeStamp}`,
        path + `/img/hu.png?timestamp=${timeStamp}`,
        path + `/img/he.png?timestamp=${timeStamp}`,
        path + `/img/ho.png?timestamp=${timeStamp}`,
        path + `/img/ma.png?timestamp=${timeStamp}`,
        path + `/img/mi.png?timestamp=${timeStamp}`,
        path + `/img/mu.png?timestamp=${timeStamp}`,
        path + `/img/me.png?timestamp=${timeStamp}`,
        path + `/img/mo.png?timestamp=${timeStamp}`,
        path + `/img/ya.png?timestamp=${timeStamp}`,
        path + `/img/yu.png?timestamp=${timeStamp}`,
        path + `/img/yo.png?timestamp=${timeStamp}`,
        path + `/img/ra.png?timestamp=${timeStamp}`,
        path + `/img/ri.png?timestamp=${timeStamp}`,
        path + `/img/ru.png?timestamp=${timeStamp}`,
        path + `/img/re.png?timestamp=${timeStamp}`,
        path + `/img/ro.png?timestamp=${timeStamp}`,
        path + `/img/wa.png?timestamp=${timeStamp}`,
        path + `/img/woi.png?timestamp=${timeStamp}`,
        path + `/img/nn.png?timestamp=${timeStamp}`,
        path + `/img/zenbukesu.png?timestamp=${timeStamp}`,
        path + `/snd/a.mp3?timestamp=${timeStamp}`,
        path + `/snd/i.mp3?timestamp=${timeStamp}`,
        path + `/snd/u.mp3?timestamp=${timeStamp}`,
        path + `/snd/e.mp3?timestamp=${timeStamp}`,
        path + `/snd/o.mp3?timestamp=${timeStamp}`,
        path + `/snd/ka.mp3?timestamp=${timeStamp}`,
        path + `/snd/ki.mp3?timestamp=${timeStamp}`,
        path + `/snd/ku.mp3?timestamp=${timeStamp}`,
        path + `/snd/ke.mp3?timestamp=${timeStamp}`,
        path + `/snd/ko.mp3?timestamp=${timeStamp}`,
        path + `/snd/sa.mp3?timestamp=${timeStamp}`,
        path + `/snd/si.mp3?timestamp=${timeStamp}`,
        path + `/snd/su.mp3?timestamp=${timeStamp}`,
        path + `/snd/se.mp3?timestamp=${timeStamp}`,
        path + `/snd/so.mp3?timestamp=${timeStamp}`,
        path + `/snd/ta.mp3?timestamp=${timeStamp}`,
        path + `/snd/ti.mp3?timestamp=${timeStamp}`,
        path + `/snd/tu.mp3?timestamp=${timeStamp}`,
        path + `/snd/te.mp3?timestamp=${timeStamp}`,
        path + `/snd/to.mp3?timestamp=${timeStamp}`,
        path + `/snd/na.mp3?timestamp=${timeStamp}`,
        path + `/snd/ni.mp3?timestamp=${timeStamp}`,
        path + `/snd/nu.mp3?timestamp=${timeStamp}`,
        path + `/snd/ne.mp3?timestamp=${timeStamp}`,
        path + `/snd/no.mp3?timestamp=${timeStamp}`,
        path + `/snd/ha.mp3?timestamp=${timeStamp}`,
        path + `/snd/hi.mp3?timestamp=${timeStamp}`,
        path + `/snd/hu.mp3?timestamp=${timeStamp}`,
        path + `/snd/he.mp3?timestamp=${timeStamp}`,
        path + `/snd/ho.mp3?timestamp=${timeStamp}`,
        path + `/snd/ma.mp3?timestamp=${timeStamp}`,
        path + `/snd/mi.mp3?timestamp=${timeStamp}`,
        path + `/snd/mu.mp3?timestamp=${timeStamp}`,
        path + `/snd/me.mp3?timestamp=${timeStamp}`,
        path + `/snd/mo.mp3?timestamp=${timeStamp}`,
        path + `/snd/ya.mp3?timestamp=${timeStamp}`,
        path + `/snd/i.mp3?timestamp=${timeStamp}`,
        path + `/snd/yu.mp3?timestamp=${timeStamp}`,
        path + `/snd/e.mp3?timestamp=${timeStamp}`,
        path + `/snd/yo.mp3?timestamp=${timeStamp}`,
        path + `/snd/ra.mp3?timestamp=${timeStamp}`,
        path + `/snd/ri.mp3?timestamp=${timeStamp}`,
        path + `/snd/ru.mp3?timestamp=${timeStamp}`,
        path + `/snd/re.mp3?timestamp=${timeStamp}`,
        path + `/snd/ro.mp3?timestamp=${timeStamp}`,
        path + `/snd/wa.mp3?timestamp=${timeStamp}`,
        path + `/snd/wo.mp3?timestamp=${timeStamp}`,
        path + `/snd/nn.mp3?timestamp=${timeStamp}`,
        path + `/snd/zenbukesu.mp3?timestamp=${timeStamp}`,
        path + `/snd/gameover.mp3?timestamp=${timeStamp}`,
      ])
      .then(() => self.skipWaiting());
    })
  )
});
*/
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
