function refreshPage() {
    location.reload();
}

function playMusic(path, volume) {
    var audio = document.getElementById('music')
    if(audio) {
        audio.src = path;
        audio.load()
        audio.volume = volume;
        audio.play()
    } else {
        console.log("No audio source is found!");
    }
}