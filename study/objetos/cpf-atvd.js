cpf = '005.938.742-42'

let cpfLimpo = cpf.replace(/[^\d]+/g, '');
const arrayCpf = cpfLimpo.split('');

function CalculaResultado(aux, cpf, maxIndex){
    result = cpf.reduce((acumulador, valor, index) => {
        if(index > maxIndex){
            return acumulador;
        }
        let result = acumulador + Number(valor * aux);
        aux--;
        return result;
    }, 0);
    let digito = 11 - (result % 11)
    return digito > 9 ? 0 : digito;
}

const CpfParaVerificar = arrayCpf.slice(0, 9)
CpfParaVerificar.push(CalculaResultado(10, arrayCpf, 8));
CpfParaVerificar.push(CalculaResultado(11, arrayCpf, 9));

console.log(CpfParaVerificar.join('') === cpfLimpo);