import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
         
          <nav>
              <h1>Comfy-Store</h1>          
          </nav>
 
       <section>
           <Outlet/>
       </section>
       <footer>
             <h1>footer</h1>
       </footer>

    </>
  )
}

export default Home