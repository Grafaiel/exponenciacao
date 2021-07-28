function meuEscopo() {
    const calcula = document.querySelector('#calcula');
    calcula.addEventListener("click", eleva);
    const result = document.querySelector('.result');
    
    function eleva() {
        const inputBase = Number(document.querySelector('#base').value);
        const inputExpoente = Number(document.querySelector('#expoente').value);
        result.style.backgroundColor = "var( --primary-color-darker)";
        let conta;
        if (!inputExpoente) {
            conta = Math.pow(inputBase, 2);
        } else {
            conta = Math.pow(inputBase, inputExpoente);
        }
        return result.innerHTML = conta;
    }
    
    result.innerHTML = '';
}
meuEscopo();