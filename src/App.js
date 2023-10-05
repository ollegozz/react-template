import React, { useState } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
// import Select from './components/UI/Select/Select';
// import Input from './components/UI/Input/Input';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import { usePosts } from './hooks/usePosts';
// import axios from 'axios';
import { useEffect } from 'react';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';



function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts);
    setIsPostsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [filter])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  // const inputRef = useRef() 
  // console.log(inputRef.current.value);

  return (
    <div className="App">
      <Button style={{ marginTop: 15 }} onClick={() => setModal(true)}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'} />
      }



    </div>
  );
}

export default App;
