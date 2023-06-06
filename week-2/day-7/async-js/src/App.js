
import { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import PostTable from './components/PostTable';
import { Post } from './models/Post';


function App() {

  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/';
    const res = await fetch(url + 'posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    let postData = data.map((post) => {
      return new Post(post.id, post.title, post.body, post.userId)
    })
    setPosts(postData);
  }

  function fetchApiPost() {
    
  }


  return (
    <div className="text-center m-5">
      <button className='btn btn-primary' onClick={fetchPosts}>FetchPosts</button>
    <PostTable posts={posts}></PostTable>
    </div>
  );
}

export default App;
