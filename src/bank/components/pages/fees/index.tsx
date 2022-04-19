import React, {useState} from 'react';

import './FeesScreen.scss';

import testImage from '../../../assets/img/test-car.png';
import totalIcon from '../../../assets/img/icons/bills.svg';
import filterIcon from '../../../assets/img/icons/filter-green.svg'

import PropertyCard, {PropertyCardProps} from "../../property-card";
import Button from "../../button";

interface FeesSubjectData {
  image: string,
  propertiesTitle: string,
  properties: {
    name: string,
    value: string,
    showInBrief?: boolean
  }[],
  totalValue: number
}

const FeesScreen = () => {
  const testSubject: FeesSubjectData = {
    image: testImage,
    propertiesTitle: 'О доме:',
    properties: [
      {
        name: 'Номер дома',
        value: '123',
        showInBrief: true,
      },
      {
        name: 'Налог',
        value: '300 000$',
        showInBrief: true,
      }
    ],
    totalValue: 500000
  }

  const [feeSubjects, setFeeSubjects] = useState<FeesSubjectData[]>([
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
    testSubject,
  ]);
  const [currentSection, setCurrentSection] = useState('Все');
  const [currentSubject, setCurrentSubject] = useState<FeesSubjectData>();

  const sections = [
    'Все',
    'Дома',
    'Машины',
    'Бизнесы'
  ]

  const onSectionClick = (sectionName: string) => {
    // TODO: Add loading items
    setCurrentSection(sectionName);
  }

  const onSubjectClick = (subjectData: FeesSubjectData) => {
    setCurrentSubject(subjectData);
  }

  const onPayClick = (e: React.MouseEvent) => {
    // TODO: Add handler for pay
  }

  return (
    <div className='fees-screen'>
      { !currentSubject &&
        <div className='fees-screen__catalog'>
          <p className='fees-screen__filter-label'>
            <img className='fees-screen__filter-label-icon' src={filterIcon}/>
            Фильтрация имущества
          </p>
          <div className='fees-screen__filter-switch filter-switch'>
            <div className='filter-switch'>
              {
                sections.map(section => (
                  <p
                    className={`filter-switch__option ${currentSection === section ? 'filter-switch__option_active' : ''}`}
                    onClick={() => onSectionClick(section)}
                  >
                    {section}
                  </p>
                ))
              }
            </div>
          </div>
          <div className='fees-screen__property-cards'>
            {
              feeSubjects.map(subjectData => (
                <PropertyCard image={subjectData.image}
                              infoProperties={subjectData.properties.filter(property => property.showInBrief)}
                              onClick={() => onSubjectClick(subjectData)}/>
              ))
            }
          </div>
        </div>
      }
      { currentSubject &&
        <div className='fees-screen__subject fees-subject'>
          <Button text='Вернуться назад' theme='green' onClick={() => setCurrentSubject(undefined)}/>
          <img className='fees-subject__image' src={currentSubject.image} />
          <div className='fees-subject__properties'>
            <p className='fees-subject__properties-title'>{currentSubject.propertiesTitle}</p>
            {
              currentSubject.properties.map(property => (
                <div className='fees-subject__property fees-subject-property'>
                  <p className='fees-subject-property__name'>{property.name}</p>
                  <p className='fees-subject-property__value'>{property.value}</p>
                </div>
              ))
            }
          </div>
          <div className='fees-subject__final-container'>
            <Button text='Оплатить налог' theme='green' onClick={onPayClick}/>
            <div className='fees-subject__total-container'>
              <p className='fees-subject__total-label'>
                <img className='fees-subject__total-icon' src={totalIcon}/>
                К оплате:
              </p>
              <p className='fees-subject__total-value'>{currentSubject.totalValue}$</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default FeesScreen;
