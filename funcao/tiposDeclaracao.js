console.log(soma(3,4)) // carrega primeiro as funcoes declaradas antes da execução
// console.log(sub(3, 4)) // da ruim, pq a func é expression só executa depois da criação

// function declaration
function soma(x, y){
	return x + y
}

// function expression
const sub = function(x,y) {
	return x - y
}
console.log(sub(3, 4))

// named function expression | pouco usada
const mult = function mult(x, y) {
	return x * y
}
console.log(mult(3,4))
