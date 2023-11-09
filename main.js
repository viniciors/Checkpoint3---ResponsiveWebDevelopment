document.querySelector('button').addEventListener('click', function(){
    const peso = parseFloat(document.querySelector('.js-peso').value);
    const altura = parseFloat(document.querySelector('.js-altura').value);
    const imc = peso / (altura * altura);
    
    document.querySelector('.resultado').innerText = `O seu índice IMC é ${imc.toFixed(2)}`;
});

