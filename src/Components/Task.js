import Tile from "./Tile"
//const tasks = [{ id: 1, text: 'this', day: 'toaday', reminder: false },{ id: 2, text: 'this', day: 'toaday', reminder: false },{ id: 3, text: 'this', day: 'toaday', reminder: false }];
const Task = (props) => {
    
    return (
       // setTasks[...]
        <>
{props.tasks.map((task)=>(<Tile key={task.id} task = {task} onDelete={props.onDelete}/>))}
        </>
    )
}

export default Task
