import { useState } from 'react'

const Form = ({ type,onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(formData)
  }
  // console.log(formData)
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
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />
              </div>
            )
          }

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} required />
          </div>
          {type === 'Register' ?
          <button type="submit">Register</button> :
          <button type="submit">Login</button>
        }
        </form>
      </div>
    </>
  )
}

export default Form
