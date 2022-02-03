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

  return (
    <>
      <S.TitleDate>
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
      </S.TitleDate>
      <S.Today>{MONTH[date.getDay()]}</S.Today>
      <S.ToDoNums>남은 할 일 0개</S.ToDoNums>
    </>
  );
}
