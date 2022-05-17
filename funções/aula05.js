function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('igor');
const funcao2 = retornaFuncao('igor 2');
//ambas funções possuem seus closures e são independentes uma da outra, o closure seria informações que ela tem acesso
console.dir(funcao);
console.dir(funcao2);
console.log(funcao());
console.log(funcao2());
