import SunIcon from '../assets/images/icon-sun.svg';
import MoonIcon from '../assets/images/icon-moon.svg';
import { useState } from 'react';

function AddTask({title, tasks, text, setTasks, setText}) {
    const [theme, setTheme] = useState(MoonIcon);

    const changeTheme = () => {
        const div = document.querySelector("div.todo-header").parentElement;
        if(theme === SunIcon) {
            setTheme(MoonIcon);
            div.classList.add("light-theme");
            div.classList.remove("dark-theme");
        } else {
            setTheme(SunIcon);
            div.classList.add("dark-theme");
            div.classList.remove("light-theme");
        }
    }

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(text.length === 0) {
            return;
        }

        const newTask = {
            id: Date.now(),
            checked: false,
            text
        };

        setTasks(tasks.concat(newTask));
        setText('');
    }

    return(
        <div className='container'>
            <div className='title'>
                <h1>{title}</h1>
                <img src={theme} alt="Theme Icon" onClick={changeTheme}/>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <input
                        id="id"
                        type="task"
                        placeholder='Add new task...'
                        onChange={handleChange}
                        value={text}
                    />
                </form>
            </div>
        </div>
    )
}

export default AddTask;