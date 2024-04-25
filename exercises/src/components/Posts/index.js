import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContexts } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/CounterProvider/context';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/action';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContexts);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter} +
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter} +
      </button>
      <h1>Testando</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts.</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title} </p>
      ))}
    </div>
  );
};
