import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

// import "../../../node_modules/slick-carousel/slick/slick.css"
// import "../../../node_modules/slick-carousel/slick/slick-theme.css"

import '../../components/hero-section/HeroSection.styles.css';

function Slide1() {
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive} className='mywid'>
      <div>
        <img
          src='https://edem.uz/wp-content/uploads/2023/05/scenery-keizersgracht-canal-amsterdam-with-reflection-buildings-green-trees-400x400.jpg'
          alt=''
          className='myradius'
        />
        <p>{t('carusel.name1')}</p>
      </div>
      <div>
        <img
          src='https://edem.uz/wp-content/uploads/2023/05/cairo-downtown-nile-river-aerial-view-egypt-400x400.jpg'
          alt=''
          className='myradius'
        />
        <p>{t('carusel.name2')}</p>
      </div>
      <div>
        <img
          src='https://edem.uz/wp-content/uploads/2023/04/view-city-alanya-from-top-hill-400x400.jpg'
          alt=''
          className='myradius'
        />
        <p>{t('carusel.name3')}</p>
      </div>
      <div>
        <img src='https://edem.uz/wp-content/uploads/2023/06/malaysiya-400x400.jpg' alt='' className='myradius' />
        <p>{t('carusel.name4')}</p>
      </div>
      <div>
        <img src='https://edem.uz/wp-content/uploads/2023/06/maldives-400x400.jpg' alt='' className='myradius' />
        <p>{t('carusel.name5')}</p>
      </div>
      <div>
        <img
          src='https://edem.uz/wp-content/uploads/2023/05/panorama-thun-city-canton-bern-with-alps-thunersee-lake-switzerland-400x400.jpg'
          alt=''
          className='myradius'
        />
        <p>{t('carusel.name6')}</p>
      </div>
      <div>
        <img src='https://edem.uz/wp-content/uploads/2023/06/czech-400x400.jpg' alt='' className='myradius' />
        <p>{t('carusel.name7')}</p>
      </div>
      <div>
        <img src='https://edem.uz/wp-content/uploads/2023/06/singapore-400x400.jpg' alt='' className='myradius' />
        <p>{t('carusel.name8')}</p>
      </div>
    </Carousel>
  );
}

export default Slide1;
