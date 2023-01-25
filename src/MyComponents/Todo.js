function Todo(props) {
  let todoStyle = {
    border: "2px solid black",
    padding: 10,
  };
  return (
    <div className=" text-center my-4" style={todoStyle}>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          props.onDelete(props.todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
