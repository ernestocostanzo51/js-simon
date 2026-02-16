const formEl = document.querySelector("form")
const pEl = document.querySelectorAll("p")
const h1El = document.querySelector("h1")
const buttonEl = document.querySelector("button")
//generazione 5 numeri all'interno delle <p><//p>
let numeriDaIndovinare =[]
setTimeout(function(){

    for( let i=0; i<5; i++){
        
    let num_random = Math.floor(Math.random()*100)
    

    pEl[i].textContent = num_random
    h1El.textContent = "Ecco i numeri! Memorizzali"
    numeriDaIndovinare.push(num_random)
}

},5000)



//inserimento degli input dentro le <p></p>
setTimeout(function(){
for (let i = 0; i < pEl.length; i++) {
        //creazione degli input per quante sono le <p>
        let inputEl = document.createElement('input')
        inputEl.type = "number";
        inputEl.placeholder = "Inserisci il numero"
        

        pEl[i].textContent = ""; 
        pEl[i].appendChild(inputEl)
        h1El.textContent = "Inserisci i numeri hai 30 secondi di tempo"
    }
}, 10000)

setTimeout(function(){
    buttonEl.disabled=false
   

},11000)


formEl.addEventListener('submit', function(e){
e.preventDefault()
//prendiamo tutti gli input
const inputs = document.querySelectorAll("input")

let numeri_indoviati = 0

for(let i=0; i<inputs.length; i++){
    if(parseInt(inputs[i].value) === numeriDaIndovinare[i]){  //SE l'input preso in analisi è uguale al numero da indovinare corrispondente si
                                                               //incrementa di 1 i numeri indovinati
        numeri_indoviati++
    }
        
}

h1El.textContent = "Hai indovinato " + numeri_indoviati + " su 5"

})
//dopo i 30 secondi il bottone non si può più usare
setTimeout(function(){
    buttonEl.disabled=true
    h1El.textContent ="TEMPO SCADUTO"
}, 40000)
    


    















