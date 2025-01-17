import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorPage from '../components/ErrorPage'
import Contact from '../pages/Contact'
import Book from '../pages/Book'
import Login from '../pages/Login'
import Register from '../pages/Register'


const Router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
            {
                path : '/book',
                element : <Book/>
            },
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/register',
                element : <Register/>
            }
        ]
    }
])


export default Router;