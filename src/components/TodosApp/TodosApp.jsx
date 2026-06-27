import { useState } from "react";

function TodosApp(){
    const [task,setTask]=useState('');
    const [taskList,setTaskList]=useState([]);
    const [taskErr,setTaskErr]=useState('');
    const addTask=()=>{
        if(!task){
            setTaskErr('Task should not be empty.')
            return ;
        }
        setTaskList([...taskList,task]);
        console.log(taskList);
        setTask('');
        setTaskErr('');
    }
    const deleteTask=(id)=>{
        let tasks=taskList.filter((el,ind)=>ind!=id)
        setTaskList([...tasks]);
    }
    return(
        <div>
            <h2>Todos app</h2>
            <div>
                <div className="row">
                    <div className="col-3 text-end"><label htmlFor="">Enter Task:</label></div>
                    <div className="col-6"><input type="text" className="form-control" 
                    value={task} onChange={e=>setTask(e.target.value)}/>
                    <p className="text-danger">{taskErr}</p></div>
                    <div className="col-3 text-start"><button className="btn btn-primary" onClick={addTask}>Add Task</button></div>
                </div>
            </div>
            {taskList.length>0 && 
            <div className="my-3"><h2>Task List</h2>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
        <tr>
            <th>SNo</th>
            <th>Task</th>
            <th>Action</th>
        </tr>
        </thead>
                <tbody className="table-primary">
                {
                taskList.map((task,ind)=>{
                    return <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{task}</td>
                        <td><button className="btn btn-danger" onClick={()=>deleteTask(ind)}>Done</button></td>
                    </tr>
                })
            }
            
                </tbody>
            </table>
        </div>
        }
        </div>
    )
}
export default TodosApp;