import { createSlice } from "@reduxjs/toolkit"

import { toast } from "react-toastify"

const getuser = ()=>{
     return JSON.parse(localStorage.getItem('user')) || null
}

const initialstate = {
     user : getuser(),
     theme : 'luxury'
}

const userslice = createSlice({
     name:'user',initialState:initialstate,
     reducers:{
          loginUser: (state, action) => {
               const user = { ...action.payload.user, token: action.payload.jwt };
               state.user = user;
               localStorage.setItem('user', JSON.stringify(user));
             },
             logoutUser: (state) => {
               state.user = null;
               localStorage.removeItem('user');
               toast.success('Logged out successfully');
             },
        
     }
})


export const {loginUser , logoutUser  , toggleTheme} = userslice.actions

export default userslice.reducer