class Avo {
	constructor(sobrenome){
		this.sobrenome = sobrenome
	}
}

class Pai extends Avo { // forma de definir o prototipo
	constructor(sobrenome, profissao = 'Professor'){
		super(sobrenome) // chamando o construtor da superclasse no caso Avo
		this.profissao = profissao
	}
}

class Filho extends Pai {
	constructor(){
		super('Silva','Analista')
	}
}

const filho = new Filho
console.log(filho)
