import React, {createRef, useEffect, useState} from 'react';

import './TicketsScreen.scss';

import infoIcon from '../../../assets/img/icons/info-green.svg';
import carImage from '../../../assets/img/test-car.png';

import PropertyCard from "../../property-card";
import Button from "../../button";
import TicketCard from "../../ticket-card";
import InfoModal from "../../info-modal";

export interface CarData {
  model: string,
  plates: string,
  image: string
}

export interface TicketData {
  title: string,
  carPlates: string,
  text: string,
  value: number
}

export interface TicketsScreenProps {
}

const TicketsScreen = (props: TicketsScreenProps) => {
  const [ticketsAmount, setTicketsAmount] = useState(1);
  const [ticketsMaxAmount, setTicketsMaxAmount] = useState(0);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [cars, setCars] = useState<CarData[]>([
    testCar1,
    testCar2,
    testCar1,
    testCar2,
    testCar1,
    testCar2,
  ]);
  const [tickets, setTickets] = useState<TicketData[]>([
    testTicket,
    testTicket,
    testTicket,
    testTicket,
    testTicket,
    testTicket,
    testTicket,
  ]);
  const [currentCar, setCurrentCar] = useState<CarData>();

  const carsRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!carsRef?.current)
      return;

    carsRef.current.addEventListener("wheel", function (e) {
      if (!carsRef?.current)
        return;

      if (e.deltaY > 0) carsRef.current.scrollLeft += 25;
      else carsRef.current.scrollLeft -= 25;
    });
  })

  const onInfoIconMouseEnter = () => {
    setIsTooltipActive(true);
  }
  const onInfoIconMouseLeave = () => {
    setIsTooltipActive(false);
  }

  return (
    <div className='tickets-screen'>
      {!ticketsAmount &&
        <div className='tickets-screen__modal-container'>
          <InfoModal title='Штрафной счёт' text='У вас нет не оплаченных штрафов. Продолжайте наслаждаться игрой!'/>
        </div>
      }
      {ticketsAmount &&
        <>
          <div className='tickets-screen__cars-section'>
            <p className='tickets-screen__section-title'>Ваши автомобили</p>
            <div className='tickets-screen__cars' ref={carsRef}>
              {
                cars.map(carData => (
                  <PropertyCard
                    image={carData.image}
                    infoProperties={[
                      {
                        name: 'Марка машины',
                        value: carData.model
                      },
                      {
                        name: 'Номера',
                        value: carData.plates
                      },
                    ]}
                    onClick={(e) => setCurrentCar(carData)}
                    isInactive={currentCar !== carData}
                  />
                ))
              }
            </div>
          </div>
          <div className='tickets-screen__general-info'>
            <div className='tickets-screen__general-info-section'>
              <p className='tickets-screen__section-title'>Ваши штрафы</p>
              <p className='tickets-screen__tickets-counter tickets-counter'>
                {ticketsAmount}/{ticketsMaxAmount}
                <div className='tickets-counter__icon-container'>
                  <p className='tickets-counter__tooltip' style={{opacity: Number(isTooltipActive)}}>
                    Если кол-во неоплаченных штрафов будет превышать эту сумму - ваши водительские права будут
                    аннулированы
                    и вы не сможете их получить, пока не погасите задолженность перед государством.
                  </p>

                  <img className='tickets-counter__icon' src={infoIcon} onMouseEnter={onInfoIconMouseEnter}
                       onMouseLeave={onInfoIconMouseLeave}/>
                </div>
              </p>
            </div>
            <Button text='Оплатить всё' theme='small'/>
          </div>
          <div className='tickets-screen__tickets'>
            {
              tickets.map(ticketData => {
                if (ticketData.carPlates === currentCar?.plates)
                  return <TicketCard data={ticketData}/>
              })
            }
          </div>
        </>
      }
    </div>
  );
};

const testCar1 = {
  image: carImage,
  plates: '111111',
  model: 'Tesla model X'
}
const testCar2 = {
  image: carImage,
  plates: 'XXSSXSFFSX',
  model: 'Tesla model X'
}
const testTicket = {
  title: 'Штраф какой-то там',
  text: 'А ну ка быстро штраф плати, а',
  carPlates: 'XXSSXSFFSX',
  value: 10000
}

export default TicketsScreen;
