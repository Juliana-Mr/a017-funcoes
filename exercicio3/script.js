let somar = (num1, num2) => {
    const soma = num1 + num2
    console.log(`Soma:${soma}`)
}

let subtrair = (num1, num2) => {
    const subtracao = num1 - num2
    console.log(`Subtração:${subtracao}`)
}

let multiplicar = (num1, num2) => {
    const multiplicacao = num1 * num2
    console.log(`Multiplicação: ${multiplicacao}`)
}

let dividir = (num1, num2) => {
    const divisao = num1 / num2
    console.log(`Divisão: ${divisao}`)
}

const numero1 = Number(prompt('Digite um número'))
const numero2 = Number(prompt('Digite outro número'))

somar(numero1, numero2)
subtrair(numero1, numero2)
multiplicar(numero1, numero2)
dividir(numero1, numero2)

// let operacoes = (num1, num2) => {
//     const soma = num1 + num2
//     const subtracao = num1 - num2
//     const multiplicacao = num1 * num2
//     const divisao = num1 / num2

//     console.log(
//     `O valor da soma é ${soma}\nO valor da subtração é ${subtracao}\nO valor da multiplicação é ${multiplicacao}\nO valor da divisão é ${divisao}`)
// }

// const numero1 = Number(prompt('Digite um número'))
// const numero2 = Number(prompt('Digite outro número'))

// operacoes(numero1, numero2)