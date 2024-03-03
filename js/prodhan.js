function sndFX_click(){
    var audio = document.createElement("audio");
    audio.src = "https://www.soundjay.com/buttons/sounds/button-3.mp3";
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();   
}
//http://www.soundjay.com/misc/sounds/handbag-lock-4.mp3

$('#makeNoise').bind("click",function() {
sndFX_click();
}); 
