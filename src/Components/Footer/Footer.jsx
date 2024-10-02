import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>
              © 2024 Tanmay Raut. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                {/* <p>Connect with me</p> */}
            </div>
        </div>
    </div>
  )
}

export default Footer