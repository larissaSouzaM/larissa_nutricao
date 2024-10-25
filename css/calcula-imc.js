if(pesoEhValido && alturaEhValida){
var imc = calculaImc(peso, altura);
tdImc.textContent = imc;
  
}
function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura)
  return imc.toFixed(2);
}
