import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar ,Loading } from '../components'
import { useSelector } from 'react-redux';

const Home = () => {
  const loading = useNavigation();
  const value = useSelector((state)=>state.cartstate)
  console.log(value)
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
      

    </>
  )
}

export default Home