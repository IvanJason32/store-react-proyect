import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <h1>Login</h1>
      <p>No estas registrado? <Link to="/register">Registrate</Link></p>
    </div>
  )
}

export default Login