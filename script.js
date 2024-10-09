document.addEventListener('DOMContentLoaded', function() {
    const tarefa = document.getElementById('tarefa');
    const btAdd = document.getElementById('btAdd');
    const listaTarefas = document.getElementById('listaTarefas');

    btAdd.addEventListener('click', function() {
        const tarefaTxt = tarefa.value.trim();
        if (tarefaTxt !== '') {
            addTarefa(tarefaTxt);
            tarefa.value = '';
        }
    });
//teste
    function addTarefa(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        li.addEventListener('click', function() {
            li.classList.toggle('completo');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('btDeletar');

        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            listaTarefas.removeChild(li);
        });

        li.appendChild(deleteBtn);
        listaTarefas.appendChild(li);
    }
});
