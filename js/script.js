document.getElementById('player').addEventListener("click",sumarPuntos);

puntos=0;
tiempo=60;
necesarios=30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    randNum= Math.round(Math.random()*500);
    randNum2= Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    
    if (puntos ==30){
        
        tiempo=60;
        puntos=0;
        alert("Ganaste :D");
    }
}


function  restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
    if (tiempo==0){
        
        tiempo=60;
        puntos=0;
        alert("Perdiste :C");
    }
}

    setInterval(restarTiempo,1000);

