$(document).ready(function() {
  $('#form-lista-tarefas').on('submit', function(e) {
    e.preventDefault();
    
    const inputTarefa = $('#nome-tarefa').val();
    
    const novaTarefa = `<li class="tarefa">${inputTarefa}</li>`;
    $('#lista-tarefas').append(novaTarefa);

    $('.tarefa').click(function() {
      $('.tarefa').css("text-decoration", "line-through");
    });

    $('#nome-tarefa').val('');
  });
});