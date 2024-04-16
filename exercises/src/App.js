import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}> {post.title} </h1>
      <p> {post.body} </p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [post, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return post.map((post) => {
          return <Post key={post.id} post={post} handleClick={handleClick} />;
        });
      }, [post])}
    </div>
  );
}

export default App;
