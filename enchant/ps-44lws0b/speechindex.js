document.querySelector('html').onclick = function () {

    // unsupported.
    if (!'SpeechSynthesisUtterance' in window) {
        alert('Web Speech API には未対応です.');
        return;
    }

    s = location.search;
    s = s.substring(12,s.length);
    var kotoba = decodeURI(s);
    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;

    msg.text = kotoba;
    msg.onend = function (event) {
        console.log('speech end. time=' + event.elapsedTime + 's');
    }
    speechSynthesis.speak(msg);

    window.close();
};
