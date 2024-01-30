const diaDaSemana = -1;

const diaDaSemanaPorExtenso = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado', 'Domingo'];

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
    console.log(`${diaDaSemanaPorExtenso[diaDaSemana - 1]}`);
} else {
    console.log('O dia da semana informado não é válido.');
}