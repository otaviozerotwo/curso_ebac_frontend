$(document).ready(function() {
  $('#form-lista-tarefas').on('submit', function(e) {
    e.preventDefault();
    
    const inputTarefa = $('#nome-tarefa').val();
    
    const elementoLi = `<li>${inputTarefa}</li>`;
    $('#lista-tarefas').append(elementoLi);
  });
});