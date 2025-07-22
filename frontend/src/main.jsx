import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { createBrowserRouter } from 'react-router'
import FrontPage from './pages/FrontPage.jsx'
import { Home } from 'lucide-react'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  { path: '/', element: <FrontPage /> },
  { path: '/home', element: <Home /> },
  { path: '/register', element: <Signup /> },
  { path: '/login', element: <Login /> }
]);

createRoot(document.getElementById('root')).render(


  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>,
)
