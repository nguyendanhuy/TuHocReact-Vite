const TodoData = (props) => {
    // let name = props.name;

    const { name: fullname, age, data } = props;
    const { toDoList } = props;
    console.log(">>> check props: ", props);
    return (
        <div className="todo-data">
            {toDoList.map((item, index) => {
                // console.log(item, index)
                return (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
            <div>
                {JSON.stringify(toDoList)}
            </div>
        </div>
    );
}
export default TodoData