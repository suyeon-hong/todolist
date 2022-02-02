import * as S from './Style';
import { FaTrash } from 'react-icons/fa';

export default function ListBox() {
  return (
    <S.ListBox>
      <S.List>
        <S.CheckBox />
        리스트
        <S.Icon>
          <FaTrash />
        </S.Icon>
      </S.List>
    </S.ListBox>
  );
}
