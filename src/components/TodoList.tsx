import TodoItem from "./TodoItem";
import {FC} from 'react';

import {
  TodoType,
  TodosType
} from './types';

type TodoListProps  = {
  todos: TodosType,
  onRemoveTodo: (todoId: string) => void,
  onToggleTodoComplete: (todoId: string) => void
};

const Todolist: FC <TodoListProps> = ({todos, onRemoveTodo, onToggleTodoComplete}) => {
  return (
    <ul className='app__todos'>
      {
        todos.map((todo: TodoType) => <TodoItem key={todo.id} {...todo} onToggleTodoComplete={onToggleTodoComplete} onRemoveTodo={onRemoveTodo}/>)
      }  
    </ul>
  )
}

export default Todolist
