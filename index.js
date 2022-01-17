var numberoftime=document.querySelectorAll(".Drum").length;
for(var i=0;i<numberoftime;i++){

document.querySelectorAll(".Drum")[i].addEventListener("click",function (){
    var buttoninnethtml=this.innerHTML;
    switch(buttoninnethtml){
        case "w":
            var audio= new Audio("tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio1 = new Audio("tom-3.mp3");
            audio1.play();
            break;
        case "d":
            var audio3= new Audio("tom-4.mp3");
            audio3.play();
            break;
        case "j":
            var audio4 = new Audio("snare.mp3");
            audio4.play();
            break;
        case "k":
            var audio5 = new Audio("crash.mp3");
            audio5.play();
            break;
        case "l":
            var audio6 = new Audio("kick-bass.mp3");
            audio6.play();
            break;
        default:
            console.log(buttoninnethtml);

    }
});

}





