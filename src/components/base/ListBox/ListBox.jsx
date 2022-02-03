import * as S from './Style';
import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import {
  TodoStateContext,
  TodoDispatchContext,
} from '../../utils/TodoProvider/TodoProvider';

export default function ListBox() {
  const list = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  const onClick = (id) => {
    dispatch({
      type: 'TOGGLE',
      id,
    });
  };

  const onRemove = (id) => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  };

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
