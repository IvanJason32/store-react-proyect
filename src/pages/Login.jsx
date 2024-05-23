import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color:"white" }}>
      <h1>Login</h1>
      <p>No estas registrado? <Link style={{color: "white"}} to="/register">Registrate</Link></p>
    </div>
  )
}

export default Login