import React, { useMemo, useState } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Select from './components/UI/Select/Select';
import Input from './components/UI/Input/Input';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ptest', body: "odescription" },
    { id: 2, title: 'jtest2', body: "ndescription" },
    { id: 3, title: 'test3', body: "description" }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [serchQuery, setSerchQuery] = useState('')


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    console.log('функция сорт постов');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } return posts
  },[selectedSort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(serchQuery))
  },[serchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  // const inputRef = useRef() 
  // console.log(inputRef.current.value);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <Input 
        value={serchQuery}
        onChange={e => setSerchQuery(e.target.value)}
        placehoder = 'Поиск...'/>
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          option={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]} />
      </div>
      
      {sortedAndSearchPosts.length ?
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'} />
        :
        <h3 style={{ textAlign: 'center' }}>Посты не найдены!!!</h3>
      }

    </div>
  );
}

export default App;
