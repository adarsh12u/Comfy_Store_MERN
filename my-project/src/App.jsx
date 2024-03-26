import React from 'react'
import { Landing ,Register   ,Login , Orders , SingleProduct , Home , Error , Checkout , Cart } from './pages/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrroElement } from './components'



import {loader  as landingloader} from './pages/Landing'
import {loader  as productloader} from './pages/SingleProduct'
import Product, {loader  as moreproductloader} from './pages/Product'
const BrowserRouter = createBrowserRouter([{
     path:'/',
     element:   <Home/>,
    errorElement:<Error/>,
     children : [
      {
        index : true,
        element:   <Landing/>,
        errorElement:<ErrroElement/>,
        loader:landingloader,
      },
      
      {
        path:'orders',
        element:   <Orders/>,
        
      },
      {
        path:'checkout',
        element:   <Checkout/>,
        
      },
      {
        path:'products/:id',
        element:   <SingleProduct/>,
        loader:productloader
      },
      {
        path:'cart',
        element:   <Cart/>,
        
      },
      {
        path:'singleproduct',
        element:   <SingleProduct/>,
        
      },
      {
        path:'products',
        element:   <Product/>,
        loader: moreproductloader
   
      }
          ]
},
{
  path:'/login',
  element:   <Login/>,
  
},
{
  path:'/register',
  element:   <Register/>,
  
},
])

const App = () => {
  return (
      
     <RouterProvider  router={BrowserRouter} />
     
  )
}

export default App