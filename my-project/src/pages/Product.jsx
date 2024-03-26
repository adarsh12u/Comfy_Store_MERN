import React from 'react'
import { Filters, Pagination, ProductContainer } from '../components'
import { customFetch } from '../utils';

const url = '/products';
export const loader = async({request})=>{

  const params = new URL(request.url).searchParams
  const search = params.get('search');
 
  const response = await customFetch(url);
       const products = response.data.data;
       const meta = response.data.meta;
       return {products , meta };
}
const Product = () => {
  return (
    <>
       <Filters/>
       <ProductContainer/>
       <Pagination/>
    </>
  )
}

export default Product