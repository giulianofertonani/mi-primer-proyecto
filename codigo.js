"use strict";

let calcularMetBasal = document.getElementById('calcularMetBasal');

calcularMetBasal.addEventListener('submit', calcMetBasal)

function calcMetBasal(e){
    e.preventDefault()
 let peso = document.getElementById('peso').value;
 let altura = document.getElementById('altura').value;
 let edad = document.getElementById('edad').value;
 let sexo = document.getElementById('sexo').value;

if(sexo === 'men') {
    let resultado= (10*peso) + (6.25*altura ) - (5*edad) + 5;
    alert(`Tu metabolismo basal es de ${resultado}`);
} else{
    let resultado= (10*peso) + (6.25*altura ) - (5*edad) - 254;
    alert(`Tu metabolismo basal es de ${resultado}`);
}
}

