import { AiOutlinePlus } from 'react-icons/ai';
import * as S from './Style';
import { IconContext } from 'react-icons';

export default function Button({ buttonOn, onClick }) {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '50px' }}>
      <S.Button
        style={{
          background: buttonOn && 'tomato',
          transform: buttonOn && 'rotate(45deg)',
        }}
        onClick={onClick}
      >
        <AiOutlinePlus />
      </S.Button>
    </IconContext.Provider>
  );
}
