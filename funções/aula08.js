function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter 
        set nomeCompleto(nomeCompleto) {
            nomeCompleto = nomeCompleto.split(' ');
            this.nome = nomeCompleto.shift();
            this.sobrenome = nomeCompleto.join(' ');
        },
        fala(assunto){
            return `${this.nome} ${this.sobrenome} diz: ${assunto}`
        },
        altura,
        peso,
        // Getter
        get imc(){
            return (this.peso / (this.altura * this.altura)).toFixed(2)
        }
    }
}

const p1 = criaPessoa('João', 'Silva', 1.8, 80)

console.log(p1.fala('Oi'))
console.log(p1.imc)
p1.nomeCompleto = 'João da Silva sauro'
console.log(p1.nomeCompleto)