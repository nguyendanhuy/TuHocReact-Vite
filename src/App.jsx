import { useState } from 'react'
import './components/Todo/Todo.css'
import TodoNew from './components/Todo/TodoNew'
import TodoData from './components/Todo/TodoData'
import reactLogo from './assets/react.svg'
function App() {
  const [toDos, setToDos] = useState(
    [{ id: 1, name: "Learning react" },
    { id: 2, name: "Learning ts" }]);
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
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        toDoList={toDos}
      >
      </TodoData>
      <div className='todo-img'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
