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
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    }
    //Khong nen tac dong truc tiep len state
    setToDos([...toDos, newToDo]);
  }
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
