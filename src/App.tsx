import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Admin } from "./pages/admin"
import { Login } from "./pages/login"
import { RedesSociais } from "./pages/networks"
import { Error } from "./pages/error"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/admin/redes-sociais',
    element: <RedesSociais/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <Error/>
  }
])
export {router}