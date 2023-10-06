import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostsIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostByid, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostByid(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div style={{ padding: 25 }}>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }

            <h3 style={{ marginTop: 25 }}>Комментарии</h3>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div style={{ marginTop: 15 }}
                            key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>

    )
}
