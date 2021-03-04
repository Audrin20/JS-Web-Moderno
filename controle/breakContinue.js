const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if (x == 5) {
        break
    } //break não age em if, só For, while ou switch
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5) {
        continue // interrompe a repetição corrente e vai para o próximo elemento
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // rótulo
for (a in nums){
    for (b in nums){
        if (a== 2 && b ==3) break externo
        console.log(`Par = ${a},${b}`)
    }    
} // NÃO USE!