import { FunctionComponent, useEffect, useState } from "react";
// import './exampleLocalStorage.css';
import './exampleLocalStorage.scss';

interface ITask{
  id: string;
  name: string;
  completed: boolean;
}

export const ExampleLocalStorage: FunctionComponent = () => {
  const localStorageTasks = JSON.parse(localStorage.getItem("tasks") || '[]');
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>(localStorageTasks || [{
    id: "1",
    name: 'Task 1',
    completed: false
  },
  {
    id: "2",
    name: 'Task 2',
    completed: false
  }]);

  const onAdd = () => {
    if(newTask.trim().length > 0){
      setTasks((prevValue) => [...prevValue, {
        name: newTask.trim(),
        completed: false,
        id: new Date().toISOString()
      }])
      setNewTask('');
    }
  }

  const onDelete = (id: string) => {
    setTasks((prevValue) => prevValue.filter(task => task.id !== id))
  }

  const onCheck = (id: string) => {
    setTasks((prevValue) => prevValue.map(task => {
      if(task.id === id){
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    }))
  }

  useEffect(() => {
    const convertedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", convertedTasks);
    sessionStorage.setItem("tasks", convertedTasks);
  }, [tasks])

  return <div style={{width: 500, border: '2px solid black', padding: 8}}>
    <p style={{textAlign: 'center', fontSize: 36, fontWeight: 'bold', marginBottom: 16}}>Example Local Storage</p>
    <div id="form" style={{display: 'flex', justifyContent: 'center', marginBottom: 16}}>
      <input type="text" placeholder="Ingresa tu task" value={newTask} onChange={(e) => setNewTask(e.target.value)}
        style={{height: 30, borderRadius: '8px 0 0 8px', paddingLeft: 8}} />

      <button style={{padding: 8, 
        background: '#0DCBF7', 
        height: 30,
        border: 'none', 
        borderRadius: '0 8px 8px 0'}}
        onClick={() => onAdd()}
      >
          Agregar
      </button>
    </div>
    <ul id="tasks" >
      {tasks.map(task => (
        <li key={task.id} style={{display: 'flex', gap: 16}}>
          <input type="checkbox" checked={task.completed} onChange={() => onCheck(task.id)} />
          <p style={task.completed ? {textDecoration: 'line-through', width: 180}: {width: 180}}>{task.name}</p>
          <button 
            id="buttonDelete"
            onClick={()=> onDelete(task.id)}
          >
            X</button>
        </li>
      ))}
    </ul>
  </div>
}