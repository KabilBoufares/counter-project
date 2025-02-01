const countLabel = document.getElementById("countLabel"); 
const increaseBtn = document.getElementById("b1"); 
const restBtn = document.getElementById("b2");
const decreaseBtn = document.getElementById("b3"); 
let count= 0 ;

increaseBtn.onclick =function(){
    count++;
    countLabel.textContent= count ; 
}

decreaseBtn.onclick = function (){
    count -- ; 
    countLabel.textContent= count ; 
}

restBtn.onclick = function (){
    count = 0 ;
    countLabel.textContent= count ; 
}
 