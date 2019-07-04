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

// Version 0.6.3
let version = '0.6.2';


var path = `/web-mojiban/hcja63tb`;

self.addEventListener('install', e => {
  //let timeStamp = Date.now();
  e.waitUntil(
    caches.open('web-mojiban05').then(cache => {
      return cache.addAll([
        `/`,
        path + `/hcj.html`,//?timestamp=${timeStamp}`,
        path + `/style.css`,//?timestamp=${timeStamp}`,
        path + `/test.js`,//?timestamp=${timeStamp}`,
        path + `/sw.js`,//?timestamp=${timeStamp}`,
        path + `/img/a.png`,//?timestamp=${timeStamp}`,
        path + `/img/ka.png`,//?timestamp=${timeStamp}`,
        path + `/img/sa.png`,//?timestamp=${timeStamp}`,
        path + `/img/ta.png`,//?timestamp=${timeStamp}`,
        path + `/img/na.png`,//?timestamp=${timeStamp}`,
        path + `/img/ha.png`,//?timestamp=${timeStamp}`,
        path + `/img/ma.png`,//?timestamp=${timeStamp}`,
        path + `/img/ya.png`,//?timestamp=${timeStamp}`,
        path + `/img/ra.png`,//?timestamp=${timeStamp}`,
        path + `/img/wa.png`,//?timestamp=${timeStamp}`,
        path + `/snd/a.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/ka.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/sa.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/ta.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/na.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/ha.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/ma.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/ya.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/ra.mp3`,//?timestamp=${timeStamp}`,
        path + `/snd/wa.mp3`,//?timestamp=${timeStamp}`,
      ])
      .then(() => self.skipWaiting());
    })
console.log('インストール');
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  console.log(event.request.url, `fetch`);
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
