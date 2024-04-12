import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);

  //Atualiza sempre
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //Atualiza uma vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  //Atualiza quando a dependência mudar
  useEffect(() => {
    console.log('Contador mudou para', counter);
  }, [counter]);

  //Faz uma limpeza
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
