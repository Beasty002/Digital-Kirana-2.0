import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'

const Login = () => {
  const handleLogin = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data)

      if(response.data){
        const userToken = response.data.userToken;
        const cookieString = `userToken=${userToken}; Secure;`
        document.cookie = cookieString;
        // check if this cookie is present in homepage or not in frontend if present show logout
      }
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
