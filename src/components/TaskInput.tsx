import {FC} from 'react';
import InputField from "./InputField";


type taskProps  = {
  text: string,
  onAddTodo: () => void,
  onSetText: (text: string) => void
};

const TaskInput: FC <taskProps> = ({text, onAddTodo, onSetText}) => {

  return (
    <label className='app__task'>
      <InputField text = {text} onSetText = {onSetText} />
      <button onClick = {onAddTodo}>Add Todo</button>
    </label>  
  )
}

export default TaskInput
