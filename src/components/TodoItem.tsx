
import {FC} from 'react';

type TodoItemProps = {
  id: string,
  text: string,
  completed: boolean,
  removeTodo: (todoId: string) => void,
  toggleTodoComplete: (todoId: string) => void

};

const TodoItem: FC <TodoItemProps> = ({id, text, completed, removeTodo, toggleTodoComplete}) => {
  return (
    <li key = {id}>
      <input type = 'checkbox' checked={completed} onChange={() => toggleTodoComplete(id)}></input>
      <span>{text}</span>
      <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem
