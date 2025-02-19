//toda vez que chamar essa função, tem q deolver um objeto com infos do usuario)
//no JSON, obrigatoriamente os atributos tem que ter aspas duplas

import { rg, nomeFake, sobrenomeFake } from "./fakers.js"

export default function createUser(){
    let obj = {
        firstName: nomeFake(),
        lastName: sobrenomeFake(),
        rg: rg(), //chamando a função rg para gerar aleatório
        email: "m@m.com"
    }
    return obj
}

// export {createUser}