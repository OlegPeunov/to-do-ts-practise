import './App.css.scss';
import { useState } from 'react';
import TodoList from "./TodoList";
import TaskForm from "./TaskForm";
import Header from "./Header";
import {
  TodoTextType,
  TodoType
} from './types';

function App() {
  const [todos, setToDos] = useState<Array <TodoType> >([]);
  const [text, setText] = useState<TodoTextType>('');

  const handleAddTodo = () => {
    if(text.trim().length !== 0){
      setToDos((prevTodos) => [
        ...prevTodos, {
          id: new Date().toISOString(),
          text,
          isCompleted: false
        }
      ]);
      setText('');
    }
  };

  const handleRemoveTodo = (todoId: string) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  const handelToggleTodoComplete = (todoId: string) => {
    setToDos((prevTodos) => 
      prevTodos.map((todo) => {
        if(todo.id !== todoId){
          return todo;
        }
        
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      })
    )
  }

  return (
    <div className="app">
      <Header />
      <TaskForm text = {text} onAddTodo = {handleAddTodo} onSetText = {setText} />
      <TodoList todos={todos} onToggleTodoComplete={handelToggleTodoComplete} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default App;
