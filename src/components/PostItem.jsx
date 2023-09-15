import React from 'react'
import Button from './UI/Button/Button'

export default function PostItem({ post, number, remove }) {

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{number}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className='post__btns'>
        <Button onClick={() => remove(post)}>Удалить</Button>
      </div>
    </div>
  )
}
