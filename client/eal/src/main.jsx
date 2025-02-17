import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Signup from './components/Signup.jsx'
import Admin from './Pages/Admin.jsx'
import Dashboard from './components/Dashboard.jsx'
import Error from './components/Error.jsx'
import Chat from './components/Chat.jsx'
import Settings from './components/Settings.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  //Admin Dashboard
  {
    path: '/D',
    element : <Admin />,
    children: [
      {
        path: '/D/main',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/D/chat',
        element: <Chat />
      },
      {
        path: '/D/settings',
        element: <Settings />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
