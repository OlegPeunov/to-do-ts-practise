
import {FC} from 'react';
import { TodoType } from './types';

type TodoItemProps = {
  onRemoveTodo: (todoId: string) => void,
  onToggleTodoComplete: (todoId: string) => void
};

const TodoItem: FC <TodoType & TodoItemProps> = ({id, text, isCompleted, onRemoveTodo, onToggleTodoComplete}) => {
  return (
    <li className='todo'key = {id}>
      <input type = 'checkbox' checked={isCompleted} onChange={() => onToggleTodoComplete(id)}></input>
      <span className='todo__text'>{text}</span>
      <span className='todo__delete' onClick={() => onRemoveTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem
