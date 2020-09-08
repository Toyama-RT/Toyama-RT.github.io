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
const prefix = 'hcjlc2wwc2t';
const CACHE_NAME = prefix + '04';

var path = 'https://toyama-rt.github.io/web-mojiban/hcjlc2wwc2t';

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
        path + `/img/aisatu.png`,
        path + `/img/onegai.png`,
        path + `/img/mononamae.png`,
        path + `/img/jibun.png`,
        path + `/img/iie.png`,
        path + `/img/maru.png`,
        path + `/img/kesu.png`,

        path + `/img2/arigatou.png`,
        path + `/img2/konnichiha.png`,
        path + `/img2/dochirademoii.png`,
        path + `/img2/ohayou.png`,
        path + `/img2/youkoso.png`,
        path + `/img2/onegaisimasu2.png`,
        path + `/img2/sayounara.png`,
        path + `/img2/dochirademonai.png`,
        path + `/img2/oyasumi.png`,
        path + `/img2/matakitene.png`,
        path + `/img2/mouiidesu.png`,
        path + `/img2/hajimemasite.png`,
        path + `/img2/mouichido2.png`,
        path + `/img2/konbanha.png`,
        path + `/img2/yokatta.png`,
        path + `/img2/gomennnasai.png`,
        path + `/img2/yorosiku.png`,
        path + `/img2/00.png`,
        path + `/img2/uresii.png`,
        path + `/img2/ittekimasu.png`,
        path + `/img2/okaerinasai.png`,
        path + `/img2/itadakimasu.png`,
        path + `/img2/oisiidesu.png`,
        path + `/img2/daijoubu.png`,
        path + `/img2/tadaima.png`,
        path + `/img2/itterassyai.png`,
        path + `/img2/gochisousama.png`,
        path + `/img2/aitai.png`,
        path + `/img2/sumimasenn.png`,
