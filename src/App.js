import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { useEffect, useState } from "react";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todoData, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    // Deleting in this way in react doesn't work
    // let index = todoData.indexOf(todo);
    // todoData.splice(index, 1);
    setTodos(
      todoData.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todoData));
  };

  const handleAdd = (new_title, new_desc) => {
    let new_sno = todoData.length + 1;
    const new_Todo = { sno: new_sno, title: new_title, desc: new_desc };
    setTodos([...todoData, new_Todo]);
    console.log(new_Todo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <>
      <Header title="Todos List" searchBar={true} />

      <AddTodo handleAdd={handleAdd} />
      <Todos todos={todoData} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

//useState() small program
// import React, { useState } from "react";

// function App() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
// export default App;
