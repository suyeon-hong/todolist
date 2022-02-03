import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { UserInput } from '../../base';
import { useState } from 'react';
import * as S from './Style';

export default function Button({ userInput, getUserInput, onUpdate }) {
  const [buttonOn, setButtonOn] = useState(false);
  const activeBtn = () => {
    setButtonOn((button) => !button);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '50px' }}>
      {buttonOn && (
        <UserInput
          userInput={userInput}
          onChange={getUserInput}
          onUpdate={onUpdate}
        />
      )}
      <S.Button
        style={{
          background: buttonOn && 'tomato',
          transform: buttonOn && 'rotate(45deg)',
        }}
        onClick={activeBtn}
      >
        <AiOutlinePlus />
      </S.Button>
    </IconContext.Provider>
  );
}
