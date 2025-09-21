const TodoNew = (props) => {
    let { addNewToDo } = props;
    // addNewToDo("Danhuy");
    const handleClick = () => {
        alert("Click me");
    }
    const handleOnChange = (name) => {
        console.log(">>> handle onchange", name);

    }
    return (
        <div className='Todo-new'>
            <input type='text'
                onChange={(event) => { handleOnChange(event.target.value) }}></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}>Add
            </button>
        </div>
    );
}
export default TodoNew