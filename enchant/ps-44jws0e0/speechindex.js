document.querySelector('#btn3').onclick = function () {

    // unsupported.
    if (!'SpeechSynthesisUtterance' in window) {
        alert('Web Speech API には未対応です.');
        return;
    }

    s = location.search;
    s = s.substring(12,s.length);
    var kotoba = decodeURI(s);
      //document.write(kotoba);

    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;

    msg.text = kotoba;//document.querySelector('#text1').value;
    msg.onend = function (event) {
        console.log('speech end. time=' + event.elapsedTime + 's');
    }
    speechSynthesis.speak(msg);

    window.close();
};