import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addpost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill out both fields.');
      return;
    }
    axios.post('http://localhost:5000/posts', { title, content })
      .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='addpost'>Add Your Content</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button className='submit' type="submit">Add</button>
    </form>
  );
};

export default Addpost;
