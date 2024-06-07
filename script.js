// type , timeStamp , defaultedPrevented , 
//target , toElement , srcElement , currentTarget,
//clientX , clientY , screenX , screenY,
//altKey , ctrlKey , shiftKey , keyCode


let p1 = document.getElementById("p1");
let main = document.getElementById("main")

main.addEventListener("click" , () =>{
    console.log("div clicked");
} , true)

p1.addEventListener("click"  , (e) => {
    console.log("paragraph clicked");
    e.stopPropagation()
} , true)

//eventListner ke andar true value top se capture krti hai
//aur false ki value bottom se capture krti hai

//events practice delay due to match



//loop topic solution

let count = 0

for(i=0; i<=10; i++){
  let count  = 0
  count += i
}

console.log(i);