import CrossIcon from '../assets/images/icon-cross.svg';

function ShowTasks({tasks, setTasks}) {
    const onChangeCheck = e => {
        tasks.forEach(item => {
            if(item.id === Number(e.target.id)) {
                item.checked = !item.checked;
                toggleClass(item.id);
            }
        })
    }

    const toggleClass = (id) => {
        document.querySelector("div[id='" + id + "'] span").classList.toggle('check-completed');
        document.querySelector("div[id='" + id + "'] p").classList.toggle('text-completed');
    }

    const handleDelete = e => {
        const filteredTasks = tasks.filter(item => item.id !== Number(e.target.id));
        setTasks(filteredTasks);
        console.log(tasks);
    }

    return(
        <div className='container'>
            {tasks.map(item => (
                <div key={item.id} className="task">
                    <div id={item.id} className="text-part">
                        <span id={item.id} className="check" onClick={onChangeCheck}></span>
                        <p>{item.text}</p>
                    </div>
                    <img id={item.id} src={CrossIcon} alt="Cross Icon" onClick={handleDelete}/>
                </div>
            ))}
        </div>
    )
}

export default ShowTasks;