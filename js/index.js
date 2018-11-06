document.addEventListener("DOMContentLoaded",function(){
    console.log("Carregado");
    //alert(checkCookie());
    
    
    
})
var click = "";
window.onload = function(){
    console.log('Onload disparado');
    var cookieRAW = document.cookie.replace(" ","");
    console.log(cookieRAW);
    var cookie = cookieRAW.split(";");
    let verif = 0
    console.log(cookie);
    for (let i = 0; i < cookie.length; i++) {
        
        let temp = cookie[i].split('=');
        console.log(temp[0]);
        if (temp[0] == "click") {
            console.log("ja tem");
            click = temp[1];
            verif = 1;
        }
        
    }
    if (verif == 0) {
        console.log("criou");
        click = createCookie();
    }

    document.getElementById("lblClick").innerHTML = click;
   
}

function addClick() {
   var clickAtual = getCookie();
   clickAtual = parseInt( clickAtual)+1;
   document.cookie = "click="+clickAtual+";";
   document.getElementById("lblClick").innerHTML = clickAtual;
}

function getCookie(){
    console.log('getCookie');
    var cookieRAW = document.cookie.replace(" ","");
    console.log(cookieRAW);
    var cookie = cookieRAW.split(";");
    let verif = 0;
    console.log(cookie);
    for (let i = 0; i < cookie.length; i++) {
        
        let temp = cookie[i].split('=');
        console.log(temp[0]);
        if (temp[0] == "click") {
            return temp[1];
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