function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfLimpo', { 
        enumerable: true,
        get: function() { 
            return cpf.replace(/[^\d]+/g, '');
        }
    })
}

ValidaCpf.prototype.valida = function() {
    if(this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo  = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (Number(valor) * regressivo);
        regressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = new ValidaCpf('111.111.111-11'); // invalido
const cpf2 = new ValidaCpf('005.938.742-42'); // valido
const cpf3 = new ValidaCpf('005.938.742-43'); // invalido

console.log(cpf.valida());
console.log(cpf2.valida());
console.log(cpf3.valida());
