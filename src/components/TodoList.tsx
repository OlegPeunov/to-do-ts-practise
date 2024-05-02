import TodoItem from "./TodoItem";
import {FC} from 'react';

import {
  TodoType,
  TodosType
} from './todo.data';

type TodoListProps  = {
  todos: TodosType,
  removeTodo: (todoId: string) => void,
  toggleTodoComplete: (todoId: string) => void
};

const Todolist: FC <TodoListProps> = ({todos, removeTodo, toggleTodoComplete}) => {
  return (
    <ul className='app__todos'>
      {
        todos.map((todo: TodoType) => <TodoItem key={todo.id} {...todo} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>)
      }  
    </ul>
  )
}

export default Todolist
