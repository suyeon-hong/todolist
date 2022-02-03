import { useReducer, createContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    contents: '산책 하기',
    completed: false,
  },
  {
    id: 2,
    contents: '공부 하기',
    completed: true,
  },
];

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return state.map((list) =>
        list.id === action.id ? { ...list, completed: !list.completed } : list,
      );
    case 'REMOVE':
      return state.filter((list) => list.id !== action.id);
    case 'UPDATE':
      return state.concat(action.todo);
    default:
      return console.error('action.type을 확인해 주세요.');
  }
}

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(3);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
