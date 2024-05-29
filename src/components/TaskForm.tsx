import {FC} from 'react';
import InputField from "./InputField";


type TaskProps  = {
  text: string,
  onAddTodo: () => void,
  onSetText: (text: string) => void
};

const TaskForm: FC <TaskProps> = ({text, onAddTodo, onSetText}) => {

  return (
    <label className='app__task'>
      <InputField text = {text} onSetText = {onSetText} />
      <button onClick = {onAddTodo}>Add Todo</button>
    </label>  
  )
}

export default TaskForm
