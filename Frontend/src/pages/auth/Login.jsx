import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'

const Login = () => {
  const handleLogin = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data)
      console.log(data)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Layout>
        <Form type='Login' onSubmit={handleLogin} />
      </Layout>
    </>
  )
}

export default Login
