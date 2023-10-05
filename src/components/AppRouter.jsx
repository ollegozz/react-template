import React from 'react'
import { Routes, Route } from 'react-router-dom';

import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage';
import Posts from '../pages/Posts';
import PostsIdPage from '../pages/PostsIdPage';

export default function AppRouter() {
  return (
      <Routes>
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<PostsIdPage />} />
          <Route path="/*" element={<ErrorPage />} />
      </Routes>

  )
}
