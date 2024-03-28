import { createSlice } from "@reduxjs/toolkit";


const defaultvalue = {
      cartItems:[],
      numberofitem:0,
      cartTotal:0,
      shipping:500,
      tax : 0,
      orderTotal : 0
}
const slice  =createSlice({
     name:'cart',
     initialState:defaultvalue,
     reducers:{
           addItem : (state,action)=>{
              console.log(action.payload)
           }
           ,
           clearCart : (state)=>{
            console.log(action.payload)
         }
         ,
         removeItem : (state,action)=>{
            console.log(action.payload)
         },
         editItem:(state , action)=>{
             
         }
     }
})

export const {addItem , clearCart , removeItem , editItem} = slice.actions
export default slice.reducer