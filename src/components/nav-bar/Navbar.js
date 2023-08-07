import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'
import img from '../../assets/images/energic tour.png'
import { useTranslation } from 'react-i18next';

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    const { t, i18n } = useTranslation();

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={img} alt="" className='img'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} style={{color:"black"}}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            {t("nav.li")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                               {t("nav.li1")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contact" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                               {t("nav.li2")}
                            </Link>
                        </li>
                        <li className="nav-item">
                        <div class="langs">
                            <select 
                                onChange={handleChange} 
                                value={i18n.resolvedLanguage} 
                                name="lang" 
                                id="lang" 
                                className='po'

                            >
                                <option value="uz">Uz</option>
                                <option value="ru">Ru</option>
                                <option value="en">Eng</option>
                            </select>
                        </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar