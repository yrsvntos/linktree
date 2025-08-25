import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Admin } from "./pages/admin"
import { Login } from "./pages/login"
import { RedesSociais } from "./pages/networks"
import { Error } from "./pages/error"

import { Private } from "./pages/routes/Private"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: 
    <Private>
      <Admin/>
    </Private>
  },
  {
    path: '/admin/redes-sociais',
    element: 
    <Private>
      <RedesSociais/>
    </Private> 
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