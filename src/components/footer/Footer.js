import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './Footer.styles.css'
import icon from '../../assets/images/energic tour.png'
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t } = useTranslation();
    return (
        <>

            <div className="footer">
              <div className="footer-contact">

              </div>

              <div className="mylinks">
                <div className="boxfirst">
                <div className="obx ml">
                  <img src={icon} width="60%" className='lm' alt="" />
                  <div className="icons">
                  <div className='salom2'>
                   <Link
                      class='social-icon-link facebook'
                      to='/'
                      target='_blank'
                      aria-label='Facebook'
                      >
                      <i class='fab fa-facebook-f' style={{color:"#04c299"}}/>
                    </Link>
                    <Link
                      class='social-icon-link instagram'
                      to='/'
                      target='_blank'
                      aria-label='Instagram'
                      >
                      <i class='fab fa-instagram'style={{color:"#04c299"}} />
                    </Link>
                    <Link
                      class='social-icon-link youtube'
                      to='/'
                      target='_blank'
                      aria-label='Youtube'
                      >
                      <i class='fab fa-youtube'style={{color:"#04c299"}} />
                    </Link>
                    <Link
                      class='social-icon-link youtube'
                      to='/'
                      target='_blank'
                      aria-label='Telegram'
                      >
                      <i class= 'fab fa-telegram' style={{color:"#04c299"}}  ></i>
                    </Link>
                    </div>
                  </div>

                  </div>
                <div className="obx">
                  <h2 className="menu">{t("foooter.h3")}</h2>
                  <a href="#  " className='decoration'>{t("menyu.menucha")}</a>
                  <a href="#" className='decoration'>{t("menyu.menucha2")}</a>
                  <a href="#" className='decoration'>{t("menyu.menucha3")} </a>
                </div>

                </div>
                <div className="boxsecond">

                


                <div className="obx">
                  <h2 className="menu">{t("foooter.h2")}</h2>
                  <a href="#" className='decoration'>{t("foooter.a")}</a>
                  <a href="#" className='decoration'> {t("foooter.a1")}</a>
                </div>
                

                </div>
              </div>
                <a href=" https://uc-coding.uz"><p className='txtcode'> ©UC-coding | 2023 </p></a>
            </div>
        
        </>
        
    );
  }
  
  export default Footer;