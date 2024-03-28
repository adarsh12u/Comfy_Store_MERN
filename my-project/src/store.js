import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './Features/Cart/cartSlice'
export const store = configureStore({
   
     reducer:{
         cartstate : cartreducer
     }
     
})