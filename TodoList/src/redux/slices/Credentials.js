import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../../FirebaseConfig';
import { doc,getDoc } from 'firebase/firestore';

const initialState={
    userid:null,
    email:null,   
    loadingStates: false,

}
export const CredSlice = createSlice({
    name:'credentials',
    initialState,
    reducers:{
        
        setUserid:(state,action)=>{
            state.userid=action.payload;
        },
        setUserLoading:(state,action)=>{
            state.userLoading=action.payload;

        },
        setemail:(state,action)=>{
            state.FirstName=action.payload;
        }
    },
})
export const {setUserid,setUserLoading,setemail}=CredSlice.actions;
export const selectUserId=(state)=>state.credentials.userid;
export const selectemail=(state)=>state.credentials.email;
export const selectUserLoading=(state)=>state.credentials.loadingStates;


export default CredSlice.reducer