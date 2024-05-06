import './App.css.scss';
import { useState } from 'react';
import TodoList from "./TodoList";
import TaskInput from "./TaskInput";
import Header from "./Header";
import {
  TodoTextType,
  TodosType
} from './types';

function App() {
  const [todos, hadleSetToDos] = useState<TodosType>([]);
  const [text, hadleSetText] = useState<TodoTextType>('');

  const handleUpdateTodos = (text: string) => {
    hadleSetToDos([
      ...todos, {
        id: new Date().toISOString(),
        text,
        isCompleted: false
      }
    ]);
  }

  const handleAddTodo = () => {
    if(text.trim().length !== 0){
      handleUpdateTodos(text)
      hadleSetText('');
    }
  };

  const handleRemoveTodo = (todoId: string) => {
    hadleSetToDos(todos.filter((todo) => todo.id !== todoId))
  }

  const handelToggleTodoComplete = (todoId: string) => {
    hadleSetToDos(todos.map((todo) => {
      if(todo.id !== todoId){
        return todo;
      }
      
      return {
        ...todo,
        isCompleted: !todo.isCompleted
      }
    }))
  }

  return (
    <div className="app">
      <Header />
      <TaskInput text = {text} onAddTodo = {handleAddTodo} onSetText = {hadleSetText} />
      <TodoList todos={todos} onToggleTodoComplete={handelToggleTodoComplete} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default App;
