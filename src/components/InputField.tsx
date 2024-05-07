import {FC} from 'react';

type FieldProps  = {
  text: string,
  onSetText: (text: string) => void
};

const InputField: FC <FieldProps> = ({text, onSetText}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onSetText(event.target.value)

  return (
    <input value={text} onChange = { handleChange }></input>
  )
}

export default InputField
