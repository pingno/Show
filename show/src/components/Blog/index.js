import React, { useState } from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    date: '2024-07-27',
    excerpt: 'This is a short summary of my first blog post...',
    content: 'This is the full content of my first blog post...'
  },
  // Add more posts as needed
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (

  );
};

export default Blog;