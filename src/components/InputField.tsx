import {FC} from 'react';

type fieldProps  = {
  text: string,
  onSetText: (text: string) => void
};

const InputField: FC <fieldProps> = ({text, onSetText}) => {
  const handleonChange = (event: React.ChangeEvent<HTMLInputElement>) => onSetText(event.target.value)

  return (
    <input value={text} onChange = { handleonChange }></input>
  )
}

export default InputField
