const form = document.getElementById('formComparaValores');
let formEhValido = false;
const inputCampoA = document.getElementById('campoA');
const inputCampoB = document.getElementById('campoB');

function compararValores(campoA, campoB) {
  if (campoB > campoA) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const valorCampoA = parseInt(inputCampoA.value);
  const valorCampoB = parseInt(inputCampoB.value);

  const mensagemSucesso = `O valor <b>${valorCampoB}</b> é maior do que <b>${valorCampoA}</b>`;
  const mensagemErro = `O valor <b>${valorCampoB} é menor do que <b>${valorCampoA}</b>`;

  const containerMensagemSucesso = document.querySelector('.success-message');
  const containerMensagemErro = document.querySelector('.error-message');

  formEhValido = compararValores(valorCampoA, valorCampoB);

  if (formEhValido) {
    containerMensagemErro.style.display = 'none';
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    inputCampoA.value = '';
    inputCampoB.value = '';
    
  } else {
    containerMensagemSucesso.style.display = 'none';
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'block';

    inputCampoA.value = '';
    inputCampoB.value = '';
  }
});
