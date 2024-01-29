const caractere = "1";

const vogal = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
const consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let indexOfChar;

vogal.filter((index) => {
    if (caractere === vogal[index]) {
        if (index <= 4) {
            console.log('Vogal maiúscula');
        } else {
            console.log('Vogal minúscula');
        }
    }
})

consoante.filter((value) => {
    if (caractere.toLowerCase() === value) {
        console.log('Consoante');
    }
})

numeros.filter((value) => {
    if (Number(caractere) === value){
        console.log('Número');
    }
})
