import GeraCpf from './modules/geraCpf.JS';

import './assets/css/style.css';

(function() {
    const gera = new GeraCpf();
    const cpf = document.querySelector('.cpf-gerado');
    cpf.innerHTML = gera.geraNovoCpf();
})();