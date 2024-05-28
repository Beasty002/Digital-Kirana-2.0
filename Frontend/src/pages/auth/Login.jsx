import { useDispatch } from 'react-redux'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { login } from '../../store/authSlice'

const Login = () => {
  
    //   if(response.data){
    //     const userToken = response.data.userToken;
    //     const cookieString = `userToken=${userToken}; Secure;`
    //     document.cookie = cookieString;
    //     check if this cookie is present in homepage or not in frontend if present show logout
    //   }
    // } catch (error) {
    //   console.log(error)
    //}
  
    const dispatch = useDispatch()
    const handleLogin = (data) => {
        dispatch(login(data))
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
