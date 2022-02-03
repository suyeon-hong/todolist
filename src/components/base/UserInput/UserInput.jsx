import { useContext, useState } from 'react';
import * as S from './Style';
import {
  TodoDispatchContext,
  TodoNextIdContext,
} from '../../utils/TodoProvider/TodoProvider';

export default function UserInput() {
  const dispatch = useContext(TodoDispatchContext);
  const nextId = useContext(TodoNextIdContext);
  const [input, setInput] = useState({
    contents: '',
  });
  const onChange = (e) => {
    setInput({
      id: nextId.current,
      contents: e.target.value,
      completed: false,
      isActive: false,
    });
  };
  const onUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE',
      todo: { ...input },
    });
    setInput({
      contents: ' ',
    });
    nextId.current += 1;
  };

  return (
    <S.UserInputForm onSubmit={onUpdate}>
      <S.UserInput
        onChange={onChange}
        value={input.contents}
        placeholder="할 일을 입력 후, Enter를 누르세요"
      />
    </S.UserInputForm>
  );
}
