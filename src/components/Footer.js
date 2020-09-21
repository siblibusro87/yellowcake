import React from 'react'
import './Footer.css'



export default () => (
  <div>
    <h4 className="taCenter">
      Dukung Kami dengan Follow{' '}
      <a href="https://instagram.com/siblibusro/"> instagram </a>
    </h4>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Made with love by{' '}
          < a href = "https://sholawat.net/" > Sholawat team </a> | 
          < a href = "/about/" > About </a> |
          < a href = "/privacy-policy/" > Privacy policy </a> |
          < a href = "/contact/" > Contact </a>  |
          < a href = "/disclaimer/" > Disclaimer </a> 
           </span>
           </div>
       </footer>
  </div>
)
