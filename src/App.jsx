import React , {useState} from 'react'
import Input from "./components/Input.jsx"

function App() {
  const [taskList , setTaskList] = useState([]);
  console.log(taskList);
  return (
    <>
      <h1>ToDo - APP</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <div>
        {taskList.map((task ,index) =>
          <li key={index}>{task}</li>
        )}
      </div>
    </>
  )
}

export default App
