import React, {useState} from 'react'
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

export default function PostForm({ create }) {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

  return (
      <form>
          <Input
              type="text"
              placeholder='Название поста'
              value={post.title}
              onChange={e => setPost({ ...post, title: e.target.value })}
          />
          <Input
              type="text"
              placeholder='Описание поста'
              value={post.body}
              onChange={e => setPost({ ...post, body: e.target.value })}
          />
          {/* <input ref={inputRef} /> */}
          <Button onClick={addNewPost}>Создать пост</Button>
      </form>
  )
}
