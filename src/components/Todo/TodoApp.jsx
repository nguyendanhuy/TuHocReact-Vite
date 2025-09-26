import { useState } from 'react'
//Khi import css chỉ cần import trực tiếp như thế này là được.
import './Todo.css'
import TodoNew from './TodoNew'
import TodoData from './TodoData'
import reactLogo from '../../assets/react.svg'
function TodoApp() {
    const [toDos, setToDos] = useState([
        // { id: 1, name: "Learning react" },
        // { id: 2, name: "Learning ts" }
    ]);
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
    )
}
export default TodoApp
