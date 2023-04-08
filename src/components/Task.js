import sound from "./assets/comp.wav"

const Task = (props)=>{


    return (
        <div className='task-container'>
            <div className='task-info d-flex'>
                <div className='task-complete'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=> {props.taskCompleted(props.id)}} />
                </div>
                    <p className={`task-title mx-3 ${props.completed ? "task-comp" : "task-not-comp"}`}>
                        {props.taskName}
                    </p>
            </div>
        <div>
            <button className='btn btn-color btn-del' onClick={()=>props.delTask(props.id)}><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    )
}

export default Task