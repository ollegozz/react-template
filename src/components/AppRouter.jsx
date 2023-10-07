import React from 'react'
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router/router';
import Loader from './UI/Loader/Loader';

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth ?
      <>
        {/* <Navigate to="/posts" /> */}
        <Routes>
          {privateRoutes.map(route =>
            <Route path={route.path}
              element={route.element}
              key={route.path} />
          )}
        </Routes>
      </>
      : 
      <>
        <Navigate to="/login" />
        <Routes>
          {publicRoutes.map(route =>
            <Route path={route.path}
              element={route.element}
              key={route.path} />
          )}
        </Routes>
      </>
  )
}






{/* <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<PostsIdPage />} />
          <Route path="/*" element={<ErrorPage />} /> */}