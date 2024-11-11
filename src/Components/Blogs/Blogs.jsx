// src/Components/Blogs/Blogs.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, selectAllBlogs, selectBlogsStatus, selectBlogsError } from '../../Redux/Slice/AuthSlice';
import './Blogs.css';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const blogStatus = useSelector(selectBlogsStatus);
  const error = useSelector(selectBlogsError);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  if (blogStatus === 'loading') {
    return <p>Loading blogs...</p>;
  }

  if (blogStatus === 'failed') {
    return <p>Error: {error}</p>;
  }
  const getImageSrc = (imagePath) => {
    return require(`../../Assets/Blogs/${imagePath}`);
};
  return (
    <section className="blogs-page">
      <h2 className="heading5">
        Our <span>Blogs</span>
      </h2>
      <div className="blogs-container">
        {blogs?.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={getImageSrc(blog.image)} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-author">By {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}</p>
              <p className="blog-snippet">{blog.content.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
