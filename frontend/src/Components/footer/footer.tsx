import React from 'react'

import logo from '../../image/logo/logo.png'
import classes from './footer.module.css'
import Links from './links/links'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <div className={classes.band} />
    <div className={classes.main}>
      <div className={classes.brand}>
        <img className={classes.logo} src={logo} alt="ים אירועים" />
        <div className={classes.social}>
          <a href='https://www.facebook.com/profile.php?id=100004933061558' title="פייסבוק">
            <AiFillFacebook />
          </a>
          <a href='https://www.instagram.com/yam1event/' title="אינסטגרם">
            <AiFillInstagram />
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGzXhpGHGnRqTsjtjscxGQXnqZRdGNjgvJBqgGzXJRlhpRfFBKCBRwGDdNrxwNlRgKSnG' title="מייל">
            <AiFillMail />
          </a>
          <a href='tel:0523757040' title="טלפון">
            <AiFillPhone />
          </a>
          <a href='https://api.whatsapp.com/send?phone=0523757040' title="וואטסאפ">
            <RiWhatsappFill />
          </a>
        </div>
      </div>
      <div className={classes.linksArea}>
        <Links />
      </div>
    </div>
    <div className={classes.bottom}>
      <p className={classes.copy}>© כל הזכויות שמורות לים אירועים</p>
    </div>
  </footer>
)

export default Footer
