import { TodoStateContext } from '../../utils/TodoProvider/TodoProvider';
import { useContext } from 'react';
import * as S from './Style';

export default function Header() {
  const MONTH = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const date = new Date();

  const list = useContext(TodoStateContext);
  const uncompletedNums = list.filter((li) => li.completed === false).length;

  return (
    <S.HeaderBlock>
      <h1>
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
      </h1>
      <h2>{MONTH[date.getDay()]}</h2>
      <p>남은 할 일 {uncompletedNums}개</p>
    </S.HeaderBlock>
  );
}
