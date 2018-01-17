importScripts('serviceworker-cache-polyfill.js');

// インストール時 (register時) に静的ファイルをキャッシュしておく
self.oninstall = function(event) {
  // .waitUntil() に渡された Promises が resolve されたら
  // インストール完了
  event.waitUntil(
    caches.open('statics-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/page.js',
        '/offline_icon.png',
        '/main.css']);
    })
  );
};


//
// ページヘのネットワークリクエストが来たらキャッシュにある
// データを返す
self.onfetch = function(event) {
  event.respondWith(caches.match(event.request));
};