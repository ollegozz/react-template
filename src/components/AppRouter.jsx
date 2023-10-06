import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { routes } from '../router/router';

export default function AppRouter() {
  return (
      <Routes>
        {routes.map(route => 
          <Route path={route.path} element={route.element} key={route.path}/>
        )}
          {/* <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<PostsIdPage />} />
          <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>

  )
}
