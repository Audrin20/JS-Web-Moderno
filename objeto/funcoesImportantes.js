const pessoa = {
	nome: 'Rebeca',
	idade: 2, 
	peso: 13
}

console.log(Object.keys(pessoa)) // pega as chaves
console.log(Object.values(pessoa)) // pega os valores
console.log(Object.entries(pessoa)) // pega chave, valor

Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',  {
	enumerable: true, // se "false" ele não vai exibir no console.log()
	writeable: false,
	value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1 }
const o1 = {b: 2}
const o2 = { c: 3, a:4 }
const obj = Object.assign(dest, o1, o2) // concatena os objetos o1 e o2 dentro do "dest" "a:" já existia, então ele sobrescreve

console.log(obj)

Object.freeze(obj) // Mais um exemplo de freeze
obj.c = 1234

console.log(obj)
