import { useState } from "react"
import style from '../style/List.module.scss'

function List(){

const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');

function handleInput(event){
    setNewTask(event.target.value);
}

function addTask(){
    if(newTask.trim() !== ""){
        setTasks(t=>[...t, newTask]);
        setNewTask('');
    }
}

function deleteTask(value) {
    setTasks((oldValues) => {
     return oldValues.filter((tasks) => tasks !== value);
     });
  }

   function deleteAll(){
     setTasks([])
   }



    return(
    <div className={style.container}>
        <h1>To Do</h1>
    <div className={style.content}>
        <div className={style.inputt} >
        <input 
            onChange={handleInput} 
            type="text" 
            name="todo" 
            value={newTask}/>
        <button
             className={style.addButton}
             onClick={addTask}
             > <span className={style.circle}>+</span> <span className={style.newText}>add new</span>  
        </button>
        </div>
       
        <ul className={style.list}>
            {tasks.map((t, index) => 
            <li key={index}>
                <span className={style.text}>{t}</span>
                <button 
                   className={style.delete}
                   onClick={()=> deleteTask(t)}>
                   -
                </button>
            </li>)}
        </ul>
       
        <button className={style.delete_all}
                    onClick={()=>deleteAll()}  >
                    Delete All
        </button>
    </div>
    </div>
    

)}
export default List