import React, { useState } from 'react'
import Input from "./components/Input.jsx"
import Board from "./components/Board.jsx"

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className='px-12'>
      <div className='flex flex-col items-center justify-center py-8 gap-4'>
        <h1 className='font-semibold text-xxl'>ToDo - APP</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
        {taskList.map((task, index) =>
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      </div>
    </div>
  )
}

export default App
