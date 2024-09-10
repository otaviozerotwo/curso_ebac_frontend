$(document).ready(function() {
  $('#form-lista-tarefas').on('submit', function(e) {
    e.preventDefault();
    
    const inputTarefa = $('#nome-tarefa').val();
    
    if (inputTarefa) {
      adicionarTarefa(inputTarefa);
      limparInput();
      riscarTarefa();
    }
    
  });
});

function adicionarTarefa(tarefa) {
  const novaTarefa = $(`<li>${tarefa}</li>`);
  $(novaTarefa).appendTo('#lista-tarefas');
}

function limparInput() {
  $('#nome-tarefa').val('');
}

function riscarTarefa() {
  $('li').on('click', function() {
    $(this).css({"text-decoration": "line-through"});
  });
}