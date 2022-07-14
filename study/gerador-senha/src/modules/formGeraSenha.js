import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const checkboxMaisculas = document.querySelector(".chx-maiusculas");
const checkboxMinusculas = document.querySelector(".chx-minusculas");
const checkboxNumeros = document.querySelector(".chx-numeros");
const checkboxSimbolos = document.querySelector(".chx-simbolos");

export default () => {
    addEventListener("click", (e) => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
            qtdCaracteres.value, 
            checkboxMaisculas.checked,
            checkboxMinusculas.checked, 
            checkboxNumeros.checked, 
            checkboxSimbolos.checked
        );
    return senha
}

