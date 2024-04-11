import {  Featureproduct, Hero } from '../components';

import { customFetch } from '../utils/index';
const url = '/products?featured=true';

const featureproduct = {
  queryKey:['featureProducts'],
  queryFn:()=>customFetch(`/products/${params.id}`)
}

export const loader =(query)=> async () => {
   
   const response = await query.ensureQueryData(featureproduct)
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
