let valor // não inicializado
console.log(valor) // undefined -> não atribui nada a essa variável
// console.log(valor2) // not defined -> não foi atribuído nenhum endereço de memória para essa variável

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // a variável está nula Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)

// delete produto.preco
console.log(produto)
produto.preco = null // sem preço