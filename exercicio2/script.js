// a)
let soma = (num1, num2) =>{
    const somar =num1 + num2 
    console.log(somar)
}

soma(10,3)

// b)
let booleano = (num1, num2) => {
    const maiorOuIgual = num1 >= num2
    console.log(maiorOuIgual)
}

booleano(3,9)

// c)

let par = (num) =>{
    const trueOrFalse = num % 2 === 0
    console.log(trueOrFalse)
}

par(12)


// d)

let texto = (mensagem) => {
    const tamanho = mensagem.length
    console.log(`O tamanho da string  é ${tamanho}`)
    const maiuscula = mensagem.toUpperCase()
    console.log (`Frase em maúsculo é ${maiuscula}`)
}

texto('Lula lá')

