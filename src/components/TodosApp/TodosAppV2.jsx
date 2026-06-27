import { useState } from "react";

function TodosApp(){
    const [taskId,setTaskId] =useState(101);
    const [task,setTask]=useState('');
    const [taskList,setTaskList]=useState([]);
    const [taskErr,setTaskErr]=useState('');
    const addTask=()=>{
        if(!task){
            setTaskErr('Task should not be empty.')
            return ;
        }
        setTaskId((taskId)=>taskId+1);
       const taskObj={
            taskId,
            task,
            taskStatus:'active'
        }
        setTaskList([...taskList,taskObj]);
        console.log(taskList);
        setTask('');
        setTaskErr('');
    }
    const deleteTask=(id)=>{
        // alert(id)
        // let tasks=taskList.filter((el,ind)=>ind!=id)
        let taskObj =taskList.find(el=>el.taskId==id)
        // taskObj={...taskObj,status:'closed'};
        // console.log(taskObj);
        taskObj.status='closed';
        setTaskList([...taskList]);
        console.log(taskList);
        
    }
    return(
        <div>
            <h2>Todos App </h2>
            <div>
                <div className="row">
                    <div className="col-3 text-end"><label htmlFor="">Enter Task:</label></div>
                    <div className="col-6"><input type="text" className="form-control" 
                    value={task} onChange={e=>setTask(e.target.value)}/>
                    <p className="text-danger">{taskErr}</p></div>
                    <div className="col-3 text-start"><button className="btn btn-primary" onClick={addTask}>Add Task</button></div>
                </div>
            </div>
            {taskList?.length>0 && 
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
                taskList.map(taskObj=>{
                    return <tr key={taskObj.taskId}>
                        <td>{taskObj.taskId}</td>
                        <td>{taskObj.task}</td>
                        <td><button className="btn btn-danger" 
                        
                        disabled={taskObj?.status=='closed'}
                        onClick={()=>deleteTask(taskObj.taskId)}>Done</button></td>
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