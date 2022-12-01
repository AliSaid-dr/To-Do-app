import { useState } from "react";
import AddTask from "./components/AddTask";
import ShowTasks from "./components/ShowTasks";
import ManageTasks from "./components/ManageTasks";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]),
        [text, setText] = useState('');

  return (
    <div className="light-theme">
      <div className="todo-header">
        <AddTask title="T O D O" tasks={tasks} text={text} setTasks={setTasks} setText={setText}/>
      </div>
      <div className="todo-body">
        <ShowTasks tasks={tasks} setTasks={setTasks}/>
        {tasks.length ? <ManageTasks tasks={tasks} setTasks={setTasks}/> : null}
      </div>
    </div>
  )
}

export default App;