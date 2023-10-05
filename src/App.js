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
import { useFetching } from './hooks/useFetching';
import { getPageArray, getPageCount } from './utils/pages';
import Pagination from './components/UI/Pagination/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

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
      {postError &&
        <h2>Произошла ошибка загрузки...<br /> {postError}</h2>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'} />
      }
      <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
      {/* <div className="page__wraper">
        {pageArray.map(p =>
          <span className={page === p ? 'page page__current' : 'page'} 
          key={p}
          onClick={() => setPage(p)}
          >
            {p}
          </span>)}
      </div> */}
    </div>
  );
}

export default App;
