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
const prefix = 'web-mojiban4';
const CACHE_NAME = prefix + '00';

var path = 'https://toyama-rt.github.io/web-mojiban/hcjbm63t1';

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
        path + `/img/ten.png`,
        path + `/img/zenbukesu.png`,
        path + `/img/iie.png`,
        path + `/img/maru.png`,
        path + `/img/kesu.png`,
        path + `/img/1.png`,
        path + `/img/2.png`,
        path + `/img/3.png`,
        path + `/img/4.png`,
        path + `/img/5.png`,
        path + `/img/6.png`,
        path + `/img/7.png`,
        path + `/img/8.png`,
        path + `/img/9.png`,
        path + `/img/0.png`,
        path + `/img/a.png`,
        path + `/img/i.png`,
        path + `/img/u.png`,
        path + `/img/e.png`,
        path + `/img/o.png`,
        path + `/img/ka.png`,
        path + `/img/ki.png`,
        path + `/img/ku.png`,
        path + `/img/ke.png`,
        path + `/img/ko.png`,
        path + `/img/sa.png`,
        path + `/img/si.png`,
        path + `/img/su.png`,
        path + `/img/se.png`,
        path + `/img/so.png`,
        path + `/img/ta.png`,
        path + `/img/ti.png`,
        path + `/img/tu.png`,
        path + `/img/te.png`,
        path + `/img/to.png`,
        path + `/img/na.png`,
        path + `/img/ni.png`,
        path + `/img/nu.png`,
        path + `/img/ne.png`,
        path + `/img/no.png`,
        path + `/img/ha.png`,
        path + `/img/hi.png`,
        path + `/img/hu.png`,
        path + `/img/he.png`,
        path + `/img/ho.png`,
        path + `/img/ma.png`,
        path + `/img/mi.png`,
        path + `/img/mu.png`,
        path + `/img/me.png`,
        path + `/img/mo.png`,
        path + `/img/ya.png`,
        path + `/img/yu.png`,
        path + `/img/yo.png`,
        path + `/img/yo.png`,
        path + `/img/gb.png`,
        path + `/img/gc.png`,
        path + `/img/ra.png`,
        path + `/img/ri.png`,
        path + `/img/ru.png`,
        path + `/img/re.png`,
        path + `/img/ro.png`,
        path + `/img/wa.png`,
        path + `/img/wo.png`,
        path + `/img/nn.png`,
        path + `/img/bar.png`,
        path + `/snd/hai.mp3`,
        path + `/snd/ten.mp3`,
        path + `/snd/zenbukesu.mp3`,
        path + `/snd/space.mp3`,
        path + `/snd/iie.mp3`,
        path + `/snd/maru.mp3`,
        path + `/snd/kesu.mp3`,
        path + `/snd/1.mp3`,
        path + `/snd/2.mp3`,
        path + `/snd/3.mp3`,
        path + `/snd/4.mp3`,
        path + `/snd/5.mp3`,
        path + `/snd/6.mp3`,
        path + `/snd/7.mp3`,
        path + `/snd/8.mp3`,
        path + `/snd/9.mp3`,
        path + `/snd/0.mp3`,
        path + `/snd/a.mp3`,
        path + `/snd/i.mp3`,
        path + `/snd/u.mp3`,
        path + `/snd/e.mp3`,
        path + `/snd/o.mp3`,
        path + `/snd/ka.mp3`,
        path + `/snd/ki.mp3`,
        path + `/snd/ku.mp3`,
        path + `/snd/ke.mp3`,
        path + `/snd/ko.mp3`,
        path + `/snd/sa.mp3`,
        path + `/snd/si.mp3`,
        path + `/snd/su.mp3`,
        path + `/snd/se.mp3`,
        path + `/snd/so.mp3`,
        path + `/snd/ta.mp3`,
        path + `/snd/ti.mp3`,
        path + `/snd/tu.mp3`,
        path + `/snd/te.mp3`,
        path + `/snd/to.mp3`,
        path + `/snd/na.mp3`,
        path + `/snd/ni.mp3`,
        path + `/snd/nu.mp3`,
        path + `/snd/ne.mp3`,
        path + `/snd/no.mp3`,
        path + `/snd/ha.mp3`,
        path + `/snd/hi.mp3`,
        path + `/snd/hu.mp3`,
        path + `/snd/he.mp3`,
        path + `/snd/ho.mp3`,
        path + `/snd/ma.mp3`,
        path + `/snd/mi.mp3`,
        path + `/snd/mu.mp3`,
        path + `/snd/me.mp3`,
        path + `/snd/mo.mp3`,
        path + `/snd/ya.mp3`,
        path + `/snd/yu.mp3`,
        path + `/snd/yo.mp3`,
        path + `/snd/gb.mp3`,
        path + `/snd/gc.mp3`,
        path + `/snd/ra.mp3`,
        path + `/snd/ri.mp3`,
        path + `/snd/ru.mp3`,
        path + `/snd/re.mp3`,
        path + `/snd/ro.mp3`,
        path + `/snd/wa.mp3`,
        path + `/snd/wo.mp3`,
        path + `/snd/nn.mp3`,
        path + `/snd/nobasu.mp3`,
        path + `/snd/ga.mp3`,
        path + `/snd/gi.mp3`,
        path + `/snd/gu.mp3`,
        path + `/snd/ge.mp3`,
        path + `/snd/go.mp3`,
        path + `/snd/za.mp3`,
        path + `/snd/zi.mp3`,
        path + `/snd/zu.mp3`,
        path + `/snd/ze.mp3`,
        path + `/snd/zo.mp3`,
        path + `/snd/da.mp3`,
        path + `/snd/di.mp3`,
        path + `/snd/du.mp3`,
        path + `/snd/de.mp3`,
        path + `/snd/do.mp3`,
        path + `/snd/ba.mp3`,
        path + `/snd/bi.mp3`,
        path + `/snd/bu.mp3`,
        path + `/snd/be.mp3`,
        path + `/snd/bo.mp3`,
        path + `/snd/pa.mp3`,
        path + `/snd/pi.mp3`,
        path + `/snd/pu.mp3`,
        path + `/snd/pe.mp3`,
        path + `/snd/po.mp3`,
        path + `/snd/incorrect2.mp3`,

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
