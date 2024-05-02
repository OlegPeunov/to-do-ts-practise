import {FC} from 'react';

type InputFieldProps  = {
  text: string,
  handleInput: (text: string) => void,
  handleSubmit: () => void
};

const InputField: FC <InputFieldProps> = ({text, handleInput, handleSubmit}) => {
  return (
    <label className='app__input'>
      <input value={text} onChange={(e) => handleInput(e.target.value)}></input>
      <button onClick = {handleSubmit}>Add Todo</button>
    </label>
  )
}

export default InputField