//        path + `/img2/00.png`,
        path + `/img2/gobusata.png`,
        path + `/img2/ohisasiburi.png`,
        path + `/img2/tennki.png`,
        path + `/img2/hare.png`,
        path + `/img2/kumori.png`,
        path + `/img2/ame.png`,
        path + `/img2/yuki.png`,
        path + `/img2/haru.png`,
        path + `/img2/natu.png`,
        path + `/img2/aki.png`,
        path + `/img2/fuyu.png`,
        path + `/img2/ansin.png`,
        path + `/img2/asa.png`,
        path + `/img2/hiru.png`,
        path + `/img2/yuu.png`,
        path + `/img2/yonaka.png`,
        path + `/img2/anzen.png`,
        path + `/img2/omoi.png`,
        path + `/img2/takai.png`,
        path + `/img2/tegoro.png`,
        path + `/img2/akarui.png`,
        path + `/img2/juubun.png`,
        path + `/img2/karui.png`,
        path + `/img2/hikui.png`,
        path + `/img2/yasui.png`,
        path + `/img2/kurai.png`,
        path + `/img2/tarinai.png`,

        path + `/img5/akete.png`,
        path + `/img5/toosite.png`,
        path + `/img5/sutete.png`,
        path + `/img5/juuden.png`,
        path + `/img5/dennchikoukan.png`,
        path + `/img5/simete.png`,
        path + `/img5/hirotte.png`,
        path + `/img5/irete.png`,
        path + `/img5/dasite.png`,
        path + `/img5/totte.png`,
        path + `/img5/hayakusite.png`,
        path + `/img5/tutaete.png`,
        path + `/img5/kaijo.png`,
        path + `/img5/issyonikite.png`,
        path + `/img5/tetudatte.png`,
        path + `/img5/hatte.png`,
        path + `/img5/denwa.png`,
        path + `/img5/naosite.png`,
        path + `/img5/syuuri.png`,
        path + `/img5/yamete.png`,
        path + `/img5/osiete.png`,
        path + `/img5/kaite.png`,
        path + `/img5/aizu.png`,
        path + `/img5/azukatte.png`,
        path + `/img5/moratte.png`,
        path + `/img5/renraku.png`,
        path + `/img5/toukan.png`,
        path + `/img5/tugouwokiite.png`,
        path + `/img5/hasande.png`,
        path + `/img5/usironikakete.png`,
        path + `/img5/siharai.png`,
        path + `/img5/tureteitte.png`,
        path + `/img5/tanonde.png`,
        path + `/img5/uketuke.png`,
        path + `/img5/kensinsan.png`,
        path + `/img5/dendou.png`,
        path + `/img5/syudou.png`,
        path + `/img5/jimusyo.png`,
        path + `/img5/kaimono.png`,
        path + `/img5/todokewodasite.png`,
        path + `/img5/reizouko.png`,
        path + `/img5/reitouko.png`,
        path + `/img5/keikoutou.png`,
        path + `/img5/sentaku.png`,
        path + `/img5/kikitai.png`,
        path + `/img5/mitai.png`,
        path + `/img5/yasumitai.png`,
        path + `/img5/hosii.png`,
        path + `/img5/site.png`,
        path + `/img5/kudasai.png`,
        path + `/img5/onegaisimasu.png`,
        path + `/img5/arigatou.png`,

        path + `/img6/koromogae.png`,
        path + `/img6/enryo.png`,
        path + `/img6/hansei.png`,
        path + `/img6/00.png`,
        path + `/img6/seikou.png`,
        path + `/img6/kunren.png`,
        path + `/img6/me-ru.png`,
        path + `/img6/yuujin.png`,
        path + `/img6/chijin.png`,
        path + `/img6/sippai.png`,
        path + `/img6/isousa-bisu.png`,
        path + `/img6/kasyoku.png`,
        path + `/img6/terebi.png`,
        path + `/img6/sutoresu.png`,
        path + `/img6/gaihaku.png`,
        path + `/img6/yasumi.png`,
        path + `/img6/koukai.png`,
        path + `/img6/ansin.png`,
        path + `/img6/nayami.png`,
        path + `/img6/ohanasi.png`,
        path + `/img6/nokosimasu.png`,
        path + `/img6/kataduke.png`,
        path + `/img6/soudan.png`,
        path + `/img6/sitaku.png`,
        path + `/img6/nakunatta.png`,
        path + `/img6/henji.png`,
        path + `/img6/souji.png`,
        path + `/img6/kitte.png`,
        path + `/img6/tukutte.png`,
        path + `/img6/tukatte.png`,
        path + `/img6/motte.png`,
        path + `/img6/kyoka.png`,
        path + `/img6/cyuumon.png`,
        path + `/img6/encyou.png`,
        path + `/img6/cyuui.png`,
        path + `/img6/guchi.png`,
        path + `/img6/dansa.png`,
        path + `/img6/ohasi.png`,
        path + `/img6/fo-ku.png`,
        path + `/img6/supu-nn.png`,
        path + `/img6/sutoro-.png`,
        path + `/img6/simasu.png`,
        path + `/img6/simasita.png`,
        path + `/img6/sitaidesu.png`,
        path + `/img6/site.png`,
        path + `/img6/kudasai.png`,
        path + `/img6/sagasiteimasu.png`,
        path + `/img6/arimasuka.png`,
        path + `/img6/onegaisimasu.png`,

        path + `/img7/atui.png`,
        path + `/img7/tanosii.png`,
        path + `/img7/dochirademoii.png`,
        path + `/img7/kurusii.png`,
        path + `/img7/genki.png`,
        path + `/img7/samui.png`,
        path + `/img7/uresii.png`,
        path + `/img7/dochirademonai.png`,
        path + `/img7/tukareta.png`,
        path + `/img7/cyousiii.png`,
        path + `/img7/suki.png`,
        path + `/img7/kanasii.png`,
        path + `/img7/sitteiru.png`,
        path + `/img7/nemui.png`,
        path + `/img7/kawarinasi.png`,
        path + `/img7/kirai.png`,
        path + `/img7/kuyasii.png`,
        path + `/img7/sirimasen.png`,
        path + `/img7/00.png`,
        path + `/img7/maamaa.png`,
        path + `/img7/wakarimasita.png`,
        path + `/img7/wakarimasen.png`,
        path + `/img7/korenisimasu.png`,
        path + `/img7/erabimasu.png`,
        path + `/img7/akiramemasu.png`,
        path + `/img7/ganbarimasu.png`,
        path + `/img7/kannsya.png`,

        path + `/snd/incorrect2.wav`,
        path + `/snd/se2.wav`,
        path + `/snd/se3.wav`,
        path + `/ico/siitake.png`,

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
