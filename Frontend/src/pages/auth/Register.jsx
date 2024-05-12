import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'

const Register = () => {
  const handleRegister = async (data)=>{
    try{
      const response = await axios.post('http://localhost:3000/register',data)
      console.log(data)

      console.log('Data inserted successfully')
      // console.log(response)
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <>
      <Layout>
        <Form type='Register' onSubmit={handleRegister} />
      </Layout>
    </>
  )
}

export default Register
