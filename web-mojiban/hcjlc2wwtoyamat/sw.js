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
const prefix = 'hcjlc2wwtoyamat';
const CACHE_NAME = prefix + '00';

var path = 'https://toyama-rt.github.io/web-mojiban/hcjlc2wwtoyamat';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll([
        `/`,
        path + `/hcj.html`,
        path + `/style.css`,
        path + `/test.js`,
        path + `/manifest2.json`,
        path + `/img/talk0.png`,
        path + `/img/000.png`,
        path + `/img/00.png`,
        path + `/img/bun01.png`,
        path + `/img/bun02.png`,
        path + `/img/bun03.png`,
        path + `/img/bun04.png`,
        path + `/img/bun05.png`,
        path + `/img/bun06.png`,
        path + `/img/bun07.png`,
        path + `/img/bun08.png`,
        path + `/img/bun09.png`,
        path + `/img/bun10.png`,
        path + `/img/bun11.png`,
        path + `/img/bun12.png`,
        path + `/img/bun13.png`,
        path + `/img/bun14.png`,
        path + `/img/bun15.png`,
        path + `/img/bun16.png`,
        path + `/img/bun17.png`,
        path + `/img/bun18.png`,
        path + `/img/bun19.png`,
        path + `/img/bun20.png`,
        path + `/img/hai.png`,
        path + `/img/ten.png`,
        path + `/img/zenbukesu.png`,
        path + `/img/hiragana.png`,
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

        path + `/imgt/aisonai.png`,
        path + `/imgt/ageccya.png`,
        path + `/imgt/iiga.png`,
        path + `/imgt/iicya.png`,
        path + `/imgt/ikusoru.png`,
        path + `/imgt/ikomaika.png`,
        path + `/imgt/ijikurasii.png`,
        path + `/imgt/usinakasita.png`,
        path + `/imgt/oodobasu.png`,
        path + `/imgt/otorosii.png`,
        path + `/imgt/ganbaccya.png`,
        path + `/imgt/kinodokuna.png`,
        path + `/imgt/kenaruicya.png`,
        path + `/imgt/korare.png`,
        path + `/imgt/kowakusa.png`,
        path + `/imgt/sittoruke.png`,
        path + `/imgt/jamanai.png`,
        path + `/imgt/syowasinai.png`,
        path + `/imgt/soiga.png`,
        path + `/imgt/sounaga.png`,
        path + `/imgt/sousennnya.png`,
        path + `/imgt/sousukke.png`,
        path + `/imgt/sonnnagaize.png`,
        path + `/imgt/daiteyaru.png`,
        path + `/imgt/tanomucya.png`,
        path + `/imgt/dayai.png`,
        path + `/imgt/dayakurasii.png`,
        path + `/imgt/dara.png`,
        path + `/imgt/dannkochinnko.png`,
        path + `/imgt/chigaucya.png`,
        path + `/imgt/tukaenn.png`,
        path + `/imgt/dekaito.png`,
        path + `/imgt/nanke.png`,
        path + `/imgt/nannnann.png`,
        path + `/imgt/naniiutonn.png`,
        path + `/imgt/nomannmaika.png`,
        path + `/imgt/hagayasi.png`,
        path + `/imgt/hasikaine.png`,
        path + `/imgt/haraui.png`,
        path + `/imgt/maidohaya.png`,
        path + `/imgt/monoi.png`,
        path + `/imgt/yawayawa.png`,
        path + `/imgt/yannbai.png`,
        path + `/imgt/waakattacya.png`,

        path + `/snd/incorrect2.wav`,
        path + `/snd/se2.wav`,
        path + `/snd/se3.wav`,

        path + `/ico/toyama.png`,

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
