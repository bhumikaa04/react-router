import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider , createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contactus/Contactus.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Login from './components/Login/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>} /> 
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contact />} />
      <Route 
      loader = {githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
