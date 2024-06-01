import { createSlice } from '@reduxjs/toolkit'
import STATUS from '../global/status'
import axios from 'axios'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
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
            if(response.status === 200 && response.data.token){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setToken(response.data.token))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(error){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export const register = data =>{
    return async function registerChunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response = await axios.post('http://localhost:3000/auth/register',data)
            console.log(response.data)
            if(response.status === 200){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setUser(data))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(error){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}