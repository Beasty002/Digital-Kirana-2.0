import Layout from '../../components/layout/Layout'
import { register } from '../../store/authSlice'
import Form from './components/form/Form'
import {useDispatch} from "react-redux"

const Register = () => {
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
