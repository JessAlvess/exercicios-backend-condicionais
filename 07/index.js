const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

const aferirRenda = () => {

const rendimento = (totalDeRendimentos > 2855970) ? console.log('PEGA LEAO') : console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');

}

const result = (aposentada || portadoraDeDoenca) ? console.log('ISENTA') : aferirRenda();