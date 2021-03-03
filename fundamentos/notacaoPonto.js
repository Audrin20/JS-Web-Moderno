console.log(Math.ceil(6.1))
// os membros de um objeto, são sempre acessados por um ponto
const obj1 = {}
obj1.nome = 'Bola' // ainda que o atributo não esteja criado no objeto, o js cria dinamicamente
// obj1['nome'] = 'Bola2' // igual a de cima
console.log(obj1.nome)


function Obj(nome){
    this.nome = nome // this -> deixa o elemento público
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()