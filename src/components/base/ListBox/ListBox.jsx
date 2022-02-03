import * as S from './Style';
import { FaTrash } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';

export default function ListBox({ list, onClick, onRemove }) {
  return (
    <S.ListBox>
      {list.map((li) => (
        <S.List key={li.id}>
          <S.CheckBox completed={li.completed} onClick={() => onClick(li.id)}>
            {li.completed && <FcCheckmark />}
          </S.CheckBox>
          <S.Contents completed={li.completed}>{li.contents}</S.Contents>
          <S.Icon onClick={() => onRemove(li.id)}>
            <FaTrash />
          </S.Icon>
        </S.List>
      ))}
    </S.ListBox>
  );
}
