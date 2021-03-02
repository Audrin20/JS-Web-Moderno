// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){ // funcao anonima, funçao sem nome
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenado uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b
} // ""=>" substitui o nome "function"

console.log(soma(2, 3))

// retorno implícito 
const subtracao = (a, b) => a-b // funcao de uma única linha 
console.log(subtracao(2, 3))
const imprimir2 = a => console.log(a) // funcao com um único parametro
imprimir2('Legal!!!')