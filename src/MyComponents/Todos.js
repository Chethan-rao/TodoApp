import React from "react";
import Todo from "./Todo";

function Todos(props) {
  let todoStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={todoStyle}>
      <h2 className="text-center my-3">Todos List</h2>
      {props.todos.length > 0 ? (
        props.todos.map((todo) => {
          return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
        })
      ) : (
        <h4 className="text-center my-3">No Todos to display</h4>
      )}
    </div>
  );
}

export default Todos;
