//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

switch (tipoDePagamento) {
    case 'credito':
        console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * (5/100)))/100).toFixed(2)}`);
        break;

    case 'cheque':
        console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * (3/100)))/100).toFixed(2)}`);
    break;

    case 'debito':
        console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * (10/100)))/100).toFixed(2)}`);
    break;

    case 'dinheiro':
        console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * (10/100)))/100).toFixed(2)}`);
        break;

    default:
        break;
}