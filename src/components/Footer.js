import React from 'react'
import './Footer.css'
import { FacebookShareButton, FacebookIcon,} from 'react-share'
import {TelegramShareButton,TelegramIcon,} from 'next-share'
import {TwitterShareButton,TwitterIcon,} from 'next-share'
import {WhatsappShareButton,WhatsappIcon,} from 'next-share'
import {LineShareButton,LineIcon,} from 'next-share'


export default () => (
  <div>
    <h5 className="taCenter">
      Dukung Kami dengan Share dan Follow{' '}
      <br/>
      < FacebookShareButton url = {'https://sholawat.net'}
      quote = {'Kumpulan sholawat para imam Toriqoh dan lirik qosidah' }
      hashtag = {'#Sholawat'} > 
      < FacebookIcon size={32} round/>
      </FacebookShareButton>

      < TelegramShareButton url = {'https://sholawat.net'}
      title = {'Kumpulan sholawat para imam Toriqoh dan lirik qosidah'} >
        <TelegramIcon size = {32}
      round/> </TelegramShareButton>

      < TwitterShareButton url = {'https://sholawat.net'}
      title = {'Kumpulan sholawat para imam Toriqoh dan lirik qosidah'} >
        <TwitterIcon size = {32} round /> 
        </TwitterShareButton>
      < WhatsappShareButton url = {'https://sholawat.net' }
      title = {'Kumpulan sholawat para imam Toriqoh dan lirik qosidah'}
      separator = ":: " >
        <WhatsappIcon size = {32} round /> 
        </WhatsappShareButton>
< LineShareButton url = {'https://sholawat.net'}
title = {'Kumpulan sholawat para imam Toriqoh dan lirik qosidah'} >
  <LineIcon size = {32} round />  </LineShareButton>

    </h5>    
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
