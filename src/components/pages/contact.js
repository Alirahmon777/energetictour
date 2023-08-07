import React, { useState } from "react";
import '../../App.css';
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';
export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({

        name: "",
        number: "",
        email: "",
        text: "",
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        })); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, number, email, text } = formData;
        try {
            const txt = `<b>Name</b>: ${name}%0A<b>Email</b>: ${email}%0A<b>Phone number: ${number}</b>%0A<b>Text</b>: ${text}`;
            const response = await fetch(`https://api.telegram.org/bot6341480006:AAEiWY8WUudLPdF9hYquPIyVQbfkKvqaxFI/sendMessage?chat_id=-901671549&parse_mode=html&text=${txt}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                }),
            })
            const data = response.json();
            alert("Success");
            setFormData({
                name: "",
                number: "",
                email: "",
                text: "",
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <div className="over">


                <div className="information">
                    <h1>{t("Contact.h1")}</h1>
                    <p className="oh">{t("Contact.p")}</p>
                    <p> {t("Contact.p1")}</p>
                    <hr />
                    <p className="phonenumber cls">(+99893) 9510244</p>
                    <hr />
                    <p>uc.coding.uz@gmail.com</p>
                </div>


                <div className="forma">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h1>{t("Contact.h2")}</h1>
                        <div className="dflex">
                            <input 
                                type="text" 
                                placeholder="Вашe имя *"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}    
                                required
                            />
                            <input 
                                type="email" 
                                className="margin" 
                                placeholder="Ваш email *"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}    
                                required
                            />
                        </div>
                        <input 
                            type="tel" 
                            className="hundred" 
                            placeholder="Ваш телефон *"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                        />
                        <textarea 
                            id="" 
                            cols="30" 
                            rows="10" 
                            placeholder="Your text..."
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" style={{background:"#04c299"}}>{t("Contact.button")}</button>
                    </form>
                </div>


            </div>
            <Footer />
        </>
    )
}