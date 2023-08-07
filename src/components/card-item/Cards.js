import React, { useEffect, useState } from 'react';
import './Cards.styles.css';
import CardItem from './CardItem';
import { useTranslation } from 'react-i18next';
function Cards() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const fetchData = async () => {
    
    try {
      const response = await fetch("https://travelgroop.pythonanywhere.com/products/");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch(e) {
      console.log(e);
    } 
  }

  useEffect(() => {
    
    fetchData();
  }, []);

  if(loading) return null;

  return (
    
    <div className='cards'>
      <h1>{t("card.name")}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          {products.map((item) => (
            <CardItem
              key={item.id}
              src={item.image}
              text={item.title}
              label={item.title}
              price={item.price + " UZS"}
              
              path={`/services/${item.slug}`}
            />
            
          ))}
          </ul>
        </div>
        
      </div>
      <button className='Button_o'>{t("card.button")}</button>
    </div>
   
  );

}


export default Cards;
