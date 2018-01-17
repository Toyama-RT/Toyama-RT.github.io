importScripts('serviceworker-cache-polyfill.js');

// �C���X�g�[���� (register��) �ɐÓI�t�@�C�����L���b�V�����Ă���
self.oninstall = function(event) {
  // .waitUntil() �ɓn���ꂽ Promises �� resolve ���ꂽ��
  // �C���X�g�[������
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
// �y�[�W�w�̃l�b�g���[�N���N�G�X�g��������L���b�V���ɂ���
// �f�[�^��Ԃ�
self.onfetch = function(event) {
  event.respondWith(caches.match(event.request));
};