import React from 'react';

import './Balance.scss';

import coinIcon from '../../assets/img/icons/dollar-coin.svg';

export interface BalanceProps {
  title: string,
  value: number
}

const Balance = (props: BalanceProps) => {
  return (
    <div className='balance'>
      <p className='balance__value'>
        {props.value}
        <img className='balance__icon' src={coinIcon}/>
      </p>
      <p className='balance__title'>{props.title}</p>
    </div>
  );
};

export default Balance;
