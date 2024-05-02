import './App.css.scss';
import { useState } from 'react';
import TodoList from "./TodoList";
import InputField from "./InputField";
import {
  TodoTextType,
  TodosType
} from './todo.data';

function App() {
  const [todos, setToDos] = useState<TodosType>([]);
  const [text, setText] = useState<TodoTextType>('');

  const addTodo = () => {
    if(text.trim().length !== 0){
      setToDos([
        ...todos, {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ]);
      setText('');
    }
  };

  const removeTodo = (todoId: string) => {
    setToDos(todos.filter((todo) => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId: string) => {
    setToDos(todos.map((todo) => {
      if(todo.id !== todoId){
        return todo;
      }
      
      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  return (
    <div className="App">
      <InputField text = {text} handleInput = {setText} handleSubmit = {addTodo}/>
      <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
    </div>
  );
};

export default App;
