//genera los codigos para verificacion de email
const generador = () => {
    try {
        var codigo = 0
        var contador = 1

        for (let i = 0; i < 6; i++) {
            
            var numero = Math.floor(Math.random() * 10)
            if(numero === 0 && contador === 100000){
                numero++
            }
            codigo += numero * contador
            contador *= 10

        }

        return codigo

    }catch(err) {
        console.log(err)
    }
}

module.exports = { generador }
