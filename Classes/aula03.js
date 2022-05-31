class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log("O dispositivo já está ligado");
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log("O dispositivo já está desligado");
            return;
        }
        this.ligado = false;
    }
}

class Smarthphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar() {
        console.log("Ligando o tablet");
    }
}

const m1 = new Smarthphone("Samsung", "Azul", "S10");
const t1 = new Tablet("IKEA", "Preto", "IKEA");

t1.ligar()

m1.ligar()

class Carro {
    constructor(rodas, direcao, ano) {
        this.rodas = rodas;
        this.direcao = direcao;
        this.ano = ano;
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log("O carro já está ligado");
            return;
        }
        console.log("Ligando o carro");
        this.ligado = true;
    }
}

class Palio extends Carro {
    constructor(rodas, direcao, ano, cor, modelo) {
        super(rodas, direcao, ano);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const palio = new Palio('liga leve', 'eletrica', '2020', 'branco', 'palio');

palio.ligar()   

console.log(palio)