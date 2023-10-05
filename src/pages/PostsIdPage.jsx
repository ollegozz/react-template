import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostsIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostByid, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.date)
    })

    useEffect(() => {
        fetchPostByid(params.id)        
    },[])

    return (
        <div>
            <div>PostsIdPage {params.id}</div>
            {isLoading
                ? <Loader />
                : <div>{post.title}</div>
            }

        </div>

    )
}
