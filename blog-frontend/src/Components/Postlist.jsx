import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Postlist = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get('http://localhost:5000/posts')
      .then(res => setPosts(res.data));
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:5000/posts/${id}`)
      .then(() => fetchPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
<div className="container">
  <h2>My Posts</h2>
  {posts.map(post => (
    <div key={post.id} className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button className="delete" onClick={() => deletePost(post.id)}>Delete</button>
      <Link to={`/edit/${post.id}`}>
        <button className="edit">Edit</button>
      </Link>
    </div>
  ))}
</div>
  );
};

export default Postlist;
