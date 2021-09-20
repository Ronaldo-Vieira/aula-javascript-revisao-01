function horario(hora) {
    if (hora >= 6 && hora <= 12) {
        console.log("Bom Dia!")
    } else if (hora > 12 && hora <= 17) {
        console.log("Boa Tarde!")
    } else if ( hora > 17 && hora <= 24 ) {
        console.log("Boa Noite!")
    } else {
        console.log("Valor Inválido!")
    }
}

horario(23)