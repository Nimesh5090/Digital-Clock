let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");


let clock = setInterval(function(){
    let date = new Date();

   
if(date.getSeconds()<9){
    sec.innerHTML = "0" + date.getSeconds();
}

else{
    sec.innerHTML = date.getSeconds();
}

if(date.getMinutes()<9){
    min.innerHTML = "0" + date.getMinutes();
}

else{
    min.innerHTML = date.getMinutes();
}

if(date.getHours()<9){
    hrs.innerHTML = "0" + date.getHours();
}

else{
    hrs.innerHTML = date.getHours();
}
},1000)

