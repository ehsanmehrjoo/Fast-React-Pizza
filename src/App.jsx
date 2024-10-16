import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Ui/Home'
 import Menu , {loader as menuLoader} from './features/menu/Menu'
import Cart from "./features/cart/Cart"
import Order from "./features/order/Order"
import CreateOrder from "./features/order/CreateOrder"
import AppLayout from "./Ui/AppLayout"
 const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path : "/",
        element: <Home />
       },
       {
         path : "/menu",
         element : <Menu />,
         loader : menuLoader
           },
           {
             path: "/cart",
             element : <Cart/>
           },
           {
             path: "/order/new",
             element : <CreateOrder/>
           },
           {
             path : "/order/:orderId",
             element : <Order/>
           }
    ]
  },

   
  ]
  )
 function App() {

  return <RouterProvider router={router}/> 
 }
 
 export default App