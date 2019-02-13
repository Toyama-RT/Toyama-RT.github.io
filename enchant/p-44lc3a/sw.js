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

 Paul Kinlan さんの　ウェブアプリへの Service Worker とオフラインの追加 
https://developers.google.com/web/fundamentals/codelabs/offline/?hl=ja
を参考にしました。サンプルの　airhoner　sw.js　に記載されている上記のライセンス条項を記念に残すことにしました。
 */

//'use strict';
const prefix = 'p-44lc3';
const CACHE_NAME = prefix + '00';

var path = `/enchant/p-44lc3a`;

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
        path + `/img/wo.png?timestamp=${timeStamp}`,
        path + `/img/nn.png?timestamp=${timeStamp}`,

        path + `/img/kta.png?timestamp=${timeStamp}`,
        path + `/img/kti.png?timestamp=${timeStamp}`,
        path + `/img/ktu.png?timestamp=${timeStamp}`,
        path + `/img/kte.png?timestamp=${timeStamp}`,
        path + `/img/kto.png?timestamp=${timeStamp}`,
        path + `/img/ktka.png?timestamp=${timeStamp}`,
        path + `/img/ktki.png?timestamp=${timeStamp}`,
        path + `/img/ktku.png?timestamp=${timeStamp}`,
        path + `/img/ktke.png?timestamp=${timeStamp}`,
        path + `/img/ktko.png?timestamp=${timeStamp}`,
        path + `/img/ktsa.png?timestamp=${timeStamp}`,
        path + `/img/ktsi.png?timestamp=${timeStamp}`,
        path + `/img/ktsu.png?timestamp=${timeStamp}`,
        path + `/img/ktse.png?timestamp=${timeStamp}`,
        path + `/img/ktso.png?timestamp=${timeStamp}`,
        path + `/img/ktta.png?timestamp=${timeStamp}`,
        path + `/img/ktti.png?timestamp=${timeStamp}`,
        path + `/img/kttu.png?timestamp=${timeStamp}`,
        path + `/img/ktte.png?timestamp=${timeStamp}`,
        path + `/img/ktto.png?timestamp=${timeStamp}`,
        path + `/img/ktna.png?timestamp=${timeStamp}`,
        path + `/img/ktni.png?timestamp=${timeStamp}`,
        path + `/img/ktnu.png?timestamp=${timeStamp}`,
        path + `/img/ktne.png?timestamp=${timeStamp}`,
        path + `/img/ktno.png?timestamp=${timeStamp}`,
        path + `/img/ktha.png?timestamp=${timeStamp}`,
        path + `/img/kthi.png?timestamp=${timeStamp}`,
        path + `/img/kthu.png?timestamp=${timeStamp}`,
        path + `/img/kthe.png?timestamp=${timeStamp}`,
        path + `/img/ktho.png?timestamp=${timeStamp}`,
        path + `/img/ktma.png?timestamp=${timeStamp}`,
        path + `/img/ktmi.png?timestamp=${timeStamp}`,
        path + `/img/ktmu.png?timestamp=${timeStamp}`,
        path + `/img/ktme.png?timestamp=${timeStamp}`,
        path + `/img/ktmo.png?timestamp=${timeStamp}`,
        path + `/img/ktya.png?timestamp=${timeStamp}`,
        path + `/img/ktyu.png?timestamp=${timeStamp}`,
        path + `/img/ktyo.png?timestamp=${timeStamp}`,
        path + `/img/ktra.png?timestamp=${timeStamp}`,
        path + `/img/ktri.png?timestamp=${timeStamp}`,
        path + `/img/ktru.png?timestamp=${timeStamp}`,
        path + `/img/ktre.png?timestamp=${timeStamp}`,
        path + `/img/ktro.png?timestamp=${timeStamp}`,
        path + `/img/ktwa.png?timestamp=${timeStamp}`,
        path + `/img/ktwo.png?timestamp=${timeStamp}`,
        path + `/img/ktnn.png?timestamp=${timeStamp}`,

        path + `/img/hiragana.png?timestamp=${timeStamp}`,
        path + `/img/katakana.png?timestamp=${timeStamp}`,
        path + `/img/bun.png?timestamp=${timeStamp}`,
        path + `/img/gb.png?timestamp=${timeStamp}`,
        path + `/img/gc.png?timestamp=${timeStamp}`,
        path + `/img/bar.png?timestamp=${timeStamp}`,
        path + `/img/ten.png?timestamp=${timeStamp}`,
        path + `/img/maru.png?timestamp=${timeStamp}`,
        path + `/img/00.png?timestamp=${timeStamp}`,
        path + `/img/kesu.png?timestamp=${timeStamp}`,
        path + `/img/zenbukesu.png?timestamp=${timeStamp}`,
        path + `/img/hai.png?timestamp=${timeStamp}`,
        path + `/img/iie.png?timestamp=${timeStamp}`,
        path + `/img/0.png?timestamp=${timeStamp}`,
        path + `/img/1.png?timestamp=${timeStamp}`,
        path + `/img/2.png?timestamp=${timeStamp}`,
        path + `/img/3.png?timestamp=${timeStamp}`,
        path + `/img/4.png?timestamp=${timeStamp}`,
        path + `/img/5.png?timestamp=${timeStamp}`,
        path + `/img/6.png?timestamp=${timeStamp}`,
        path + `/img/7.png?timestamp=${timeStamp}`,
        path + `/img/8.png?timestamp=${timeStamp}`,
        path + `/img/9.png?timestamp=${timeStamp}`,
        path + `/img/talk0.png?timestamp=${timeStamp}`,
        path + `/snd/incorrect2.mp3?timestamp=${timeStamp}`,
        path + `/snd/se2.mp3?timestamp=${timeStamp}`,
        path + `/snd/se3.mp3?timestamp=${timeStamp}`,
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
        path + `/snd/yu.mp3?timestamp=${timeStamp}`,
        path + `/snd/yo.mp3?timestamp=${timeStamp}`,
        path + `/snd/ra.mp3?timestamp=${timeStamp}`,
        path + `/snd/ri.mp3?timestamp=${timeStamp}`,
        path + `/snd/ru.mp3?timestamp=${timeStamp}`,
        path + `/snd/re.mp3?timestamp=${timeStamp}`,
        path + `/snd/ro.mp3?timestamp=${timeStamp}`,
        path + `/snd/wa.mp3?timestamp=${timeStamp}`,
        path + `/snd/wo.mp3?timestamp=${timeStamp}`,
        path + `/snd/nn.mp3?timestamp=${timeStamp}`,
        path + `/snd/gb.mp3?timestamp=${timeStamp}`,
        path + `/snd/gc.mp3?timestamp=${timeStamp}`,
        path + `/snd/ga.mp3?timestamp=${timeStamp}`,
        path + `/snd/gi.mp3?timestamp=${timeStamp}`,
        path + `/snd/gu.mp3?timestamp=${timeStamp}`,
        path + `/snd/ge.mp3?timestamp=${timeStamp}`,
        path + `/snd/go.mp3?timestamp=${timeStamp}`,
        path + `/snd/za.mp3?timestamp=${timeStamp}`,
        path + `/snd/zi.mp3?timestamp=${timeStamp}`,
        path + `/snd/zu.mp3?timestamp=${timeStamp}`,
        path + `/snd/ze.mp3?timestamp=${timeStamp}`,
        path + `/snd/zo.mp3?timestamp=${timeStamp}`,
        path + `/snd/da.mp3?timestamp=${timeStamp}`,
        path + `/snd/di.mp3?timestamp=${timeStamp}`,
        path + `/snd/du.mp3?timestamp=${timeStamp}`,
        path + `/snd/de.mp3?timestamp=${timeStamp}`,
        path + `/snd/do.mp3?timestamp=${timeStamp}`,
        path + `/snd/ba.mp3?timestamp=${timeStamp}`,
        path + `/snd/bi.mp3?timestamp=${timeStamp}`,
        path + `/snd/bu.mp3?timestamp=${timeStamp}`,
        path + `/snd/be.mp3?timestamp=${timeStamp}`,
        path + `/snd/bo.mp3?timestamp=${timeStamp}`,
        path + `/snd/pa.mp3?timestamp=${timeStamp}`,
        path + `/snd/pi.mp3?timestamp=${timeStamp}`,
        path + `/snd/pu.mp3?timestamp=${timeStamp}`,
        path + `/snd/pe.mp3?timestamp=${timeStamp}`,
        path + `/snd/po.mp3?timestamp=${timeStamp}`,
        path + `/snd/nobasu.mp3?timestamp=${timeStamp}`,
        path + `/snd/ten.mp3?timestamp=${timeStamp}`,
        path + `/snd/maru.mp3?timestamp=${timeStamp}`,
        path + `/snd/space.mp3?timestamp=${timeStamp}`,
        path + `/snd/kesu.mp3?timestamp=${timeStamp}`,
        path + `/snd/zenbukesu.mp3?timestamp=${timeStamp}`,
        path + `/snd/hai.mp3?timestamp=${timeStamp}`,
        path + `/snd/iie.mp3?timestamp=${timeStamp}`,
        path + `/snd/0.mp3?timestamp=${timeStamp}`,
        path + `/snd/1.mp3?timestamp=${timeStamp}`,
        path + `/snd/2.mp3?timestamp=${timeStamp}`,
        path + `/snd/3.mp3?timestamp=${timeStamp}`,
        path + `/snd/4.mp3?timestamp=${timeStamp}`,
        path + `/snd/5.mp3?timestamp=${timeStamp}`,
        path + `/snd/6.mp3?timestamp=${timeStamp}`,
        path + `/snd/7.mp3?timestamp=${timeStamp}`,
        path + `/snd/8.mp3?timestamp=${timeStamp}`,
        path + `/snd/9.mp3?timestamp=${timeStamp}`,
        path + `/snd/gameover.mp3?timestamp=${timeStamp}`,
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
