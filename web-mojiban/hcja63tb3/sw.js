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

//'use strict';
const prefix = 'web-mojiban';
const CACHE_NAME = prefix + '16';

var path = 'https://toyama-rt.github.io/web-mojiban/hcja63tb3';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll([
        `/`,
        path + `/hcj.html`,
        path + `/style.css`,
        path + `/test.js`,
        path + `/img/000.png`,
        path + `/img/00.png`,
        path + `/img/1.png`,
        path + `/img/6.png`,
        path + `/img/a.png`,
        path + `/img/ka.png`,
        path + `/img/sa.png`,
        path + `/img/ta.png`,
        path + `/img/na.png`,
        path + `/img/ha.png`,
        path + `/img/ma.png`,
        path + `/img/ya.png`,
        path + `/img/ra.png`,
        path + `/img/wa.png`,
        path + `/snd/space.mp3`,
        path + `/snd/1.mp3`,
        path + `/snd/6.mp3`,
        path + `/snd/a.mp3`,
        path + `/snd/ka.mp3`,
        path + `/snd/sa.mp3`,
        path + `/snd/ta.mp3`,
        path + `/snd/na.mp3`,
        path + `/snd/ha.mp3`,
        path + `/snd/ma.mp3`,
        path + `/snd/ya.mp3`,
        path + `/snd/ra.mp3`,
        path + `/snd/wa.mp3`,
      ])
      .then(() => self.skipWaiting());
    })
  )
});

//self.addEventListener('activate',  event => {
//  event.waitUntil(self.clients.claim());
//});

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
