import React from 'react';

import './LimitInfoProperty.scss';

import coinIcon from '../../assets/img/icons/dollar-coin.svg';

export interface LimitInfoPropertyProps {
  value: number,
  limit: number,
  per: string,
}
const LimitInfoProperty = (props: LimitInfoPropertyProps) => {
  return (
    <p className='limit-info-property'>
      {props.value}/{props.limit}
      <img className='limit-info-property__icon' src={coinIcon}/>
      {props.per}
    </p>
  );
};

export default LimitInfoProperty;
