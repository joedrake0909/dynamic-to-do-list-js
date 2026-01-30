document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    function addTask() {
        // Function to get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
            // Exit the function if input is empty
        }

        const li =  document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function() {
            taskList.removeChild(li);
        }

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';

        

        taskInput.addEventListener('keypress',function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        


    }
    addButton.addEventListener('click', addTask);

    document.addEventListener('DOMContentLoaded', addTask);
    




});