import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer text-center bg-dark footer-container d-flex justify-content-center align-items-center'>
      <p className='text-white'>Todo App ©{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
