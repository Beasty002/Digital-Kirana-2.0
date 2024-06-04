import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../global/status'
import axios from 'axios'
import Cookies from 'js-cookie'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        token: Cookies.get('userToken') ? Cookies.get('userToken') : null,
        status: null,
    },
    reducers: {
        setStatus(state, action){
            state.status = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        },
        setUser(state,action){
            // console.log('works')
            state.user = action.payload
        }
    }
})

export const {setStatus, setToken, setUser} = authSlice.actions
export default authSlice.reducer

export const login = data => {
    return async function loginChunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response = await axios.post('http://localhost:3000/auth/login',data)
            // console.log(response.data.token)
            if(response.status === 200 && response.data.token){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setToken(response.data.userToken))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(error){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export const register = data =>{
    // console.log(data)
    return async function registerChunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response = await axios.post('http://localhost:3000/auth/register',data)
            if(response.status === 200 && response.data.userToken){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setUser(data))
                dispatch(setToken(response.data.userToken))
                const {username,email,_id} = data
                localStorage.setItem('user', JSON.stringify({username,email,_id}));
                Cookies.set('userToken',response.data.userToken,{expires : 7})
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(error){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}