import React from 'react'
import { Button, Input } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Features/Cart/User/userslice'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data)
if(data.identifier != '' && data.email != ''){
  try {
    const response = await customFetch.post('/auth/local', data);
    console.log(response)
    store.dispatch(loginUser(response.data));
    toast.success('logged in successfully');
    return redirect('/');
  } catch (error) {


    console.log(error)
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
}
  return null;
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again');
    }
  };

  return (
    <main className=' bg-gray-100 h-screen grid  place-items-center'>
        <Form method='POST' className=' card w-96 p-8 gap-y-3 bg-white shadow-lg rounded-lg flex flex-col'>
             <h1 className=' text-center text-3xl font-bold'>
                  Login
             </h1>
             <Input name='identifier'  type='email' label='email' />
             <Input name='password'  type='password' label='password' />
             
             <div className=' mt-2 w-full'>
              
              <Button text='Login'/>
             
              </div>
              <button type='submit' className="btn btn-active btn-accent" onClick={loginAsGuestUser}>Guest user</button>
     <p>
         Create account ?   
         <Link to={'/register'} className=' text-blue-600'> Sign In </Link>
     </p>
        </Form>
         
    </main>
  )
}

export default Login