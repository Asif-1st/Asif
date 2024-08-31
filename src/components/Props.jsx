import { useState } from 'react';
import {PropTypes} from 'prop-types';

function Props(props) {
    const catagory = props.catagory;

    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        if(e.target.value == '' ) {
            setName("type your name")
        } else if(e.target.value.length > 6){
            setName('your user name is too lenghty');
        }
    }

    const [tasks, setTasks] = useState(["name", "age", "birth"]);
    const [newTask, setNewTask] = useState("");
    const todoValue = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks((t) => {
                return(
                    [...t, newTask]
                )
            });
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => {
                i !== index
        })
        setTasks(updatedTask);
    }

  return (
    <div>
        <h1>{catagory}</h1>
        <input onChange={handleNameChange} />
        <p>{name}</p>


        <div className=' flex flex-col justify-center items-center'>
            <h1>todo list</h1>
            <div>
                <input type="text" onChange={todoValue} className=' border-2'/>
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {
                    tasks.map((task, index) => {
                        return(
                            <li key={index}>
                                <span>{task}</span>
                                <button onClick={deleteTask}>delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

Props.propTypes = {
    catagory: PropTypes.string.isRequired,
}

export default Props