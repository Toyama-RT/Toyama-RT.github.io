/*
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

//'use strict';
const prefix = 't10m2';
const CACHE_NAME = prefix + '00';

var path = 'https://toyama-rt.github.io/web-toy/t10m2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll([
        `/`,
        path + `/guruguru2m.html`,
        path + `/js/sketch.js`,
        path + `/js/utility.js`,
        path + `/manifest.json`,
        path + `/libs/box2dweb/Box2d.min.js`,
        path + `/arrow100.png`,
        path + `/arrow150.png`,
        path + `/arrow200.png`,
        path + `/arrow250.png`,
        path + `/arrow512.png`,

        path + `/d1100.png`,
        path + `/d1150.png`,
        path + `/d1200.png`,
        path + `/d1250.png`,
        path + `/d1512.png`,

        path + `/d2100.png`,
        path + `/d2150.png`,
        path + `/d2200.png`,
        path + `/d2250.png`,
        path + `/d2512.png`,

        path + `/d3100.png`,
        path + `/d3150.png`,
        path + `/d3200.png`,
        path + `/d3250.png`,
        path + `/d3512.png`,

        path + `/d4100.png`,
        path + `/d4150.png`,
        path + `/d4200.png`,
        path + `/d4250.png`,
        path + `/d4512.png`,

        path + `/d5100.png`,
        path + `/d5150.png`,
        path + `/d5200.png`,
        path + `/d5250.png`,
        path + `/d5512.png`,

        path + `/d6100.png`,
        path + `/d6150.png`,
        path + `/d6200.png`,
        path + `/d6250.png`,
        path + `/d6512.png`,

        path + `/touchtostart.png`,
        path + `/ico/naruto2.png`,

      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
  var cacheKeeplist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheKeeplist.indexOf(key) === -1 && key.indexOf(prefix) === 0) {
         // ホワイトリストにないキャッシュで同じ接頭語がついているキャッシュを削除する
          return caches.delete(key);
           console.log('Deleting out of date cache:', key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', event => {

  console.log(event.request.url, `fetch net first`);
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);

//  console.log(event.request.url, `fetch cache first`);
//  event.respondWith(
//    caches.match(event.request, {ignoreSearch:true}).then(response => {
//      return response || fetch(event.request);
    })
  );
});
