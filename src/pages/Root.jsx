import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import './Root.css'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

export default Root