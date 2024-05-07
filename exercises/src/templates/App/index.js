import { useCounterContext } from '../../context/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Teste</h1>
    </div>
  );
};
