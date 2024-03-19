import { Link } from 'react-router-dom';

import image from '../../public/hero3.webp'



const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
        Discover comfort redefined at Comfy store. Dive into our curated collection of cozy essentials and elevate every moment with warmth and relaxation. Welcome to your comfort haven.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
       
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
           
        
        
      </div>
    </div>
  );
};
export default Hero;
