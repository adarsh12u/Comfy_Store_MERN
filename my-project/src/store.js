import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Features/Cart/cartSlice";
import userslice from "./Features/Cart/User/userslice";
export const store = configureStore({
   
     reducer:{
         cartstate : cartreducer,
         userstate : userslice
         }
     
})