import P from 'prop-types';
import { useCounterContext } from '../../context/CounterContext';

export const Heading = () => {
  const [state, actions] = useCounterContext();

  return <h1>{state.counter}</h1>;
};
