import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar ,Loading } from '../components'

const Home = () => {
  const loading = useNavigation();
  const isloading = loading.state == 'loading';
  return (
    <>
         
          <Header/>
          <Navbar/>
          {
        isloading ? <Loading/> : 
        <section className=' align-element py-20'>
            <Outlet/>
        </section>
          }
       <footer>
             <h1>footer</h1>
       </footer>

    </>
  )
}

export default Home