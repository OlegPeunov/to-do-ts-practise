
import {FC} from 'react';
import { TodoType } from './types';

interface TodoItemProps {
  todo: TodoType,
  onRemoveTodo: (todoId: string) => void,
  onToggleTodoComplete: (todoId: string) => void
};

const TodoItem: FC <TodoItemProps> = ({todo, onRemoveTodo, onToggleTodoComplete}) => {
  return (
    <li className='todo'key = {todo.id}>
      <input type = 'checkbox' checked={todo.isCompleted} onChange={() => onToggleTodoComplete(todo.id)}></input>
      <span className='todo__text'>{todo.text}</span>
      <span className='todo__delete' onClick={() => onRemoveTodo(todo.id)}>&times;</span>
    </li>
  )
}

export default TodoItem
