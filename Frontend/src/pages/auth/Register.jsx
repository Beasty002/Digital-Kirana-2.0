import Layout from '../../components/layout/Layout'
import { register } from '../../store/authSlice'
import Form from './components/form/Form'
import {useDispatch} from "react-redux"

const Register = () => {
  
  //   try {
  //     const response = await axios.post('http://localhost:3000/auth/register', data)
  //     console.log(response.data)

  //     console.log('Data inserted successfully')
  //   } catch (error) {
  //     console.log(error.response.status)
  //     // Here show some messages if status is 422 for validation error//   }\\
  const dispatch = useDispatch()
  const handleRegister = (data) => {
      dispatch(register(data))
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
