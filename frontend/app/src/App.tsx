import { createBrowserRouter } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Task from './pages/Task'
import Scripts from './pages/Scripts'
import Server from './pages/Server'
import Dashboard from './pages/Dashboard'
import { RouterProvider } from 'react-router/dom'
import CreateTask from './pages/CreateTask'
import EditScript from './pages/EditScript'
import Deployments from './pages/Deployments'
import LandingPage from './pages/LandingPage'
import { APP_PREFIX, PAGE_PREFIX } from './constants/NavigateConstants'

function App() {

  const AppRouter = createBrowserRouter([
    {
      path:PAGE_PREFIX,
      element:<LandingPage></LandingPage>,
      children:[]
    },
    {
      path:APP_PREFIX,
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:"",
          element:<Task></Task>
        },
        {
          path:"scripts",
          element:<Scripts></Scripts>
        },
        {
          path:"scripts/:id",
          element:<EditScript></EditScript>
        },
        {
          path:"servers",
          element:<Server></Server>
        },
        {
          path:"deployments",
          element:<Deployments></Deployments>
        },
        {
          path:"dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"create-task",
          element:<CreateTask></CreateTask>
        }
      ]
    }
  ])


  return <RouterProvider router={AppRouter}></RouterProvider>
}

export default App
