// Object.preventExtensions não é possível aumentar o número de atributos desse obj
//

const produto = Object.preventExtensions({
	nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'borracha' // Pode ser modificado
produto.descricao = 'Borracha escolar branca' // mas não pode ser adicionado
delete produto.tag // Pode ser excluído, adicionado, não.
console.log(produto)

// Object.seal
//
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // não adiciona, exclui, mas ocnsegue modificar os valores dos atributos
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29 // Altera, mas não remove nem adiciona
console.log(pessoa)

// Object.freeze = selado + valores constantes
