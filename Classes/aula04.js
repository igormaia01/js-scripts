class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume  = 0;
    }

    aumentarVolume() {
        this.volume++;
    }

    diminuirVolume() {
        this.volume--;
    }
    // somente acessado pela classe e não pela instancia
    static trocaPilha() {
        console.log("Troca de pilha");	
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)

ControleRemoto.trocaPilha()