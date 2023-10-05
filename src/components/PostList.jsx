import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

export default function PostList({ posts, title, remove }) {

  if (!posts.length) {
    return (

      <h3 style={{ textAlign: 'center' }}>
        Посты не найдены!!!
      </h3>
    )
  }
  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            // nodeRef={nodeRef}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}

      </TransitionGroup>

    </div>
  )
}
