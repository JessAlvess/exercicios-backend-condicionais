//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 500;

let valorParcela = valorDoProduto / quantidadeDoParcelamento;

let parcelasPagas = valorPago / valorParcela;

console.log(`Restam ${(quantidadeDoParcelamento - (parcelasPagas*100)).toFixed(0)} parcelas de R$${(valorParcela/100).toFixed(2)}`);
