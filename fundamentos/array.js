const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //número de elementos do array
valores.push({id: 3}, false, null, 'teste') // insere elementos no array
console.log(valores.pop()) // retira o último elemento do array e exibe o elemento retirado
delete valores[0] // retira mas não exibe
console.log(valores)

console.log(typeof valores)
