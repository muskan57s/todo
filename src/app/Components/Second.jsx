import React, { useState } from 'react'


function Second() {
    const [work,setWork] = useState("")
    const [task, setTask] =useState([""])

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(task)
        setTask([...task,{work}])
        setWork("")
    }
    const handleDelete = (i)=>{
        let dltTask = [...task]
        dltTask.splice(i,1)
        setTask(dltTask)
    }

    let showTask = <h2>Add Task</h2>
    if(showTask.length>0){
        showTask = task.map((t,i)=>{
            return(
                <li className='flex items-center justify-between'>
                    <h4>{t.work}</h4>
                    <button className='bg-red-500 text-pink-300 py-2 px-4 mt-2 hover:bg-white hover:text-red-500' onClick={()=>{handleDelete(i)}}>Delete</button>
                </li>
            )
            
        })
    }
  return (
    <div>
        <form className='flex flex-row min-h-min justify-center items-center my-20' onSubmit={handleSubmit}>
            <input type='text' className='outline-none w-96 py-2 m-4' placeholder='write something...' onChange={(e)=>{
                setWork(e.target.value)
            }}/>
            <button className='bg-pink-500 py-2 font-semibold px-3 text-white rounded-sm border'>Add item</button>
        </form>
        <div className='bg-pink-200 w-6/12 py-4 p-5 ml-80 rounded'>
            <ul>
                {showTask}
            </ul>
        </div>
    </div>
    
  )
}

export default Second