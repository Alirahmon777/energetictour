import React, { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from 'react-i18next';

import './info.css'

import Footer from "../footer/Footer";
function ServiceItem(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://travelgroop.pythonanywhere.com/order/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: props.price * 100,
                    product: props.id,
                })

            })
            const order = await response.json();
            window.open(order.generate_link)
            const responseContact = await fetch("https://travelgroop.pythonanywhere.com/contact/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    last_name: lastName,
                    name: `${firstName} ${lastName}`,
                    number: number,
                    order: order.id,
                    product: props.id,
                })

            })
            const contactData = await responseContact.json();

            setEmail('');
            setFirstName('');
            setLastName('');
            setNumber('');

        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <>
               <div className="myimg">
                    <img src={props.src} alt="" className='myimg1' />
                </div>
                <div className="clr"></div>
                <div className="df">

                    <div className="infobar">
                        <h1>{  props.label }</h1>
                        {/* <div className="info">
                        <div className="box1">

                        <div className="box">
                            <div className="minibox">

                            <BiTimeFive  className="borderxs"/>
                            </div>
                            <div className="minibox">
                                <h4>Длительность</h4>
                                <p>7 ночей</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="minibox">

                            <GiFootsteps  className="borderxs"/>
                            </div>
                            <div className="minibox">
                                <h4>Тип тура</h4>
                                <p>Ежедневный тур</p>
                            </div>
                        </div>
                        </div>
                        <div className="box2">

                        <div className="box">
                            <div className="minibox">

                            <BsPerson  className="borderxs"/>
                            </div>
                            <div className="minibox">
                                <h4>Кол-во людей</h4>
                                <p>10 человек</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="minibox">

                            <BsTranslate  className="borderxs"/>
                            </div>
                            <div className="minibox">
                                <h4>Языки</h4>
                                <p>Русский</p>
                            </div>
                        </div>
                        </div>
                        </div> */}
                        <div className="hr hr1"></div>
                        <h1>О туре</h1>
                        <h2>{  props.text  }</h2>
                        <p>Маршрут: Тбилиси-Боржоми- -Батуми</p>
                        <p>Стоимость при 4* отеле от 8,7 млн</p>
                        <div className="hr hr1"></div>
                        {/* <div className="comma">
                            <div className="first">
                                <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
                                <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
                                <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
                                <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p><div className="clr"></div>
                                <AiOutlineCheckCircle className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p>
                            </div>
                            <div className="second">
                                <RxCrossCircled className='inline myi'/><p className='inline myp1'>Проживание в отелях 3* на базе завтрака (ужин за доп. плату)</p>

                            </div>
                        </div> */}
                        {/* RxCrossCircled */}
                        {/* AiOutlineCheckCircle */}

                    </div>

                    <div className="card">
                        <div className="otziv">
                            <div className="txt">

                                <p>от: <span>{ props.price   } UZS</span></p>
                            </div>
                            {/* <div className="star">
                                <AiFillStar className='icon1'/><p>0 <span>(Нет отзывов)</span></p>
                            </div> */}
                        </div>
                        <div className="hr"></div>

                        <div className="form">
                            <form action='' method='' onSubmit={handleSubmit}>
                                <h1>{t("oxiri.h1")}</h1>
                                <h4>{t("oxiri.h4")}</h4>
                                <p>{t("oxiri.p")}</p>
                                <input 
                                    type="text" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <p>{t("oxiri.p1")}</p>
                                <input type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                                <p>{t("oxiri.p2")}</p>
                                <input 
                                    type="tel"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                />
                                
                                <p>{t("oxiri.p3")}</p>
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                <button type='submit'>{t("oxiri.button")}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
    </>
    
  );
}   

export default ServiceItem;


