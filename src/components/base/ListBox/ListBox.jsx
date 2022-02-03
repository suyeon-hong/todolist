import * as S from './Style';
import { FaTrash } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';

export default function ListBox({ list, onClick, onRemove, checkActivation }) {
  console.log(list);
  return (
    <S.ListBox>
      {list.map((li) => (
        <S.List
          key={li.id}
          onMouseEnter={() => checkActivation(li.id)}
          onMouseLeave={() => checkActivation(li.id)}
        >
          <S.CheckBox
            style={{ borderColor: li.completed ? '#87C289' : null }}
            onClick={() => onClick(li.id)}
          >
            {li.completed && <FcCheckmark />}
          </S.CheckBox>
          <span style={{ color: li.completed ? '#bbb' : null }}>
            {li.contents}
          </span>
          {li.isActive && (
            <S.Icon onClick={() => onRemove(li.id)}>
              <FaTrash />
            </S.Icon>
          )}
        </S.List>
      ))}
    </S.ListBox>
  );
}
