const slides=document.getElementsByClassName("carousel-item");
const dots=document.getElementsByClassName("Dot");
let slideCompteur=0;
const slidesTail=slides.length;
const boucle=1;

document.getElementById("carousel-button-next").addEventListener('click',clickdroit)
document.getElementById("carousel-button-prev").addEventListener('click',clickgauche)

function clickdroit(){
    hideSlides();
    if(slideCompteur===slidesTail-1){
        slideCompteur=0;
    }else{
        slideCompteur++;
    }
    slides[slideCompteur].classList.add("carousel-item-visible")
    dots[slideCompteur].classList.add("image-dot")
}

function clickgauche(){
    hideSlides();
    if(slideCompteur===0){
        slideCompteur=slidesTail-1;
    }else{
        slideCompteur--;
    }
    slides[slideCompteur].classList.add("carousel-item-visible")
    dots[slideCompteur].classList.add("image-dot")

}
function hideSlides(){
    for( let i=0;i<slidesTail;i++){
        slides[i].classList.remove("carousel-item-visible")
        slides[i].classList.add("hidden")

        dots[i].classList.remove("image-dot")
    }
}

function timeout() {
    setTimeout(function () { clickdroit();timeout();}, 5000);
}
timeout(); 