// Component for Headers

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='heading'>Trip Planner</div>
        <div className='login_signup'>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/login">Login</Link></button>
        </div>
    </div>
  )
}

export default Header