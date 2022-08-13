const slides=document.getElementsByClassName("carousel-item");
let slideCompteur=0;
const slidesTail=slides.length;


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
}
function clickgauche(){
    hideSlides();
    if(slideCompteur===0){
        slideCompteur=slidesTail-1;
    }else{
        slideCompteur--;
    }
    slides[slideCompteur].classList.add("carousel-item-visible")}
function hideSlides(){
    for( let name of slides){
        name.classList.remove("carousel-item-visible")
        name.classList.add("hidden")
    }
}
