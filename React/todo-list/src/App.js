import React, { useState } from 'react';
import Todo from './components/Todo';
import DisplayTodo from './components/DisplayTodo';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);



  return (
    <div  style={{textAlign: "center"}}>
      <Todo 
      todoList={todoList}
      setTodoList={setTodoList}
      />


      <DisplayTodo 
      todoList={todoList}
      setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
