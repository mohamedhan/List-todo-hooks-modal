import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 0,isCompleted:false, text: "mohamed" },
    { id: 3,isCompleted:false, text: "hejer" },
    { id: 2,isCompleted:false, text: "karim" },
  ]);
  // 111111
  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index));
  };

  const handleComplete=(id)=>{
    setTodos(todos.map(todo=>
        todo.id===id? {...todo,isCompleted:!todo.isCompleted}  : todo
      ))
  }
const handleEdit=(id,editedText)=>{
  setTodos(todos.map(todo=> todo.id===id ? {...todo,text:editedText} : todo ))
}

  return (
    <div className="App">
      {/* 222222 */}
      <InputTodo handleAdd={handleAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
