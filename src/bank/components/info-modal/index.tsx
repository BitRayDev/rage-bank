import React from 'react';

import './InfoModal.scss'

import infoIcon from '../../assets/img/icons/info-green.svg'
import backIcon from '../../assets/img/icons/arrow.svg'

import Button from "../button";

export interface InfoModalProps {
  title: string,
  text: string,
  onClose?: () => void,
  // buttons: InfoModalButtonData[],
  // onButtonClick: (button: InfoModalButtonData) => void
}
const InfoModal = (props: InfoModalProps) => {
  return (
    <div className='info-modal'>
      <img className='info-modal__icon' src={infoIcon}/>
      <p className='info-modal__title'>{props.title}</p>
      <p className='info-modal__text'>{props.text}</p>
    </div>
  );
};

export default InfoModal;
