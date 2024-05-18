
import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';

const App = () => {
  const initialTodos = [
    { title: 'Задача 1', completed: false },
    { title: 'Задача 2', completed: true },
  ];

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <TodoList initialTodos={initialTodos} />
    </div>
  );
};

export default App;
