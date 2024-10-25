var titulo = document.querySelector(".titulo");
titulo.textContent = "Laer Nutrição";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < 5; i++){
  /*console.log(pacientes[i]);*/

  var tdPeso = pacientes[i].querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[i].querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var tdIMC = pacientes[i].querySelector('.info-imc');

  var pesoEnValido = true;
  var alturaEnValida = true;

  if(peso <= 0 || peso >= 600){
    tdIMC.textContent = "Peso inválido ";
    pesoEnValido = false;
    pacientes[i].classList.add('dados-invalidos');
  }

  if(altura <= 0 || altura > 2.80){
    tdIMC.textContent = "Altura inválido ";
    alturaEnValida = false
    pacientes[i].classList.add('dados-invalidos');
  }

  if (pesoEnValido && alturaEnValida){
    var imc = peso / (altura*altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}

titulo.addEventListener('click', mostrarMensagem);

function mostrarMensagem (){
  /*console.log("O título foi clicado");*/
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
  event.preventDefault();
  
  var form = document.querySelector('#form-adiciona');
  var nomeAdicionar = form.nome.value;
  var pesoAdicionar = form.peso.value;
  var alturaAdicionar = form.altura.value;
  var gorduraAdicionar = form.gordura.value;
  
 /*console.log(form.nome.value);
  console.log(form.peso.value);
  console.log(form.altura.value);
  console.log(form.gordura.value);*/
  
  var pacienteTr = document.createElement('tr');
  /*console.log(pacienteTr);*/
  
  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd = document.createElement('td');
  
  
  nomeTd.textContent = nomeAdicionar;
  pesoTd.textContent = pesoAdicionar;
  alturaTd.textContent = alturaAdicionar;
  gorduraTd.textContent = gorduraAdicionar;
  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  
  var tabela = document.querySelector('#tabela-pacientes');
  
  tabela.appendChild(pacienteTr);
});
