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
const CACHE_NAME = prefix + '17';

var path = 'https://toyama-rt.github.io/web-mojiban/hcja63tb4';

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
        path + `/img/hai.png`,
        path + `/img/iie.png`,
        path + `/img/1.png`,
        path + `/img/2.png`,
        path + `/img/3.png`,
        path + `/img/6.png`,
        path + `/img/7.png`,
        path + `/img/8.png`,
        path + `/img/a.png`,
        path + `/img/i.png`,
        path + `/img/u.png`,
        path + `/img/ka.png`,
        path + `/img/ki.png`,
        path + `/img/ku.png`,
        path + `/img/sa.png`,
        path + `/img/si.png`,
        path + `/img/su.png`,
        path + `/img/ta.png`,
        path + `/img/ti.png`,
        path + `/img/tu.png`,
        path + `/img/na.png`,
        path + `/img/ni.png`,
        path + `/img/nu.png`,
        path + `/img/ha.png`,
        path + `/img/hi.png`,
        path + `/img/hu.png`,
        path + `/img/ma.png`,
        path + `/img/mi.png`,
        path + `/img/mu.png`,
        path + `/img/ya.png`,
        path + `/img/yu.png`,
        path + `/img/yo.png`,
        path + `/img/ra.png`,
        path + `/img/ri.png`,
        path + `/img/ru.png`,
        path + `/img/wa.png`,
        path + `/img/wo.png`,
        path + `/img/nn.png`,
        path + `/snd/hai.mp3`,
        path + `/snd/space.mp3`,
        path + `/snd/iie.mp3`,
        path + `/snd/1.mp3`,
        path + `/snd/2.mp3`,
        path + `/snd/3.mp3`,
        path + `/snd/6.mp3`,
        path + `/snd/7.mp3`,
        path + `/snd/8.mp3`,
        path + `/snd/a.mp3`,
        path + `/snd/i.mp3`,
        path + `/snd/u.mp3`,
        path + `/snd/ka.mp3`,
        path + `/snd/ki.mp3`,
        path + `/snd/ku.mp3`,
        path + `/snd/sa.mp3`,
        path + `/snd/si.mp3`,
        path + `/snd/su.mp3`,
        path + `/snd/ta.mp3`,
        path + `/snd/ti.mp3`,
        path + `/snd/tu.mp3`,
        path + `/snd/na.mp3`,
        path + `/snd/ni.mp3`,
        path + `/snd/nu.mp3`,
        path + `/snd/ha.mp3`,
        path + `/snd/hi.mp3`,
        path + `/snd/hu.mp3`,
        path + `/snd/ma.mp3`,
        path + `/snd/mi.mp3`,
        path + `/snd/mu.mp3`,
        path + `/snd/ya.mp3`,
        path + `/snd/yu.mp3`,
        path + `/snd/yo.mp3`,
        path + `/snd/ra.mp3`,
        path + `/snd/ri.mp3`,
        path + `/snd/ru.mp3`,
        path + `/snd/wa.mp3`,
        path + `/snd/wo.mp3`,
        path + `/snd/nn.mp3`,
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
