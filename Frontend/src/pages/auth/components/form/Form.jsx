/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../../components/css/authform.css'

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
    phoneNumber: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
  }
  const google = () =>{
    window.open("http://localhost:3000/auth/login/google","_self")
  }
  return (
    <>
    <div className="container">
      {
        type === 'Register' ?
          <h2>User Registration</h2> :
          <h2>Login </h2>

      }
      <form onSubmit={handleSubmit}>
        {
          type === 'Register' && (
            <div className="form-group">
              <label htmlFor="name">Username:</label>
              <input type="text" id="name" name="username" onChange={handleChange} required />
              <button onClick={google}>Google</button>
            </div>
          )
        }

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleChange} required />
        </div>
        <div className="relative">
          <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
        </div>
        {
          type === 'Register' ? (
            <Link to='/login' style={{ color: 'blue' }} >Go to login</Link>
          ) : (
            <Link to='/register' style={{ color: 'blue' }} >Go to register</Link>

          )
        }
      </form>
    </div>
  </>
  )
}

export default Form
