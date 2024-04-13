import './App.css';
import { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';

const Post = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h1> {post.title} </h1>
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
};

function App() {
  const [post, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return post.map((post) => {
          return <Post key={post.id} post={post} />;
        });
      }, [post])}
    </div>
  );
}

export default App;
