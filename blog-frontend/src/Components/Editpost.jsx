import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editpost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(res => {
        const post = res.data.find(p => p.id === parseInt(id));
        if (post) {
          setTitle(post.title);
          setContent(post.content);
        }
      });
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/posts/${id}`, { title, content })
      .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='editpost'>Think & Update</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button className='submit' type="submit">Update</button>
    </form>
  );
};

export default Editpost;
