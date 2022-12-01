function ManageTasks({tasks, setTasks}) {
    const deleteCompleted = () => {
        const clearedTasks = tasks.filter(item => !item.checked);
        setTasks(clearedTasks);
    }

    const showTasksState = (e) => {
        const tasksItems = document.getElementsByClassName("task");
        tasks.forEach((item, index) => {
            const isActive = e.target.id === "active" ? item.checked : !item.checked;
            isActive ? 
            tasksItems.item(index).classList.add('task-hidden') :
            tasksItems.item(index).classList.remove('task-hidden');
        })    
    }

    const showAllTasks = () => {
        const tasksItems = document.getElementsByClassName("task");
        tasks.forEach((item, index) => {
            if(tasksItems.item(index).classList.contains("task-hidden")) {    
                tasksItems.item(index).classList.remove('task-hidden');
            }
        })
    }

    return(
        <div className="container">
            <div className="manage">
                <span>{tasks.length} items left</span>
                <ul>
                    <li onClick={showAllTasks}>All</li>
                    <li id="active" onClick={showTasksState}>Active</li>
                    <li id="completed" onClick={showTasksState}>Completed</li>
                </ul>
                <span className="clear" onClick={deleteCompleted}>Clear Completed</span>
            </div>
        </div>
    )
}

export default ManageTasks;