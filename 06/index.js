const alturaEmCm = 205;

//seu código aqui
const position = (altura) => {
  
if (altura <= 185) {
    console.log('Líbero');
} else if (altura >= 186 && altura < 195) {
    console.log('Ponteiro');
} else if (altura >= 196 && altura < 205) {
    console.log('Oposto');
} else{
    console.log('Central');
}
}

const result = (alturaEmCm >= 180) ? position(alturaEmCm) : console.log('Reprovado');
