"use client"

import React, { useState } from "react";

const page = () => {
  const[title,settitle]=useState("")
  const [des,setdes]=useState("")
  const [task , setTask] = useState([])


  const handleSubmit =(e)=>{
    e.preventDefault();
    setTask([...task,{title,des}]);
    settitle("")
    setdes("")
    console.log(task)
  }


  const deleteHandler =(i)=>{
    let copytask = [...task]
    copytask.splice(i,1)
    setTask(copytask)
  }


  let dispTask = <h2>No Task Available</h2>;
 
  if(task.length>0){
   dispTask = task.map((t, i)=>{                   //t=task's value to be added & i = index number
    return(
      <li  className="flex items-center justify-between">
       <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className="text-xl font-semibold">{t.title}</h5>
        <h6 className="text-xl font-semibold">{t.des}</h6>
        </div>
        <button className="bg-red-500 text-white px-3 py-2 rounded font-bold" onClick={()=>
         { deleteHandler(i)}}>Delete</button>
      </li>
    );
   })
  }
  
  return (
    <div>
      <h1 className='bg-black text-center text-white p-5 font-bold'>To-Do-List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' className='text-2xl border-2 border-indigo-700 outline-none px-3 py-2' placeholder='Enter Your Task' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <input type='text' className='text-2xl border-2 m-6 border-indigo-700 outline-none px-3 py-2' placeholder='Enter Description Task' value={des} onChange={(e)=>{
          setdes(e.target.value)
        }}/>    
        <button className='bg-black text-white py-2 px-3 text-2xl rounded-full'>Add Task</button>      
      </form>
      <hr/>
      <div className="bg-slate-300 p-4">
        <ul>
             {dispTask}
        </ul>
      </div>
    </div>
  )
}

export default page