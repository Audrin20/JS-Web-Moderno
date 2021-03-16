const pilotos = ['Vettel','Alonso', 'Raikkonen', 'Massa'] // Não pode atribuir mais nada para a constante pilotos, mas o array é flexível.

pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir do indice 2, não remove ngm, adiciona 'Bottas', 'Massa'
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa saiu novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Slice retorna um novo array a partir do indice informado no parâmetro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // indice 1 até o 4, mas o 4 não entra
console.log(algunsPilotos2)
