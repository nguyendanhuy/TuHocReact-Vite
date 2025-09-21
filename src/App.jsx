import { useState } from 'react'
import './components/Todo/Todo.css'
import TodoNew from './components/Todo/TodoNew'
import TodoData from './components/Todo/TodoData'
import reactLogo from './assets/react.svg'
function App() {
  const [count, setCount] = useState(0)
  const hoidanit = "eric nguyen";
  const age = 25;
  const data = {
    name: "eric",
    age: 25
  }
  const addNewToDo = (name) => {
    console.log(`Call me ${name}`);
  }

  addNewToDo();
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo} />
      <TodoData name={hoidanit}
        age={age}
        data={data}
      >
      </TodoData>
      <div className='todo-img'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
