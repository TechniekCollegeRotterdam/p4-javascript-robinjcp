//Oefening angry-birds

const bird = document.querySelector(".bird");
let count = 100;

bird.addEventListener("click", function(){
    count +=50;
    //aan de bird class wordt styling toegevoegd, de styling is left 50px
    bird.style.left = count + "px";
})

window.addEventListener("keydown", function(e){
    if(e.key  == "ArrowLeft"){
        count -=50;
        bird.style.left = count + "px";

    }if(e.key  == "ArrowRight"){
        count +=50;
        bird.style.right = count + "px";
    }

    if(e.key  == "ArrowUp"){
        count +=50;
        bird.style.top = count + "px";
    }

    if(e.key  == "ArrowDown"){
        count +=50;
        bird.style.bottom = count + "px";
    }


})