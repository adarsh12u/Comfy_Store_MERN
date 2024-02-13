import React from 'react'
import { Form } from 'react-router-dom'
import { Button, Input } from '../components'

const Register = () => {
  return (
    <main className=' bg-gray-100 h-screen grid  place-items-center'>
        <Form method='POST' className=' card w-96 p-8 gap-y-3 bg-white shadow-lg rounded-lg flex flex-col'>
             <h1 className=' text-center text-3xl font-bold'>
                  Register
             </h1>
             <Input name='name'  type='text' label='Name' />
             <Input name='email'  type='email' label='Email' />
             <Input name='password'  type='password' label='Password' />
             
             <div className=' mt-2 w-full'>
              
              <Button text='Sign Up'/>
             
              </div>
              
        </Form>
         
    </main>
  )
}

export default Register