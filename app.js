let numSecret = 0;
let attempt = 1;
let listaNumGene = [];
let cantMaxNumLista = 10;


/*----------------- Modify tags ----------------- */
function changeHTML(element, text){
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
}

/*----------------- Generar random ----------------- */
function random(){
    let NumGenerado =  Math.floor(Math.random()*cantMaxNumLista) + 1;
    console.log(NumGenerado);
    console.log(listaNumGene)

    if(listaNumGene.length == cantMaxNumLista){
        changeHTML('p', 'Ya se han sorteados todos los numeros disponibles')
    }else{
        if(listaNumGene.includes(NumGenerado)){
            return random();
        }else{
            listaNumGene.push(NumGenerado);
            return NumGenerado;
        }
    }

}

/* ---------------Condidional Valida numero---------------------- */
function verifyAttempt(){
    let tryValueUser = parseInt(document.getElementById('valueUser').value);
    
    if(tryValueUser === numSecret){
        changeHTML('p', `Felicidades!! Acertaste en ${attempt} ${attempt === 1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
      
    }else{
        if(tryValueUser > numSecret){
            changeHTML('p', 'El numero Secreto es menor');
        }else{
            changeHTML('p','El numero secreto es mayor');
        }
        attempt++
        clearInput()
    }
}
/*-----------------Limpia input---------------------- */
function clearInput(){
    document.querySelector('#valueUser').value = '';
}

/*--------- Condiciones iniciales del juego -------------- */
function initialConditions(){
    //Actualizar etiqueta p
   //Generar nuevo numero random
   //Reiniciar contador
   changeHTML('h1','Guess Number');
   changeHTML('p', `Enter a number from 1 to ${cantMaxNumLista}`);
   numSecret =  random();
   attempt = 1;
    //Limpiar input
   clearInput()
}
/* ------------------ Restaura el Juego ----------------------- */
function newGame(){
    initialConditions()
    //Deshabilitar botton new game
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

initialConditions()/* Da parametros de inicio al juego */
