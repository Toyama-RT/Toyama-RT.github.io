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
const prefix = 'hcjlc2wwc3t';
const CACHE_NAME = prefix + '04';

var path = 'https://toyama-rt.github.io/web-mojiban/hcjlc2wwc3t';

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
        path + `/img/byouin.png`,
        path + `/img/tabemono.png`,
        path + `/img/basyo.png`,
        path + `/img/hitonamae.png`,
        path + `/img/iie.png`,
        path + `/img/maru.png`,
        path + `/img/kesu.png`,

        path + `/img8/inami.png`,
        path + `/img8/saizaki.png`,
        path + `/img8/takahara.png`,
        path + `/img8/kuroda.png`,
        path + `/img8/tanigawa.png`,
        path + `/img8/gotou.png`,
        path + `/img8/tabuse.png`,
        path + `/img8/yamamori.png`,
        path + `/img8/iwasaki.png`,
        path + `/img8/izumi.png`,
        path + `/img8/yamagata.png`,
        path + `/img8/magario.png`,
        path + `/img8/junnkosan.png`,
        path + `/img8/asano.png`,
        path + `/img8/oosima.png`,
        path + `/img8/minami.png`,
        path + `/img8/yonezawasan.png`,
        path + `/img8/hoyousan.png`,
        path + `/img8/masami.png`,
        path + `/img8/00.png`,
        path + `/img8/takata.png`,
        path + `/img8/kikura.png`,
        path + `/img8/oomura.png`,
        path + `/img8/kanngosisan.png`,
        path + `/img8/nomura.png`,
        path + `/img8/hasimotosennsei.png`,
        path + `/img8/asou.png`,

        path + `/img8/sinsatu.png`,
        path + `/img8/rihabiri.png`,
        path + `/img8/naika.png`,
        path + `/img8/sinri.png`,
        path + `/img8/kusuri.png`,
        path + `/img8/yoyaku.png`,
        path + `/img8/seikei.png`,
        path + `/img8/seisinka.png`,
        path + `/img8/cyuusya.png`,
        path + `/img8/fukusayou.png`,
        path + `/img8/dutuu.png`,
        path + `/img8/benpi.png`,
        path + `/img8/netu.png`,
        path + `/img8/hakike.png`,
        path + `/img8/kaze.png`,
        path + `/img8/haita.png`,
        path + `/img8/geri.png`,
        path + `/img8/kabureta.png`,
        path + `/img8/nodoitai.png`,
        path + `/img8/seki.png`,
        path + `/img8/sibire.png`,
        path + `/img8/tearai.png`,
        path + `/img8/ofuro.png`,
        path + `/img8/nechigae.png`,
        path + `/img8/furue.png`,
        path + `/img8/ugai.png`,
        path + `/img8/komaru.png`,
        path + `/img8/taion.png`,
        path + `/img8/taijuu.png`,
        path + `/img8/sinnsatukenn.png`,
        path + `/img8/hokennsyou.png`,
        path + `/img8/okusuritecyou.png`,
        path + `/img8/genki.png`,
        path + `/img8/cyousiii.png`,
        path + `/img8/kawarinasi.png`,
        path + `/img8/ganbarimasu.png`,
        path + `/img8/arigatou.png`,

        path + `/img9/kare-raisu.png`,
        path + `/img9/udon.png`,
        path + `/img9/omuraisu.png`,
        path + `/img9/hanba-ga-.png`,
        path + `/img9/cya-han.png`,
        path + `/img9/ra-men.png`,
        path + `/img9/soba.png`,
        path + `/img9/taiyaki.png`,
        path + `/img9/to-suto.png`,
        path + `/img9/gyo-za.png`,
        path + `/img9/yakisoba.png`,
        path + `/img9/okonomiyaki.png`,
        path + `/img9/onigiri.png`,
        path + `/img9/osusi.png`,
        path + `/img9/syu-mai.png`,
        path + `/img9/piza.png`,
        path + `/img9/gohan.png`,
        path + `/img9/pan.png`,
        path + `/img9/sandoicchi.png`,
        path + `/img9/00.png`,
        path + `/img9/okasi.png`,
        path + `/img9/omochi.png`,
        path + `/img9/dango.png`,
        path + `/img9/aisu.png`,
        path + `/img9/ringo.png`,
        path + `/img9/banana.png`,
        path + `/img9/kaki.png`,
        path + `/img9/nasi.png`,
        path + `/img9/suika.png`,
        path + `/img9/onegaisimau.png`,
        path + `/img9/arimasuka.png`,
        path + `/img9/hosiidesu.png`,
        path + `/img9/ikuradesuka.png`,
        path + `/img9/itadakimasu.png`,
        path + `/img9/gochisousama.png`,
        path + `/img9/karai.png`,
        path + `/img9/amai.png`,
        path + `/img9/oisii.png`,
        path + `/img9/kuufuku.png`,
        path + `/img9/manpuku.png`,
        path + `/img9/hazukasii.png`,
        path + `/img9/suki.png`,
        path + `/img9/desu.png`,

        path + `/img9/heya.png`,
        path + `/img9/syokudou.png`,
        path + `/img9/toire.png`,
        path + `/img9/senmenjo.png`,
        path + `/img9/ofuro.png`,
        path + `/img9/byouin.png`,
        path + `/img9/baiten.png`,
        path + `/img9/kyassyuko-na-.png`,
        path + `/img9/posuto.png`,
        path + `/img9/tokoya.png`,
        path + `/img9/gipususitu.png`,
        path + `/img9/dannwasitu.png`,
        path + `/img9/genkan.png`,
        path + `/img9/ibasyo.png`,
        path + `/img9/toyamaekimae.png`,
        path + `/img9/sougawa.png`,
        path + `/img9/siyakusyo.png`,
        path + `/img9/ginkou.png`,
        path + `/img9/simamura.png`,
        path + `/img9/arupuraza.png`,
        path + `/img9/fabo-re.png`,
        path + `/img9/apitahigasi.png`,
        path + `/img9/apia.png`,
        path + `/img9/au.png`,
        path + `/img9/cic.png`,
        path + `/img9/marie.png`,
        path + `/img9/mujirusi.png`,
        path + `/img9/matukiyo.png`,
        path + `/img9/honya.png`,
        path + `/img9/cdsyoppu.png`,
        path + `/img9/syugeiten.png`,
        path + `/img9/konbini.png`,
        path + `/img9/100kin.png`,
        path + `/img9/sanpo.png`,
        path + `/img9/kurumaisuok.png`,
        path + `/img9/chizu.png`,
        path + `/img9/ikitaidesu.png`,
        path + `/img9/ittekiumasu.png`,
        path + `/img9/ittekimasita.png`,
        path + `/img9/dokodesuka.png`,
        path + `/img9/basu.png`,
        path + `/img9/takusi-.png`,
        path + `/img9/siden.png`,
        path + `/img9/densya.png`,
        path + `/img9/norimasu.png`,
        path + `/img9/erebe-ta.png`,
        path + `/img9/encyou.png`,
        path + `/img9/nankai.png`,
        path + `/img9/orimasu.png`,

        path + `/snd/incorrect2.wav`,
        path + `/snd/se2.wav`,
        path + `/snd/se3.wav`,
        path + `/ico/takenoko.png`,


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
