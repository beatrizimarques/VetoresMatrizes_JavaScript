let numero = []

for ( let cont = 0; cont <7; cont++){
    numero.push(parseInt(prompt("Digite um número:")))
}

let soma = 0

for (let cont = 0; cont < numero.length ; cont++){
    soma += numero[cont]
}

document.write(soma/7)