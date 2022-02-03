import { ToDoList } from './components/domain'
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './components/utils';

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <ToDoList />
      </TodoProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul,li {text-decoration: none}
  button{
    border: none;
    background: transparent;
    cursor: pointer;
  }
  body{
    width: 100%;
    height: 100vh;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default App;
