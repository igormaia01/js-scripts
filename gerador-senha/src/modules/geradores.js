const rand  = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const geraMaiscula = () => String.fromCharCode(rand(65, 90));
const geraMinuscula = () => String.fromCharCode(rand(97, 122));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolo = () => simbolos[rand(0, simbolos.length - 1)];
const simbolos = '.#@!()%$#^%$&*=-{}^&'

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
    const senha =  [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maisculas && senha.push(geraMaiscula());
        minusculas && senha.push(geraMinuscula());
        numeros && senha.push(geraNumero());
        simbolos && senha.push(geraSimbolo());
    }

    return senha.join('').slice(0, qtd);
}
