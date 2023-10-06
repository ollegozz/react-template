import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";

export const privateRoutes = [
    { path: "about", element: <About /> },
    { path: "posts", element: <Posts /> },
    { path: "post/:id", element: <PostsIdPage /> },
    { path: "/*", element: <ErrorPage /> }
]

export const publicRoutes = [
    { path: "login", element: <Login /> }
]