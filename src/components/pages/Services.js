import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

import ServiceItem from '../pages/serviceItem';
import { useParams } from 'react-router-dom';

function Services() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch('https://travelgroop.pythonanywhere.com/products/');
      const data = await response.json();
      const productItem = data.find(item => item.slug === slug);
      console.log(productItem);
      setProduct(productItem);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return null;

  return (
    <div>
      <ServiceItem
        key={product.id}
        id={product.id}
        src={product.image}
        text={product.descriptions}
        label={product.title}
        price={product.price}
        path='/services'
      />
    </div>
  );
}
<Footer />;
export default Services;

// function Services(){
//     return(
//         <>
//             <Carousel className='maincar'>
//                 <div>
//                     <img src={img1} width="800px" height="500px"/>
//                 </div>
//                 <div>
//                     <img src={img2} width="80px" />
//                 </div>
//                 <div>
//                     <img src={img3} width="80px" />
//                 </div>
//                 <div>
//                     <img src={img2} width="80px" />
//                 </div>
//                 <div>
//                     <img src={img3} width="80px" />
//                 </div>
//             </Carousel>
//         <div className="clr"></div>
//         <div className="df">

//             <div className="infobar">
//                 <h1>Круиз «Классика Средиземноморья»</h1>
//                 <div className="info">
//                 <div className="box1">

//                 <div className="box">
//                     <div className="minibox">

//                     <BiTimeFive  className="borderxs"/>
//                     </div>
//                     <div className="minibox">
//                         <h4>Длительность</h4>
//                         <p>7 ночей</p>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <div className="minibox">

//                     <GiFootsteps  className="borderxs"/>
//                     </div>
//                     <div className="minibox">
//                         <h4>Тип тура</h4>
//                         <p>Ежедневный тур</p>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="box2">

//                 <div className="box">
//                     <div className="minibox">

//                     <BsPerson  className="borderxs"/>
//                     </div>
//                     <div className="minibox">
//                         <h4>Кол-во людей</h4>
//                         <p>10 человек</p>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <div className="minibox">

//                     <BsTranslate  className="borderxs"/>
//                     </div>
//                     <div className="minibox">
//                         <h4>Языки</h4>
//                         <p>Русский</p>
//                     </div>
//                 </div>
//                 </div>
//                 </div>
//                 <div className="hr hr1"></div>
//                 <h1>О туре</h1>
//                 <h2>8 дней /7 ночей</h2>
//                 <p>Маршрут: Тбилиси-Боржоми- -Батуми</p>
//                 <p>Стоимость при 4* отеле от 8,7 млн</p>
//                 <div className="hr hr1"></div>
//                 <h1>Включено/Не включено</h1>
//                 <div className="comma">
//                     <div className="first">
//                         <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
//                         <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
//                         <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
//                         <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
//                         <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p>
//                     </div>
//                     <div className="second">
//                         <RxCrossCircled className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p>

//                     </div>
//                 </div>
//                 {/* RxCrossCircled */}
//                 {/* AiOutlineCheckCircle */}

//                     <div className="hr hr1"></div>
//                 <h1>Включено/Не включено</h1>

//             </div>

//             <div className="card">
//                 <div className="otziv">
//                     <div className="txt">

//                         <p>от: <span>7 500 000 UZS</span></p>
//                     </div>
//                     <div className="star">
//                         <AiFillStar className='icon1'/><p>0 <span>(Нет отзывов)</span></p>
//                     </div>
//                 </div>
//                 <div className="hr"></div>

//                 <div className="form">
//                     <h1>Забронировать тур</h1>
//                     <h4>Оставьте заявку и наш менеджер свяжется с вами</h4>
//                     <p>Ваше имя *</p>
//                     <input type="text" />
//                     <p>Ваш телефон *</p>
//                     <input type="text" />
//                     <button>Забронировать</button>
//                 </div>
//             </div>
//         </div>

//         </>
//     )
// }

// export default Services;
