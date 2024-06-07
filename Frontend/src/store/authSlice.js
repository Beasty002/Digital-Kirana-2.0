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
    return async function registerChunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response = await axios.post('http://localhost:3000/auth/register',data)
            if(response.status === 200 && response.data.userToken){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setUser(data))
                dispatch(setToken(response.data.userToken))
                const {username,email,_id,phoneNumber} = data
                localStorage.setItem('user', JSON.stringify({username,email,_id,phoneNumber}));
                Cookies.set('userToken',response.data.userToken,{expires : 7})
                location.href = 'http://localhost:5173/'
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(error){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export const handleSuccessLogin = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3000/auth/login/success', { withCredentials: true })
        if (response.status === 200) {
            dispatch(setStatus(STATUS.SUCCESS))
            dispatch(setUser(response.data.user))
            dispatch(setToken(response.data.googleToken))
            const {userName,email} = response.data.user;
            localStorage.setItem('user', JSON.stringify({userName,email}));
            Cookies.set("googleToken", response.data.googleToken)
        } else{
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export const getLogoutGoogle =  () => {
    return async (dispatch) => {
        dispatch(setStatus(null))
        dispatch(setUser(null))
        dispatch(setToken(null))
        localStorage.removeItem('user')
        Cookies.remove("googleToken", "connect.sid")
        window.open("http://localhost:3000/auth/google/logout", "_self")
    }
}