document.querySelector('#btn1').onclick = function () {

    // unsupported.
    if (!'SpeechSynthesisUtterance' in window) {
        alert('お使いのブラウザは Web Speech API には未対応です.');
        return;
    }

    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = document.querySelector('#text1').value;
    msg.lang = document.querySelector('#selectVoice1').value;
    msg.onend = function (event) {
        console.log('speech end. time=' + event.elapsedTime + 's');
    }
    speechSynthesis.speak(msg);
};

document.querySelector('#btn2').onclick = function () {

    // unsupported.
    if (!'SpeechSynthesisUtterance' in window) {
        alert('お使いのブラウザは Web Speech API には未対応です.');
        return;
    }

    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = document.querySelector('#text2').value;
    msg.lang = document.querySelector('#selectVoice2').value;
    msg.onend = function (event) {
        console.log('speech end. time=' + event.elapsedTime + 's');
    }
    speechSynthesis.speak(msg);
};

document.querySelector('#btn3').onclick = function () {

    // unsupported.
    if (!'SpeechSynthesisUtterance' in window) {
        alert('お使いのブラウザは Web Speech API には未対応です.');
        return;
    }

    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = document.querySelector('#text3').value;
    msg.lang = document.querySelector('#selectVoice3').value;
    msg.onend = function (event) {
        console.log('speech end. time=' + event.elapsedTime + 's');
    }
    speechSynthesis.speak(msg);
};
