// document.DOMcontentloaded=()=>{
//     let header = document.querySelector('.header')
// }

document.addEventListener('DOMContentLoaded',function(){
    let header= document.querySelector(".header");

    window.addEventListener("scroll",function(){
        if (window.scrollY > header.offsetHeight){
            header.classList.add("activeSticky");
        }
        else{
            header.classList.remove("activeSticky");
        }
    });
});


let forwardButton = document.querySelector(".forward-button");
forwardButton.onclick=()=>{
    history.forward();
};

