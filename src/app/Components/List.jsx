import { useState } from 'react'

const List = () => {

const [work,setWork] =useState("")
const [task,setTask] =useState([])

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(task);
  setTask([...task,{work}]);
  setWork("");
}
const handleDlt = (i)=>{
  let dltTask = [...task]
  dltTask.splice(i,1)
  setTask(dltTask)
}
 
let disptask = <h2 className="font-mono">Write Something.... </h2>;
if(task.length>0){
  disptask = task.map((t,i)=>{
    return(
    <li className='flex items-center justify-between'>
      <h4>{t.work}</h4>
      <button className='bg-red-500 text-white py-2 px-4 mt-2 hover:bg-white hover:text-red-500' onClick={()=>
        {handleDlt(i)}}>  Delete</button>
    </li>
  );
})
}
  return (
    <div>
      <h2 className="bg-blue-300 text-gray-700 p-2 font-bold text-center text-3xl">My Todos</h2>
      <form className='flex flex-row min-h-min justify-center items-center my-20' onSubmit={handleSubmit}>
        <input type="text" className='outline-none border-2 border-blue-900 w-4/12 rounded py-2 m-4' placeholder="Add Task" value={work} onChange={(e) => {
        setWork(e.target.value)
        }}/>
        <button className='bg-blue-500 py-2 font-semibold px-3 text-white rounded-sm border hover:bg-white hover:text-blue-600 hover:border-gray-400'>Add Task</button>
      </form>
      <div className='bg-blue-300 w-6/12 py-4 p-5 ml-80 rounded hover:bg-blue-300'>
            <ul>
               {disptask}
            </ul>
      </div>
    </div>
  )
}

export default List