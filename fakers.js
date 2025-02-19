import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"
import emails from "./email.js"

function rg(){
    return Math.random().toString().slice(3,12)
}

function nomeFake(){
    let index = parseInt(Math.random()*nomes.length) //vai percorrer a lista e pegar um index aleatório
    return nomes[index]
}

function sobrenomeFake(){
    let index2 = parseInt(Math.random()*sobrenomes.length) 
    return sobrenomes[index2]
}

function emailFake(nomes){
    let index3 = parseInt(Math.random()*emails.length) 
    let dominio = emails[index3]
    return nomes.toLowerCase()+"@"+dominio
}
// console.log(nomes)
export{rg, nomeFake, sobrenomeFake, emailFake}