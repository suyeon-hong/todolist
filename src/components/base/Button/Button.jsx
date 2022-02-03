import {
  TodoDispatchContext,
  TodoNextIdContext,
} from '../../utils/TodoProvider/TodoProvider';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { UserInput } from '../../base';
import { useState, useContext } from 'react';
import * as S from './Style';

export default function Button() {
  const [buttonOn, setButtonOn] = useState(false);
  const dispatch = useContext(TodoDispatchContext);
  const nextId = useContext(TodoNextIdContext);
  const activeBtn = () => {
    setButtonOn((button) => !button);
  };
  const onUpdate = (input) => {
    dispatch({
      type: 'UPDATE',
      todo: {
        id: nextId.current,
        contents: input,
        completed: false,
      },
    });
    nextId.current += 1;
    activeBtn();
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '50px' }}>
      {buttonOn && <UserInput onUpdate={onUpdate} />}
      <S.Button buttonOn={buttonOn} onClick={activeBtn}>
        <AiOutlinePlus />
      </S.Button>
    </IconContext.Provider>
  );
}
