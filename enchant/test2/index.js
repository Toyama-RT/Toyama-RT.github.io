    var recControl = function(){
        navigator.getUserMedia(
            {
                video: false,
                audio: true
            },
            function(stream){
                el.rec.textContent = 'now Recording...';
                el.rec.disabled = true;
                var recorder = new MediaStreamRecorder(stream);
                recorder.mimeType = 'audio/ogg';
                recorder.ondataavailable = function (blob) {
                    var audio_el = document.createElement("audio");
                    var url = audio_el.src = URL.createObjectURL(blob);
                    audio_el.play();
                    recorder.stop();
                    stream.stop();
                    el.rec.textContent = 'REC';
                    el.rec.disabled = false;
     
                    //download link
                    el.download.href = url;
                    el.download.textContent = 'download';
                    el.download.download = 'output.wav';
                };
                recorder.start(5000);
            },
            function(err){
                console.log(err.name ? err.name : err);
            }
        );
    }
    var el = {
        rec : document.querySelector('.rec'),
        download: document.querySelector('.download')
    }
    el.rec.addEventListener('click', recControl, false);
