// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Aboutus from './Pages/Aboutus/Aboutus'
import Projects from './Pages/Projects/Projects'
import Contactus from './Pages/Contactus/Contactus'
import Layout from './components/Layout/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/about',
          element: <Aboutus />
        },
        {
          path: '/contact',
          element: <Contactus />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
