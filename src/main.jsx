import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Events from './components/Events.jsx'
import AlumniConnect from './components/AlumniConnect.jsx'
import Incubation from './components/Incubation.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='events' element={<Events />} />
      <Route path='alumni-connect' element={<AlumniConnect />} />
      <Route path='incubation' element={<Incubation />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
