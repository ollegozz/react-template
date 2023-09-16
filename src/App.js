import React, { useState } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Select from './components/UI/Select/Select';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ptest', body: "odescription" },
    { id: 2, title: 'jtest2', body: "ndescription" },
    { id: 3, title: 'test3', body: "description" }
  ])

  const [selectedSort, setSelectedSort] = useState('')


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  // const inputRef = useRef() 
  // console.log(inputRef.current.value);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <Select 
      value={selectedSort}
      onChange={sortPosts}
      defaultValue='Сортировка' 
      option={[
        { value: 'title', name: 'По названию'},
        { value: 'body', name: 'По описанию'}
      ]} />
      {posts.length ?
        <PostList remove={removePost} posts={posts} title={'Список постов'} />
        :
        <h3 style={{ textAlign: 'center' }}>Посты не найдены!!!</h3>
      }

    </div>
  );
}

export default App;
