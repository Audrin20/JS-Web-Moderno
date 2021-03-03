const funcs = []

for (var i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// atribui 10 pra os dois valores  pois o escopo do var é global e não respeita o bloco
