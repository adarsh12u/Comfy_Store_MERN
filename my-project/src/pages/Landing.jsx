import {  Featureproduct, Hero } from '../components';

import { customFetch } from '../utils/index';
const url = '/products?featured=true';



export const loader = async () => {
   
   const response = await customFetch(url)
   const products= response.data.data;
   console.log(products)
   return {products};
    
};

const Landing = () => {
  return (
    <>
      <Hero />
     <Featureproduct/>
    </>
  );
};
export default Landing;
