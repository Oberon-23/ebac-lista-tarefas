$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val().trim();
        
        if (novaTarefa !== "") {
            const novoItem = $('<li></li>').text(novaTarefa);
            novoItem.appendTo('#lista-tarefas');
            $('#nova-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});
