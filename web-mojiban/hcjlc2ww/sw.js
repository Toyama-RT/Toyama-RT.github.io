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
const prefix = 'hcjlc2ww';
const CACHE_NAME = prefix + '01';

var path = 'https://toyama-rt.github.io/web-mojiban/hcjlc2ww';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll([
        `/`,
        path + `/hcj.html`,
        path + `/style.css`,
        path + `/test.js`,
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
        path + `/img/hai.png`,
        path + `/img/ten.png`,
        path + `/img/zenbukesu.png`,
        path + `/img/katakana.png`,
        path + `/img/hiragana.png`,
        path + `/img2/aisatu.png`,
        path + `/img2/karada.png`,
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

        path + `/img/kta.png`,
        path + `/img/kti.png`,
        path + `/img/ktu.png`,
        path + `/img/kte.png`,
        path + `/img/kto.png`,
        path + `/img/ktka.png`,
        path + `/img/ktki.png`,
        path + `/img/ktku.png`,
        path + `/img/ktke.png`,
        path + `/img/ktko.png`,
        path + `/img/ktsa.png`,
        path + `/img/ktsi.png`,
        path + `/img/ktsu.png`,
        path + `/img/ktse.png`,
        path + `/img/ktso.png`,
        path + `/img/ktta.png`,
        path + `/img/ktti.png`,
        path + `/img/kttu.png`,
        path + `/img/ktte.png`,
        path + `/img/ktto.png`,
        path + `/img/ktna.png`,
        path + `/img/ktni.png`,
        path + `/img/ktnu.png`,
        path + `/img/ktne.png`,
        path + `/img/ktno.png`,
        path + `/img/ktha.png`,
        path + `/img/kthi.png`,
        path + `/img/kthu.png`,
        path + `/img/kthe.png`,
        path + `/img/ktho.png`,
        path + `/img/ktma.png`,
        path + `/img/ktmi.png`,
        path + `/img/ktmu.png`,
        path + `/img/ktme.png`,
        path + `/img/ktmo.png`,
        path + `/img/ktya.png`,
        path + `/img/ktyu.png`,
        path + `/img/ktyo.png`,
        path + `/img/ktyo.png`,
        path + `/img/ktra.png`,
        path + `/img/ktri.png`,
        path + `/img/ktru.png`,
        path + `/img/ktre.png`,
        path + `/img/ktro.png`,
        path + `/img/ktwa.png`,
        path + `/img/ktwo.png`,
        path + `/img/ktnn.png`,

        path + `/img2/hai.png`,
        path + `/img2/arigatou.png`,
        path + `/img2/konnichiha.png`,
        path + `/img2/tanosii.png`,
        path + `/img2/ohayou.png`,
        path + `/img2/iie.png`,
        path + `/img2/onegaisimasu2.png`,
        path + `/img2/sayounara.png`,
        path + `/img2/uresii.png`,
        path + `/img2/oyasumi.png`,

        path + `/img2/dochirademoii.png`,
        path + `/img2/mouiidesu.png`,
        path + `/img2/hajimemasite.png`,
        path + `/img2/sabisii.png`,
        path + `/img2/yorosiku.png`,
        path + `/img2/dochirademonai.png`,
        path + `/img2/gomennasai.png`,
        path + `/img2/atuidesu.png`,
        path + `/img2/kanasii.png`,
        path + `/img2/nemutai.png`,

        path + `/img2/mouichido2.png`,
        path + `/img2/sukosimatte.png`,
        path + `/img2/samuidesu.png`,
        path + `/img2/kuyasii.png`,
        path + `/img2/okiteimasu.png`,
        path + `/img2/machigaemasita2.png`,
        path + `/img2/sukidesu.png`,
        path + `/img2/gennkidesu.png`,
        path + `/img2/youkoso.png`,
        path + `/img2/maamaa.png`,

        path + `/img2/wakarimasita.png`,
        path + `/img2/kiraidesu.png`,
        path + `/img2/tukareta.png`,
        path + `/img2/matakitene.png`,
        path + `/img2/dekakeru.png`,
        path + `/img2/wakarimasen.png`,
        path + `/img2/sitteru.png`,
        path + `/img2/watasi.png`,
        path + `/img2/eeto.png`,
        path + `/img2/ahaha.png`,

        path + `/img2/douitasimasite.png`,
        path + `/img2/siranai.png`,
        path + `/img2/anata.png`,
        path + `/img2/saa.png`,
        path + `/img2/unnunn.png`,
        path + `/img2/chigaimasu.png`,
        path + `/img2/yokatta.png`,
        path + `/img2/minnna.png`,
        path + `/img2/question.png`,
        path + `/img2/exclamation.png`,

        path + `/img2/atama.png`,
        path + `/img2/mimi.png`,
        path + `/img2/te.png`,
        path + `/img2/hiji.png`,
        path + `/img2/kao.png`,
        path + `/img2/mayu.png`,
        path + `/img2/ashi.png`,
        path + `/img2/hiza.png`,


        path + `/img2/me.png`,
        path + `/img2/hoppe.png`,
        path + `/img2/yubi.png`,
        path + `/img2/hara.png`,
        path + `/img2/kuchi.png`,
        path + `/img2/kubi.png`,
        path + `/img2/mune.png`,
        path + `/img2/senaka.png`,

        path + `/img2/hana.png`,
        path + `/img2/kata.png`,
        path + `/img2/koshi.png`,
        path + `/img2/osiri.png`,
        path + `/img2/hidari.png`,
        path + `/img2/ue.png`,
        path + `/img2/taihen.png`,
        path + `/img2/ga.png`,

        path + `/img2/kurusii.png`,
        path + `/img2/migi.png`,
        path + `/img2/naka.png`,
        path + `/img2/futuu.png`,
        path + `/img2/ni.png`,
        path + `/img2/itai.png`,
        path + `/img2/mae.png`,
        path + `/img2/sita.png`,
        path + `/img2/sukosi.png`,
        path + `/img2/wo.png`,

        path + `/img2/kayui.png`,
        path + `/img2/usiro.png`,
        path + `/img2/tukeru.png`,
        path + `/img2/tudukeru.png`,
        path + `/img2/hawa.png`,
        path + `/img2/nodokawaku.png`,
        path + `/img2/hantai.png`,
        path + `/img2/toru.png`,
        path + `/img2/yameru.png`,
        path + `/img2/de.png`,

        path + `/snd/incorrect2.mp3`,
        path + `/snd/se2.mp3`,
        path + `/snd/se3.mp3`,

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
