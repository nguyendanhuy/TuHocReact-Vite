const TodoData = (props) => {
    // let name = props.name;
    const { name: fullname, age, data } = props;
    console.log(">>> check props: ", props);
    return (
        <div className="todo-data">
            <div>My name is {fullname}</div>
            <div>Learning main</div>
        </div>
    );
}
export default TodoData