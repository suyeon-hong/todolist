import { Header, ListBox, Button, UserInput } from '../../base';
import { useState } from 'react';
import * as S from './Style';

export default function ToDoList() {
  const [list, setList] = useState([
    {
      id: 1,
      contents: '산책 하기',
      completed: false,
      isActive: false,
    },
    {
      id: 2,
      contents: '공부 하기',
      completed: true,
      isActive: false,
    },
  ]);

  const clickHandler = (id) => {
    setList((list) =>
      list.map((li) =>
        li.id === id ? { ...li, completed: !li.completed } : li,
      ),
    );
  };

  const onRemove = (id) => {
    setList((list) => list.filter((li) => li.id !== id));
    console.log(list);
  };

  const checkActivation = (id) => {
    setList((list) =>
      list.map((li) => (li.id === id ? { ...li, isActive: !li.isActive } : li)),
    );
  };

  return (
    <S.Wrapper>
      <Header list={list} />
      <ListBox
        list={list}
        onClick={clickHandler}
        onRemove={onRemove}
        checkActivation={checkActivation}
      />
      <UserInput />
      <Button />
    </S.Wrapper>
  );
}
