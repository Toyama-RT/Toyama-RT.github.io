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

// Version 0.6.2
//let version = '0.6.2';


var path = `/enchant/p-31mp3sw';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        `/`,
        path + `/index.html?timestamp=${timeStamp}`,
        path + `/js/lib/enchant.js?timestamp=${timeStamp}`,
        path + `/js/lib/plugins/nineleap.enchant.js?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/js/lib/plugins/ui.enchant.js?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/js/main.js?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/chara1.gif?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/se2.wav?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/jump.mp3?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/gameover.mp3?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/apad.png?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/end.png?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/font0.png?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/icon0.png?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/map2.gif?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/pad.png?timestamp=${timeStamp}`,
        `/enchant/p-31mp3sw/start.png?timestamp=${timeStamp}`,
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
