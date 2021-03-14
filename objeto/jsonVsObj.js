const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c } }
// JSON é um formato textual para qualquer linguagem
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1,b: 2,c: 3}"))
// console.log(JSON.parse("{ 'a':1, 'b':2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2,"c":3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
// Tem que ser desse jeito, estritamente igual para ser aceito um formato JSON
// com aspas duplas em todos os atributos, e o texto todo abre com aspas simples

