// Usuários e tecnologias

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}.`)
}

// Busca por tecnoligia

function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] == 'CSS'){
            return true
        }
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

// Soma de despesas e receitas

const users = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

for (let i = 0; i < users.length; i++) {
    let saldo = calculaSaldo(users[i].receitas, users[i].despesas)

    if (saldo >= 0) {
        console.log(`${users[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}.`)
    }
    else {
        console.log(`${users[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}.`)
    }
}

function calculaSaldo(receitas, despesas) {
    let somaReceita = somaNumeros(receitas)
    let somaDespesa = somaNumeros(despesas)

    let saldo = somaReceita - somaDespesa

    return saldo
}

function somaNumeros(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    return soma
}