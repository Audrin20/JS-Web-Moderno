const escola = 'Cod3r'

console.log(escola.charAt(4)) // mostra o índice da cadeia de caracter
console.log(escola.charAt(5)) // indice fora do tamanho da cadeia, mas não retorna nada
console.log(escola.charCodeAt(3)) // Pega o indice 3 e o valor da tabela ASCII
console.log(escola.indexOf('r')) // Retorna o valor do índice relacionado à string
console.log(escola.substring(1)) // pega do índice 1 p frente
console.log(escola.substring(0, 3)) // pega do índice 0 até o 3

console.log('Escola '.concat(escola).concat("!")) // concatena
console.log('Escola '+ escola +"!") // concatena
console.log(escola.replace(3, 'e')) //Substitui 3, por 'e'
console.log(escola.replace(/\d/, 'e')) //Substitui todos os dígitos, por 'e' - RegEx
console.log(escola.replace(/\w/g, 'e')) //Substitui TUDO, por 'e' RegEx

console.log('Ana, Maria, Pedro')
console.log('Ana, Maria, Pedro'.split(',')) // gera um array com o elemento dentro do split
console.log('Ana, Maria, Pedro'.split('/*./')) // gera um array com o elemento dentro do split que pode ser RegEx