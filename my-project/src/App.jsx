import React from 'react'
import { Landing ,Register   ,Login , Orders , SingleProduct , Home , Error , Checkout , Cart } from './pages/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrroElement } from './components'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import {loader  as landingloader} from './pages/Landing'
import {loader  as productloader} from './pages/SingleProduct'
import Product, {loader  as moreproductloader} from './pages/Product'
import { action } from './pages/Register'
import {store} from './store';
import { action as loginaction } from './pages/Login'
const queryClient = new QueryClient({
  defaultOptions:{
   queries:{
        staleTime:1000*60*5
   }
  }
})
const BrowserRouter = createBrowserRouter([{
     path:'/',
     element:   <Home/>,
    errorElement:<Error/>,
     children : [
      {
        index : true,
        element:   <Landing/>,
        errorElement:<ErrroElement/>,
        loader:landingloader(queryClient),
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
        loader:productloader(queryClient)
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
        loader: moreproductloader(queryClient)
   
      }
          ]
},
{
  path:'/login',
  element:   <Login/>,
  action : loginaction(store)
},
{
  path:'/register',
  element:   <Register/>,
  action:action
  
},
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

     <RouterProvider  router={BrowserRouter} />
     <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
     
  )
}

export default App