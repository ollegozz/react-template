import React from 'react'
import Button from './UI/Button/Button'

export default function PostItem({post}) {
    
  return (
      <div className='post'>
          <div className='post__content'>
              <strong>{post.id}. {post.title}</strong>
              <div>
                  {post.body}
              </div>
          </div>
          <div className='post__btns'>
            <Button>Удалить</Button>
              {/* <button>Delete</button> */}
          </div>
      </div>
  )
}
