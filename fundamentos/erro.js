function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // trata o erro "lança"
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
    try { // potencialmente perigoso
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally { // esse bloco executa de qualquer jeito entrando no catch ou no try
        console.log('final')
    }
}


const obj = { name:'Roberto' }
imprimirNomeGritado(obj)