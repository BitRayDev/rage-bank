import React, {useState} from 'react';
import TransactionDisplay from "../../transaction-display";

import './FractionWithdrawScreen.scss';

import coinIcon from '../../../assets/img/icons/dollar-coin.svg';
import walletDown from '../../../assets/img/icons/wallet-down.svg';

import LimitInfoProperty from "../../limit-info-property";
import Button from "../../button";

const FractionWithdrawScreen = () => {
  const [value, setValue] = useState(0);

  const [limits, setLimits] = useState([
    {
      name: 'На пополнение',
      value: 0,
      maxValue: 50000
    },
    {
      name: 'На снятие',
      value: 0,
      maxValue: 50000
    },
  ]);

  const limitsToProperties = () => {
    return limits.map(limit => ({
      name: limit.name,
      value: () => <LimitInfoProperty value={limit.value} limit={limit.maxValue} per='в час'/>
    }))
  }

  const onChange = (e: React.ChangeEvent) => {
    const tempValue = (e.target as HTMLInputElement).value;
    if (Number.isNaN(tempValue))
      return;

    const numValue = Number(tempValue);

    setValue(numValue);
  }

  const onSubmit = () => {
    // TODO: Add submit handler
  }

  return (
    <div className='personal-deposit-screen'>
      <TransactionDisplay
        fields={
          [
            {
              label: 'Введите сумму',
              name: 'amount',
              icon: coinIcon,
              value: value.toString(),
              onChange: onChange
            }
          ]
        }
        info={{
          title: 'Лимиты',
          properties: limitsToProperties()
        }}
        onValuePresetClick={(value) => setValue(value)
        }
      />
      <div className='personal-deposit-screen__buttons'>
        <Button text='Снять' icon={walletDown} theme='green' onClick={onSubmit}/>
      </div>
    </div>
  );
};

export default FractionWithdrawScreen;
