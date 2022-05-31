// Super Class
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (valor <= this.saldo) {
        this.saldo -= valor
        this.verSaldo();
    } else {
        console.log('Saldo insuficiente: ' + this.saldo)
    }
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log('AG ' + this.agencia + ' Saldo: R$' + (this.saldo).toFixed(2))
}

const conta1 = new Conta(1234, 5678, 1000)

function contaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

contaCorrente.prototype.sacar = function(valor) {
    if (valor <= this.saldo + this.limite) {
        this.saldo -= valor
        this.verSaldo();
    } else {
        console.log('Saldo insuficiente: ' + this.saldo)
    }
}

Object.setPrototypeOf(contaCorrente.prototype, Conta.prototype)

const cc = new contaCorrente(11, 5678, 0, 500)

function contaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

Object.setPrototypeOf(contaPoupanca.prototype, Conta.prototype)


contaPoupanca.prototype.sacar = function(valor) {
    if (valor <= this.saldo) {
        this.saldo -= valor
        this.verSaldo();
    } else {
        console.log('Saldo insuficiente: ' + this.saldo)
    }
}

const cp = new contaPoupanca(11, 5678, 0, 500)
cp.depositar(10)
cp.sacar(10)

// Polimorfismo - Herança multipla - um método que detém funcionalidades diferentes da clase pai