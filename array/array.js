console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined

aprovados[3] = 'Paulo' // adicionando um novo elemento
aprovados.push('Abia') // Adiciona um elemento na última posição

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] // deleta um elemento do array

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana' ]
aprovados.splice(1, 1,'Elemento 1', 'Elemento 2',) // (a partir do índice, quantos serão excluídos, elementos a serem adicionados)
console.log(aprovados)

