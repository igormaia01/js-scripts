class ValidaCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: true,
            configurable: true,
            enumerable: true,
            value: cpf.replace(/[^\d]+/g, '')
        })
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia()) return false
        return this.geraNovoCpf()
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        if(novoCpf == this.cpfLimpo) return true
        return false
    }

    static criaDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let i = 0; i < cpfParcial.length; i++) {
            total += cpfParcial.charAt(i) * reverso;
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}

const validacpf = new ValidaCpf('005.938.742-42'); // valido

validacpf.valida()

if(validacpf.valida()){
    console.log('CPF valido')
}else {
    console.log('CPF invalido')
}