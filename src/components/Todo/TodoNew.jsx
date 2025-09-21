const TodoNew = (props) => {
    let { addNewToDo } = props;
    addNewToDo("Danhuy");
    return (
        <div className='Todo-new'>
            <input type='text'></input><button>Add</button>
        </div>
    );
}
export default TodoNew