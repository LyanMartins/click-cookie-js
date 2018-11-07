document.addEventListener("DOMContentLoaded",function(){
    console.log("Carregado");
    //alert(checkCookie());
    
    
    
})
var click = "";
window.onload = function(){

    var click = getCookie("click");
    var coin = getCookie("coin");
    document.getElementById("lblClick").innerHTML = click[1];
    document.getElementById("coins").innerHTML = coin[1];
}

function addClick() {
   var clickAtual = getCookie("click");
   clickAtual = parseInt(clickAtual[1])+1;
   document.cookie = "click="+clickAtual+";";
   console.log(getCoin(clickAtual));
   document.getElementById("lblClick").innerHTML = clickAtual;
}

function getCookie(name){
    console.log('getCookie');
    var cookieRAW = document.cookie.replace(" ","");
    console.log(cookieRAW);
    var cookie = cookieRAW.split(";");
    let verif = 0;
    console.log(cookie);
    for (let i = 0; i <= cookie.length; i++) {
        
        let temp = cookie[i].split('=');
        console.log(temp[0]);
        
        if (temp[0] == name) {
            return temp;
            verif = 1;
        }
        
    }
    if (verif == 0) {
        console.log("criou");
        click = createCookie(name);
    }
}

function createCookie(name){

    document.cookie = name+"=0"
    return 0;
    
}

function getCoin(clickAtual){
    var aleatorio = Math.random();
    aleatorio = Math.floor(aleatorio * 100);
    var clickstr = clickAtual.toString();
    var total = clickstr.length;
    var inicial = parseInt(total)-2;
    var position = clickstr.substr(inicial,total);
    position = parseInt(position);
    console.log(position);
    console.log(aleatorio);
    if(position == aleatorio){

        console.log("Ganhou moeda");

        addCoin()

    }
    return aleatorio;
}

function addCoin(){
    var coinAtual = getCookie("coin");
    coinAtual = parseInt(coinAtual[1])+1;
    document.cookie = "coin="+coinAtual+";";
    document.getElementById("coins").innerHTML = coinAtual;
}