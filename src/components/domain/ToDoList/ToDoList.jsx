import { Header, ListBox, Button } from '../../base';
import { useState, useRef } from 'react';
import * as S from './Style';

export default function ToDoList() {
  const nextId = useRef(3);
  const [userInput, setUserInput] = useState({
    contents: '',
    completed: false,
    isActive: false,
  });
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
  };

  const checkActivation = (id) => {
    setList((list) =>
      list.map((li) => (li.id === id ? { ...li, isActive: !li.isActive } : li)),
    );
  };

  const getUserInput = (e) => {
    setUserInput((input) => ({ ...input, contents: e.target.value }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (userInput.contents === '') {
      alert('할 일을 입력해 주세요.');
      return;
    }
    setList((list) =>
      list.concat({
        id: nextId.current,
        ...userInput,
      }),
    );
    setUserInput({
      contents: '',
      completed: false,
      isActive: false,
    });
    nextId.current += 1;
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

      <Button
        userInput={userInput}
        getUserInput={getUserInput}
        onUpdate={onUpdate}
      />
    </S.Wrapper>
  );
}
