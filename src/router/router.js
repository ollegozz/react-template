import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Posts from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";

export const routes =[
    { path: "about", element: <About/>, exact: true },
    { path: "posts", element: <Posts/>, exact: true },
    { path: "post/:id", element: <PostsIdPage/>, exact: true },
    { path: "/*", element: <ErrorPage/>, exact: true }
]