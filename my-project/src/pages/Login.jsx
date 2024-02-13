import React from 'react'
import { Button, Input } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className=' bg-gray-100 h-screen grid  place-items-center'>
        <Form method='POST' className=' card w-96 p-8 gap-y-3 bg-white shadow-lg rounded-lg flex flex-col'>
             <h1 className=' text-center text-3xl font-bold'>
                  Login
             </h1>
             <Input name='name' defaultvalue='username' type='text' label='Name' />
             <Input name='email' defaultvalue='example@gmail.com' type='email' label='Email' />
             
             <div className=' mt-2 w-full'>
              
              <Button text='Login'/>
             
              </div>
              <button type='submit' className="btn btn-active btn-accent">Guest user</button>
     <p>
         Create account ?   
         <Link to={'/register'} className=' text-blue-600'> Sign In </Link>
     </p>
        </Form>
         
    </main>
  )
}

export default Login