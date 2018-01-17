function log(msg) {
  document.querySelector('#log').textContent = msg;
}

navigator.serviceWorker.register('./service-worker.js', {scope:'./'})
  .then(function(sw) {
      if (navigator.serviceWorker.controller) {
        log('���̃y�[�W�� ServiceWorker �ɃR���g���[������Ă��܂�');
      } else {
        log('ServiceWorker ���o�^����܂���');
      }
    })
  .catch(function(err) {
    log('ServiceWorker �̓o�^�Ɏ��s���܂���: ' + err);
  });
