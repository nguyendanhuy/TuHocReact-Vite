const TodoData = (props) => {
    // let name = props.name;

    // const { name: fullname, age, data } = props;
    const { toDoList, deleteTodo } = props;
    // console.log(">>> check props: ", props);
    const handleClick = (id) => {
        deleteTodo(id);
    };
    return (
        <div className="todo-data">
            {toDoList.map((item) => {
                // console.log(item, index)
                //Nen su dung key tu back end hoac tu generate tu truoc
                return (
                    <div style={{ display: "flex", justifyContent: "space-between" }} key={item.id}>
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }} onClick={() => {
                            handleClick(item.id);
                        }} >Delete</button>
                    </div>
                )
            })}
        </div >
    );
}
export default TodoData