function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        cliqueBotoes() {
            document.addEventListener('click', (event) => {
                const elemento = event.target;

                if(elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(elemento.classList.contains('btn-eq') ){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm(){
            this.display.value.slice(0, -1)
        },
        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta);

                if(!conta){
                    alert('Não é possível realizar a conta');
                    return
                }

                this.display.value = conta
            } catch (error) {
                alert('Não é possível realizar a conta');
                return
            }
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();