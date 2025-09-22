import { useState } from 'react'
//Khi import css chỉ cần import trực tiếp như thế này là được.
import './components/Todo/Todo.css'
import TodoNew from './components/Todo/TodoNew'
import TodoData from './components/Todo/TodoData'
import reactLogo from './assets/react.svg'
import Header from './components/Layout/header'
import Footer from './components/Layout/footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [toDos, setToDos] = useState([
    // { id: 1, name: "Learning react" },
    // { id: 2, name: "Learning ts" }
  ]);

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
  const deleteTodo = (id) => {
    console.log("check id", id);
    //dùng {} trong arrow function thi phải có return 
    const newToDo = toDos.filter((value) => { return value.id !== id })
    setToDos(newToDo);
  }
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>

        <TodoNew addNewToDo={addNewToDo} />
        {/* Dau && o day khong co nghia la and mà mang nghĩa là if else trong jsx 
      Cách dùng: điều kiện && [code nếu đk đúng]*/}

        {/* {toDos.length > 0 && <TodoData toDoList={toDos} />}

      {toDos.length === 0 ?
        <div className='todo-img'>
          <img src={reactLogo} className='logo' />
        </div> : <div></div>
      } */}
        {
          toDos.length > 0 ?
            <TodoData
              toDoList={toDos}
              deleteTodo={deleteTodo} />
            :
            <div className='todo-img'>
              <img src={reactLogo} className='logo' />
            </div>
        }
      </div >
      <Outlet />
      <Footer />
    </>
  )
}
export default App
