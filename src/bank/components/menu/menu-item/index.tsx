import React, {useState} from 'react';
import {MenuItemData} from "../index";

import './MenuItem.scss'

import arrowIcon from '../../../assets/img/icons/fold.svg';

export interface MenuItemProps {
  data: MenuItemData,
  isActive?: boolean,
  onClick?: (e: React.MouseEvent) => void,
  children?: React.ReactNode
}
const MenuItem = (props: MenuItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    setIsExpanded(!isExpanded);
    props.onClick?.(e);
  }

  return (
    <>
      <div className={`menu-item ${props.isActive ? 'menu-item_active' : ''}`} onClick={onClick}>
        <p className='menu-item__title'>
          <img className='menu-item__icon' src={props.data.icon}/>
          {props.data.title}
        </p>
        { props.children &&
          <img className={`menu-item__arrow ${isExpanded ? 'menu-item__arrow_flipped' : ''}`} src={arrowIcon}/>
        }
      </div>
      <div className='menu-item__sub-items' style={{maxHeight: isExpanded ? `${(props.data.subItems?.length ?? 0)*3.5}vw` : '0'}}>
        {props.children}
      </div>
    </>
  );
};

export default MenuItem;
