let drum = document.querySelectorAll(".drum");

let playlist = ["./sounds/crash.mp3", "./sounds/kick-bass.mp3", "./sounds/snare.mp3", "./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3"];

function playsound(idx){
    let sound1 = new Audio(playlist[idx]);
    sound1.play();
}

drum.forEach((button,idx)=>{
    button.addEventListener("click", ()=>playsound(idx));
})
document.addEventListener("keydown",(eve)=>{
    switch (eve.key) {
        case 'w':
            playsound(0);
            break;
        case 'a':
            playsound(1);
            break;
        case 's':
            playsound(2);
            break;
        case 'd':
            playsound(3);
            break;
        case 'j':
            playsound(4);
            break;
        case 'k':
            playsound(5);
            break;
        case 'l':
            playsound(6);
            break;
    
        default:
            break;
    }
})
