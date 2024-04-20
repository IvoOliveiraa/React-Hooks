import './App.css';
import { useReducer } from 'react';

const globaState = {
  title: 'O título do contexto',
  bodu: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'mudar': {
      console.log('Chamou mudar com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globaState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title}
        {counter}
      </h1>

      <button
        onClick={() =>
          dispatch({
            type: 'mudar',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
    </div>
  );
}

export default App;
