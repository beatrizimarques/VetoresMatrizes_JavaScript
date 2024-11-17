let numero = []

for ( let cont = 0; cont <5; cont++){
    numero.push(parseInt(prompt("Digite um número:")))
    if(numero%cont == 2){
        document.write(numero)
    }
}

