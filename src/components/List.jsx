import { useState } from "react"

function List(){

const [task, setTask] = useState('');
const [text, setText] = useState([]);

setText(task=>[...task,text] )

const taskHandle = (e) => {
    setTask(e.target.value) };



    return(
        <>
    <form className="form" >
        <input onChange={taskHandle} type="text" name="todo" value={task}/>
    </form>
        <button > + add new </button>
        </>
    ) 

}
export default List