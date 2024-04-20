var playr1 =(Math.random()*6);


var playr2 =  (Math.random()*6);



var images = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png"]


if(Math.floor(playr1) > Math.floor(playr2)){
    document.querySelector("h3").textContent = "playr 1 won !"
    
}else if (Math.floor(playr1) < Math.floor(playr2)){
    document.querySelector("h3").textContent = "playr 2 won !"
}
else{
    document.querySelector("h3").textContent = "drow"
}


document.querySelector(".img1").setAttribute("src" , images[Math.floor(playr1)])
document.querySelector(".img2").setAttribute("src" , images[Math.floor(playr2)])

