const formEl = document.querySelector("form")



const pEl = document.querySelectorAll("p")
for( let i=0; i<5; i++){
    num_random = Math.floor(Math.random()*100)
    pEl[i].textContent = num_random
    
}












