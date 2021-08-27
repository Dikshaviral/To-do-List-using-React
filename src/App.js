import Header from './Components/Header';
import Task from './Components/Task';
import {useState} from 'react';
import AddTask from './Components/AddTask';

function App() {
  const [tasks, setTasks] =  useState([{ id: 1, text: 'Drink Coffee', day: 'today' },{ id: 2, text: 'Be Awesome', day: 'today' },{ id: 3, text: 'Repeat', day: 'today'}]);
  const deleteTask = (id)=>{setTasks(tasks.filter((task)=>task.id!==id))}
  const addTask = (task)=> {
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="Container">
     <Header/>
     <AddTask onAdd ={addTask}/>
   {tasks.length >0 ? <Task tasks={tasks} onDelete = {deleteTask}/> : 'All Tasks Complete'}
    </div>
  );
}

export default App;
