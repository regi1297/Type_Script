// Como podemos melhorar o esse código usando TS? 

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

enum Profissao {
    atriz,
    Porteiro
}

type Pessoa = {
    name: string,
    idade: number,
    trabalho: Profissao
}

const maria: Pessoa = {
    name: 'Maria',
    idade: 29,
    trabalho: Profissao.atriz
}

const roberto: Pessoa = {
    name: 'Roberto',
    idade: 19,
    trabalho: Profissao.Porteiro
}

const laura: Pessoa = {
    name: 'Laura',
    idade: 32,
    trabalho: Profissao.atriz
}

const carlos: Pessoa = {
    name: 'Carlos',
    idade: 19,
    trabalho: Profissao.Porteiro
}