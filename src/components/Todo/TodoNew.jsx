import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Hello");
    let { addNewToDo } = props;
    // addNewToDo("Danhuy");

    const handleClick = () => {
        // console.log(">>> check valueInput", valueInput);
        addNewToDo(valueInput);
        setValueInput("");
    }
    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='Todo-new'>
            <input
                type='text'
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}>Add
            </button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    );
}
export default TodoNew