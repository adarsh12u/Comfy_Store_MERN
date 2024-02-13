import React from 'react'
import { useRouteError , Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError();
    if(error.status === 404){
    return  <main className=' min-h-screen flex flex-col justify-center items-center  '> 
           
      <h4 className=' text-center font-bold text-4xl'>
          
          404 
      </h4>
      <p className=' mt-4 taxt-3xl font-bold sm:text-5xl'>
          page not found
      </p>
      <Link className=' border p-2 border-black' to={'/'}>Back to home</Link>
  
</main>
    }
  return (
    <main className=' min-h-screen flex justify-center items-center  '> 
           
                <h4 className=' text-center font-bold text-4xl'>
                     {
                       error.error.message
                     }
                </h4>
            
    </main>
  )
}

export default Error