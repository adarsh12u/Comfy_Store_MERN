import { createSlice } from "@reduxjs/toolkit";
import {toast}from 'react-toastify'

const defaultvalue = {
      cartItems:[],
      numberofitem:0,
      cartTotal:0,
      shipping:500,
      tax : 0,
      orderTotal : 0,
      amount:0
}

const getcartfromlocalstorage = ()=>{
    return JSON.parse(localStorage.getItem('cart')) || defaultvalue
}
const slice  =createSlice({
     name:'cart',
     initialState:getcartfromlocalstorage,
     reducers:{
           addItem : (state,action)=>{
              
            const {product} = action.payload
            const item = state.cartItems.find((item)=>item.cartId === product.cartId);
             if(item){
                  item.amount+=product.amount
             }else{
               console.log(state.cartItems)
                state.cartItems.push(product);
             }

             state.numberofitem+=product.amount
             state.cartTotal+=product.price * product.amount
             slice.caseReducers.calculate(state)
             toast.success("product added")
           }
           ,
           clearCart : (state)=>{
              localStorage.setItem('cart',JSON.stringify(defaultvalue))
              return defaultvalue
         }
         ,
         removeItem : (state,action)=>{
            
            const {cartId} = action.payload
            console.log(cartId)
            const product = state.cartItems.find((i)=>i.cartId == cartId
            )
           
            state.cartItems = state.cartItems.filter((i)=>i.cartId !== cartId);
            state.numberofitem-=product.amount
             state.cartTotal-=product.price * product.amount
             slice.caseReducers.calculate(state)
             toast.success("product removed")

         },
         editItem:(state , action)=>{
            console.log(action)
             const {cartId , amount } = action.payload
             console.log(state.cartItems)
             const product = state.cartItems.find((i)=>
               i.cartId === cartId
          )
console.log(amount)
console.log(product)
         state.numberofitem+=amount-product.amount
         state.cartTotal+=product.price*  (amount - product.amount)
         product.amount = amount
         slice.caseReducers.calculate(state)
         toast.success("product edit sucessfullt")

      },
         calculate:(state , action)=>{
            state.tax = 0.1*state.cartTotal
            state.orderTotal = state.cartTotal + state.shipping + state.tax
            localStorage.setItem('cart', JSON.stringify(state))
             
         }
     }
})

export const {addItem , clearCart , removeItem , editItem} = slice.actions
export default slice.reducer