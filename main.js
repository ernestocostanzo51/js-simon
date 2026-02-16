const formEl = document.querySelector("form")
const pEl = document.querySelectorAll("p")
const h1El = document.querySelector("h1")
const buttonEl = document.querySelector("button")
//generazione 5 numeri all'interno delle <p><//p>

setTimeout(function(){

    for( let i=0; i<5; i++){
    num_random = Math.floor(Math.random()*100)
    pEl[i].textContent = num_random
    h1El.textContent = "Ecco i numeri! Memorizzali"

}

},5000)



//sostituzione <p></p> con gli <input>
setTimeout(function(){

for (let i = 0; i < pEl.length; i++) {
        
        let input = document.createElement('input')
        input.type = "number";
        input.placeholder = "Inserisci il numero"

        pEl[i].textContent = ""; 
        pEl[i].appendChild(input)
        h1El.textContent = "Inserisci i numeri!"
    }
}, 10000)

setTimeout(function(){
    buttonEl.disabled=false
},11000)














