document.addEventListener("DOMContentLoaded",function(){
    console.log("Carregado");
    //alert(checkCookie());
    
    
    
})
var click = "";
window.onload = function(){

    var click = getCookie("click");
    document.getElementById("lblClick").innerHTML = click[1];
   
}

function addClick() {
   var clickAtual = getCookie("click");
   clickAtual = parseInt(clickAtual[1])+1;
   document.cookie = "click="+clickAtual+";";
   console.log(getCoin());
   document.getElementById("lblClick").innerHTML = clickAtual;
}

function getCookie(name){
    console.log('getCookie');
    var cookieRAW = document.cookie.replace(" ","");
    console.log(cookieRAW);
    var cookie = cookieRAW.split(";");
    let verif = 0;
    console.log(cookie);
    for (let i = 0; i < cookie.length; i++) {
        
        let temp = cookie[i].split('=');
        console.log(temp[0]);
        if (temp[0] == name) {
            return temp;
            verif = 1;
        }
        
    }
    if (verif == 0) {
        console.log("criou");
        click = createCookie();
    }
}

function createCookie(){

    document.cookie = "click=0"
    return 0;
    
}

function getCoin(){
    var aleatorio = Math.random();
    aleatorio = Math.floor(aleatorio * 100);
    return aleatorio;
}