import React, { useMemo, useState } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
// import Select from './components/UI/Select/Select';
// import Input from './components/UI/Input/Input';
import PostFilter from './components/PostFilter';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ptest', body: "odescription" },
    { id: 2, title: 'jtest2', body: "ndescription" },
    { id: 3, title: 'test3', body: "description" }
  ])

  // const [selectedSort, setSelectedSort] = useState('')
  // const [serchQuery, setSerchQuery] = useState('')
  const [filter, setFilter] = useState({sort: '', query: ''})


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    // console.log('функция сорт постов');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } return posts
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort)
  //   // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  // }

  // const inputRef = useRef() 
  // console.log(inputRef.current.value);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      
      
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'} />
        

    </div>
  );
}

export default App;
