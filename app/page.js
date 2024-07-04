"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const  submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask , { title , desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  let renderTask = <h2>No Task available</h2>
  
  const deleteHandler = (i) => {
     let copytask = [...mainTask]
     copytask.splice(i , 1)
     setmainTask(copytask)

  }
   
  if (mainTask.length > 0) {
    renderTask =  mainTask.map((t , i) => {
      return <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button 
          onClick={() => {
            deleteHandler(i)
          }}
          className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    })
  }

 
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Amitoj's Todo-List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='px-2 py-2 border-2 rounded-lg border-zinc-800 m-8' 
      placeholder='Enter Title'
      value={title}
      onChange={(e) => {
        settitle(e.target.value)
      }}
      />
      <input type="text" className='px-2 py-2 border-2 rounded-lg border-zinc-800 m-8' 
      placeholder='Enter Description Here'
      value={desc}
      onChange={(e) => {
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-2 text-xxl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>
    </div>
    </>
  )
}

export default page