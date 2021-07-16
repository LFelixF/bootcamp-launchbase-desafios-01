// Cálculo de IMC

const nome = 'Carlos'
const peso = 84
const altura = 1.90

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso!`)
} else {
    console.log(`${nome}, você não está acima do peso!`)
}

// Cálculo de aposentadoria

const nome01 = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const calculoContribuicao = idade + contribuicao

if (sexo == 'F' && calculoContribuicao >= 85 || sexo == 'M' && calculoContribuicao >= 95) {
    console.log(`${nome01}, você pode se aposentar!`)
} else {
    console.log(`${nome01}, você ainda não pode se aposentar!`)
}