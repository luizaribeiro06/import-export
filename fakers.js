import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"

function rg(){
    return Math.random().toString().slice(3,12)
}

function nomeFake(){
    let index = parseInt(Math.random()*nomes.length) //vai percorrer a lista e pegar um index aleatório
    return nomes[index]
}

function sobrenomeFake(){
    let index2 = parseInt(Math.random()*sobrenomes.length) //vai percorrer a lista e pegar um index aleatório
    return sobrenomes[index2]
}
// console.log(nomes)
export{rg, nomeFake, sobrenomeFake}