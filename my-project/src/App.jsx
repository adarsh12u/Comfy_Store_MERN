import React from 'react'
import { Landing ,Register ,  About  ,Login , Orders , SingleProduct , Home , Error , Checkout , Cart } from './pages/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'





const BrowserRouter = createBrowserRouter([{
     path:'/',
     element:   <Home/>,
     errorElement:<Error/>,  
     children : [
      {
        index : true,
        element:   <Landing/>,
        errorElement:<Error/>  
      },
      {
        path:'about',
        element:   <About/>,
        errorElement:<Error/>  
      },
      {
        path:'orders',
        element:   <Orders/>,
        errorElement:<Error/>  
      },
      {
        path:'checkout',
        element:   <Checkout/>,
        errorElement:<Error/>  
      },
      {
        path:'cart',
        element:   <Cart/>,
        errorElement:<Error/>  
      },
      {
        path:'singleproduct',
        element:   <SingleProduct/>,
        errorElement:<Error/>  
      }
     ]
},
{
  path:'/login',
  element:   <Login/>,
  errorElement:<Error/>  
},
{
  path:'/register',
  element:   <Register/>,
  errorElement:<Error/>  
},
])

const App = () => {
  return (
      
     <RouterProvider  router={BrowserRouter} />
     
  )
}

export default App