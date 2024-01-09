const taskInput = document.getElementById('task-input');
const addbutton = document.getElementById('add-button');
const tasklist = document.getElementById('task-list');

addbutton.addEventListener('click', function () {
    // Retrive the task from the input field
    const tasktext = taskInput.value.trim();

    // check if the task is not empty
    if (tasktext !== '') {
        //Create a new list item element
        const listItem = document.createElement('Li');

        //Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = tasktext;
        taskSpan.classList.add('task-text');

        //create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // Appent the list item to the task list
        tasklist.appendChild(listItem);

        // clear the input field
        taskInput.value = '';
    }
});

// Task deleting function

tasklist.addEventListener('click', function (event) {
    // check if the clicked element has the "delete-button" class
    if (event.target.classList.contains('delete-button')) {
        // Get the parent list item and remove it from the task list
        const listItem = event.target.parentNode;
        tasklist.removeChild(listItem);
    }
})