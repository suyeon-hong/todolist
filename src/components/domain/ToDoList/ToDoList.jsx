import * as S from './Style';
import { Header, ListBox, Button, UserInput } from '../../base';

export default function ToDoList() {
  return (
    <S.Wrapper>
      <Header />
      <ListBox />
      <UserInput />
      <Button />
    </S.Wrapper>
  );
}
