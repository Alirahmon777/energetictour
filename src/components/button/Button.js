import React from 'react';
import { Link } from 'react-router-dom';
import './Button.styles.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
          <div
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            
            type={type}
          >
            {children}
          </div>
        </Link>
      );
    };
    