import React from 'react';

import './PropertyCard.scss';

export interface PropertyCardProps {
  image: string,
  infoProperties: {
    name: string,
    value: string,
  }[],
  isInactive?: boolean,
  onClick?: (e: React.MouseEvent) => void
}
const PropertyCard = (props: PropertyCardProps) => {
  return (
    <div className='property-card' onClick={props.onClick}>
      <img className={`property-card__image ${props.isInactive ? 'property-card__image_inactive' : ''}`} src={props.image}/>
      <div className='property-card__info-container'>
        {
          props.infoProperties.map(property => (
            <div className='property-card-info'>
              <p className='property-card-info__name'>{property.name}</p>
              <p className='property-card-info__value'>{property.value}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PropertyCard;
