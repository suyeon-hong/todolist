import { useState } from 'react';
import * as S from './Style';

export default function UserInput({ onUpdate }) {
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input === '') return;
    setInput('');
    onUpdate(input);
  };

  return (
    <S.UserInputForm onSubmit={onSubmit}>
      <S.UserInput
        onChange={onChange}
        value={input}
        placeholder="할 일을 입력 후, Enter를 누르세요"
      />
    </S.UserInputForm>
  );
}
