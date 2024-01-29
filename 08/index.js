const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

const verificarPreco = () => {
    if (ehEstudante || idade < 18) {
        console.log('10 REAIS');
    } else {
        console.log('20 REAIS');
    }
}

const result  = (possuiPatologia || altura < 150 || idade < 12 || idade > 65) ? console.log('ACESSO NEGADO') : verificarPreco();