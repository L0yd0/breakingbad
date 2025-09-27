import React, { useState, useEffect} from 'react'
import axios from 'axios'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <header className='center'>
        <img src={logo} alt="" />
    </header>
  )
}

export default Header
