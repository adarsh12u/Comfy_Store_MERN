import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'

const Home = () => {
  return (
    <>
         
          <Header/>
          <Navbar/>
       <section className=' align-element py-20'>
           <Outlet/>
       </section>
       <footer>
             <h1>footer</h1>
       </footer>

    </>
  )
}

export default Home