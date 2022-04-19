import React from 'react';
import {TicketData} from "../pages/tickets";

import './TicketCard.scss';
import Button from "../button";

export interface TicketCardProps {
  data: TicketData,
  onPayClick?: (e: React.MouseEvent ) => void
}
const TicketCard = (props: TicketCardProps) => {
  return (
    <div className='ticket-card'>
      <div className='ticket-card__text-container'>
        <p className='ticket-card__title'>{props.data.title}</p>
        <p className='ticket-card__text'>{props.data.text}</p>
      </div>
      <div className='ticket-card__pay-container'>
        <p className='ticket-card__value'>{props.data.value}$</p>
        <Button text='Оплатить' theme='green' onClick={props.onPayClick}/>
      </div>
    </div>
  );
};

export default TicketCard;
