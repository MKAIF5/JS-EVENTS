// type , timeStamp , defaultedPrevented , 
//target , toElement , srcElement , currentTarget,
//clientX , clientY , screenX , screenY,
//altKey , ctrlKey , shiftKey , keyCode


let p1 = document.getElementById("p1");
let main = document.getElementById("main")

main.addEventListener("click" , () =>{
    console.log("div clicked");
} , true)

p1.addEventListener("click"  , () => {
    console.log("paragraph clicked");
} , true)

//eventListner ke andar true value top se capture krti hai
//aur false ki value bottom se capture krti hai