document.addEventListener("DOMContentLoaded", function(e){

    const parrafos = document.querySelectorAll('.description');

    let alturas = [];
    let alturaMaxima = 0;

    const aplicarAlturas = (function aplicarAlturas(){
        
        parrafos.forEach(parrafo =>{
            
            if(alturaMaxima == 0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturaMaxima + "px";
            }

        });

        return aplicarAlturas;
    })();

    alturaMaxima = Math.max.apply(Math, alturas);

    aplicarAlturas();
    
});

//

document.addEventListener("DOMContentLoaded", function(){

    const button = this.getElementsByClassName('.btn-ingresar');

    
})