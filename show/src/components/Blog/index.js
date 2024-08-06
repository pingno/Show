import React, { useState } from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    date: '2024-07-27',
    excerpt: 'This is a short summary of my first blog post...',
    content: 'This is the full content of my first blog post...',
    image: 'path/to/image1.jpg' // Add the image path
  },
  {
    id: 2,
    title: 'Something out of nothing',
    date: '2024-08-05',
    excerpt: 'Once again, now where do I start?',
    content: 'I\'ve always had a bubble of interests that revolved around business, tech, design, creative work, and marketing',
    image: 'path/to/image2.jpg' // Add the image path
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
    <div className="blog">
      {selectedPost ? (
        <div className="blog-post">
          <button onClick={handleBack}>Back</button>
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.date}</p>
          <img src={selectedPost.image} alt={selectedPost.title} /> {/* Display the image */}
          <div>{selectedPost.content}</div>
        </div>
      ) : (
        <div className="blog-list">
          {posts.map(post => (
            <div key={post.id} className="blog-list-item" onClick={() => handleSelectPost(post)}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;