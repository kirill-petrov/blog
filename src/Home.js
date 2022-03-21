import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log('useEffect run');
    fetch('http://localhost:8000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className='home'>
      {
        blogs &&
        <BlogList
          blogs={blogs}
          title='All Blogs'
        />
      }
      {/* 
      <BlogList ist
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="Mario's Blogs"
      /> */}
    </div>
  );
};

export default Home;
