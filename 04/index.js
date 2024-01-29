const ladoA = 5;
const ladoB = 5;

//seu código aqui
const carretao = () => {
    switch (ladoA) {
        case 0:
            console.log('Carretão de Branco');
            break;

        case 1:
            console.log('Carretão de Ás');
            break;
    
        case 2:
            console.log('Carretão de Duque');
            break;

        case 3:
            console.log('Carretão de Terno');
            break;

        case 4:
            console.log('Carretão de Quadra');
            break;
    
        case 5:
            console.log('Carretão de Quina');
            break;

        case 6:
            console.log('Carretão de Sena');
            break;
    
        default:
            break;
    }
}

const result = (ladoA === ladoB) ? carretao() : console.log('Não, no Paraná isto não é um carretão');