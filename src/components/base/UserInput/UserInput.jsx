import * as S from './Style';

export default function UserInput({ userInput, onUpdate, onChange }) {
  return (
    <S.UserInputForm onSubmit={onUpdate}>
      <S.UserInput
        onChange={onChange}
        value={userInput.contents}
        placeholder="할 일을 입력 후, Enter를 누르세요"
      />
    </S.UserInputForm>
  );
}
