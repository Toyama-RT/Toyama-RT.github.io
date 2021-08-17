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
const prefix = 't07';
const CACHE_NAME = prefix + '00';

var path = 'https://toyama-rt.github.io/web-toy/t07';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll([
        `/`,
        path + `/balla1.html`,
        path + `/js/sketcha1.js`,
        path + `/js/utilitya1.js`,
        path + `/manifesta1.json`,
        path + `/libs/box2dweb/Box2d.min.js`,

        path + `/bat1.mp3`,
        path + `/water-drop1.mp3`,
        path + `/snare03.mp3`,
        path + `/drum03.mp3`,

        path + `/red.png`,
        path + `/blue.png`,
        path + `/yellow.png`,
        path + `/red3.png`,
        path + `/blue3.png`,
        path + `/yellow3.png`,
        path + `/redc.png`,
        path + `/bluec.png`,
        path + `/yellowc.png`,

        path + `/redc30.png`,
        path + `/redc35.png`,
        path + `/redc40.png`,
        path + `/redc45.png`,
        path + `/redc50.png`,
        path + `/redc55.png`,
        path + `/redc60.png`,
        path + `/redc70.png`,
        path + `/redc80.png`,
        path + `/redc100.png`,
        path + `/redc120.png`,
        path + `/redc150.png`,
        path + `/redc200.png`,
        path + `/bluec30.png`,
        path + `/bluec35.png`,
        path + `/bluec40.png`,
        path + `/bluec45.png`,
        path + `/bluec50.png`,
        path + `/bluec55.png`,
        path + `/bluec60.png`,
        path + `/bluec70.png`,
        path + `/bluec80.png`,
        path + `/bluec100.png`,
        path + `/bluec120.png`,
        path + `/bluec150.png`,
        path + `/bluec200.png`,
        path + `/yellowc30.png`,
        path + `/yellowc35.png`,
        path + `/yellowc40.png`,
        path + `/yellowc45.png`,
        path + `/yellowc50.png`,
        path + `/yellowc55.png`,
        path + `/yellowc60.png`,
        path + `/yellowc70.png`,
        path + `/yellowc80.png`,
        path + `/yellowc100.png`,
        path + `/yellowc120.png`,
        path + `/yellowc150.png`,
        path + `/yellowc200.png`,

        path + `/touchtostart.png`,

        path + `/ico/webball.png`,

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
