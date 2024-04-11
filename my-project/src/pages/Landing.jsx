import {  Featureproduct, Hero } from '../components';

import { customFetch } from '../utils/index';
const url = '/products?featured=true';

const featureproduct = {
  queryKey:['featureProducts'],
  queryFn:()=>customFetch(`/products/?featured=true`)
}

export const loader =(query)=> async () => {
   
   const response = await query.ensureQueryData(featureproduct)
   const products= response.data.data;
   
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
