import { useEffect, useState } from 'react';

export const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    };
  }, []);

  return <h1>{JSON.stringify(posts)} </h1>;
};
