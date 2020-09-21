import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/siblibusro/">@instagram</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Made with love by{' '}
          < a href = "https://sholawat.net/" > Sholawat team </a> | 
          < a href = "/contact/" > About </a> |
          < a href = "/privacy-policy/" > Privacy policy </a> |
          < a href = "/contact/" > Contact </a>  |
          < a href = "/disclaimer/" > disclaimer </a> 
           </span>
       </footer>
  </div>
)
