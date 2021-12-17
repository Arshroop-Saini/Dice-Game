
// image-1
function image() {
    const q= Math.random();
const z= Math.floor((q*6)+1);

return z; 
}
const lk= image();

switch (lk) {
    case lk===1:
        $(".img1").attr("src","/images/dice1.png");
        
        break;
        case lk===2:
            $(".imgOne").attr("src","/images/dice2.png");
        
        break;
        case lk===3:
            $(".imgOne").attr("src","/images/dice3.png");
        
        break;
        case lk===4:
            $(".imgOne").attr("src","/images/dice4.png");
        
        break;
        case lk===5:
            $("imgOne").attr("src","/images/dice5.png");
        
        break;
        case lk===6:
            $("imgOne").attr("src","/images/dice6.png");
        
        break;

    default:
        alert("error!")
        break;
}

// image-2
function image() {
    const t= Math.random();
const u= Math.floor((t*6)+1);

return u; 
}
const v= image();

function image() {
    let t= Math.random();
let u= Math.floor((t*6)+1);

return u; 
}
let v= image();

switch (v) {
    case v===1:
        $(".imgTwo").attr("src","/images/dice1.png");
        
        break;
        case v===2:
            $(".imgTwo").attr("src","/images/dice2.png");
        
        break;
        case v===3:
            $(".imgTwo").attr("src","/images/dice3.png");
        
        break;
        case v===4:
            $(".imgTwo").attr("src","/images/dice4.png");
        
        break;
        case v===5:
            $("imgTwo").attr("src","/images/dice5.png");
        
        break;
        case v===6:
            $("imgTwo").attr("src","/images/dice6.png");
        
        break;

    default:
        alert("error!")
        break;
}


//Winner Looser Logic

if (lk>v) {
    $(h1).text("🚩 Play 1 Wins!")
}else if(lk<v){
    $(h1).text("Player 2 Wins! 🚩")
}else{
$(h1).text("Draw!")
}