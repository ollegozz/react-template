import React, { useState } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'test', body: "description" },
    { id: 2, title: 'test2', body: "description" },
    { id: 3, title: 'test3', body: "description" }
  ])

  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
 
 const createPost = (newPost) => {
  setPosts([...posts, newPost])
 }
 
 const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
 }

  // const inputRef = useRef() 
  // console.log(inputRef.current.value);

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length ?
        <PostList remove={removePost} posts={posts} title={'Список постов'} /> 
        :
        <h3 style={{textAlign: 'center'}}>Посты не найдены!!!</h3>
    }
      
    </div>
  );
}

export default App;
