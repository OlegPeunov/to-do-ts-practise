import TodoItem from "./TodoItem";
import {FC} from 'react';

import {
  TodoType,
} from './types';

type TodoListProps  = {
  todos: Array<TodoType>,
  onRemoveTodo: (todoId: string) => void,
  onToggleTodoComplete: (todoId: string) => void
};

const Todolist: FC <TodoListProps> = ({todos, onRemoveTodo, onToggleTodoComplete}) => {
  return (
    <ul className='app__todos'>
      {
        todos.map((todo: TodoType) => <TodoItem key={todo.id} todo = { todo } onToggleTodoComplete={onToggleTodoComplete} onRemoveTodo={onRemoveTodo}/>)
      }  
    </ul>
  )
}

export default Todolist
