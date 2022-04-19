import React from 'react';

import './Button.scss'

export interface ButtonProps {
  theme?: string,
  icon?: string,
  text: string,
  onClick?: (e: React.MouseEvent) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`button ${props.theme ? `button_theme_${props.theme}` : ''}`} onClick={props.onClick}>
      {props.icon &&
        <img className='button__icon' src={props.icon}/>
      }
      {props.text}
    </button>
  );
};
export default Button;
