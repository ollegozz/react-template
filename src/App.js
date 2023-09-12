import React, { useState } from 'react'
import './App.css';
import PostList from './components/PostList';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'test', body: "description" },
    { id: 2, title: 'test2', body: "description" },
    { id: 3, title: 'test3', body: "description" }
  ])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title, description);

  }

  // const inputRef = useRef() 
  // console.log(inputRef.current.value);

  return (
    <div className="App">
      <form>
        <Input
          type="text"
          placeholder='Название поста'
          defaultValue={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder='Описание поста'
          defaultValue={description}
          onChange={e => setDescription(e.target.value)}
        />
        {/* <input ref={inputRef} /> */}
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title={'Список постов'} />
    </div>
  );
}

export default App;
