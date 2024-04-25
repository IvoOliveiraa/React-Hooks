import P from 'prop-types';
import { PostsContexts } from './context';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContexts.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContexts.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
