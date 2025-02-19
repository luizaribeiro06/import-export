//toda vez que chamar essa função, tem q deolver um objeto com infos do usuario)
//no JSON, obrigatoriamente os atributos tem que ter aspas duplas

import { rg, nomeFake, sobrenomeFake, emailFake } from "./fakers.js"

export default function createUser(){
    let firstName = nomeFake()
    let obj = {
        firstName, //como a variavel esta fora, ele vai puxar automaticamente
        lastName: sobrenomeFake(),
        rg: rg(), //chamando a função rg para gerar aleatório
        email: emailFake(firstName)
    }
    return obj
}

// export {createUser}