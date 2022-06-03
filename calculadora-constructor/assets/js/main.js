class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.fieldAreValid();
        const senhasValidas = this.validaSenhas();

        if(validFields && senhasValidas) {
            console.log('Formulario enviado com sucesso');
            this.formulario.submit();
        }
    }

    validaSenhas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha').value;
        const confirmaSenha = this.formulario.querySelector('.repetir-senha').value;
        console.log(senha, confirmaSenha)
        if(senha !== confirmaSenha){
            valid = false
            this.criaErro(senha, 'As senhas nao conferem');
        }
        
        if(senha.length < 6 || senha.length > 12) {
            valid = false
            this.criaErro(senha, 'A senha deve ter entre 6 e 12 caracteres');
        }

        return valid
    }

    fieldAreValid() {
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                this.criaErro(campo, `O campo ${label} nao pode ser em branco`);
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'O usuario deve ter entre 3 e 12 caracteres');
             valid =  false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/)) {
            this.criaErro(campo, 'O usuario deve conter apenas letras e numeros');
            valid = false
        }

        return valid
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido');
            return false;
        }
        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();