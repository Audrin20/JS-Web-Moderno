// novo recurso do ES2015

const pessoa = {
    nome: 'Ana', // quero ter acesso a essa variável... Usar Destructuring
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // { atributo1, atributo2, ...} = Objeto -> Destructuring

console.log(nome, idade)

const { nome: n, idade: i} = pessoa // vai pegar os atributos e atribuir a variável que está após o ":"
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // quando o atributo não existe dentro do obj = undefined. Ele está definindo valor padrão à um atributo que não existe dentro do objeto.
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// cuidado pra não desestrutorar dados aninhados que não existem, porque da ruim
const {conta: {ag, num}} = pessoa
console.log(ag, num)