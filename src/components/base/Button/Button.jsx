import { AiOutlinePlus } from 'react-icons/ai';
import * as S from './Style';
import { IconContext } from 'react-icons';

export default function Button() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '50px' }}>
      <S.Button>
        <AiOutlinePlus />
      </S.Button>
    </IconContext.Provider>
  );
}
