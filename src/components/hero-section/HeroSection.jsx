
import { Button } from '../button/Button';
import React, { Component } from "react";
import Slider from "react-slick";
import {CiLocationOn} from 'react-icons/ci'
import {LuCalendarClock , LuCalendarX} from 'react-icons/lu'
import './HeroSection.styles.css'
import '../../App.css';
import { render } from '@testing-library/react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    
    <div className='hero-container'>
        <h1>{t("hero.title")}</h1>
        <p>{t("home.header")}</p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
            >
              <div className="fixed-menu">
                <div className="firs-pos">
                  <div className="location">
                    <div className="fixd">

                      <CiLocationOn className='inline'/>
                      <div className="mypone">

                      <p>{t("hero.p")}</p>                      <p className='myptwo'>{t("hero.p1")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="calendar">
                    <div className="fixd">

                    <LuCalendarClock className='inline'/>
                    <div className="mypone">

                    <p>{t("hero.p2")}</p>                    <p className='myptwo'>{t("hero.p1")}</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="second-pos">
                  <div className="fixd">

                  <LuCalendarX className='inline'/>
                  <div className="mypone">

                  <p>{t("hero.p3")}</p>                  <p className='myptwo'>{t("hero.p1")}</p>
                  </div>
                  </div>
                </div>
                <div className="mybnt" >
                  <button style={{background:"#04c299"}}>{t("hero.p4")}</button>
                </div>
              </div>
            </Button>
        </div>
    </div>

    
  )
};


export default HeroSection;