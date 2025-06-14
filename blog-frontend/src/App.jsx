import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostList from './Components/Postlist';
import AddPost from './Components/Addpost';
import EditPost from './Components/Editpost';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">Tarun Blogs</Link>
        </div>
        <div>
          <Link to="/">Home</Link> | <Link to="/add">Add Post</Link>
        </div>
      </nav>  
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
