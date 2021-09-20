function validacao(numA, numB, numC) {
    if((numA +numC) > numB) {
        console.log(`A soma entre ${numA} + ${numC} é igual há ${numA + numC}`)
    } else{
        console.log(`Os valores ${numA} + ${numC} é igual ${numB}`)
    }
}

validacao(1, 2, 1)