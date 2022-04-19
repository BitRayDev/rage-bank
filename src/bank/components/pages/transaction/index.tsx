import React, {useState} from 'react';
import TransactionDisplay from "../../transaction-display";

import './TransactionScreen.scss';

import coinIcon from '../../../assets/img/icons/dollar-coin.svg';
import walletDown from '../../../assets/img/icons/wallet-down.svg';

import LimitInfoProperty from "../../limit-info-property";
import Button from "../../button";

const PersonalDepositScreen = () => {
  const [value, setValue] = useState(0);
  const [accountId, setAccountId] = useState('');

  const [limits, setLimits] = useState([
    {
      name: 'Лимит',
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

  const onValueChange = (e: React.ChangeEvent) => {
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
              label: 'Введите номер счета',
              name: 'accounId',
              value: accountId,
              onChange: (e) => setAccountId((e.target as HTMLInputElement).value)
            },
            {
              label: 'Введите сумму',
              name: 'amount',
              icon: coinIcon,
              value: value.toString(),
              onChange: onValueChange
            },

          ]
        }
        info={{
          title: 'Перевод другим людям:',
          properties: [
            {
              name: 'Комиссия',
              value: () => <p>0.2%</p>
            },
            ...limitsToProperties()
          ]
        }}
        onValuePresetClick={(value) => setValue(value)
        }
      />
      <div className='personal-deposit-screen__buttons'>
        <Button text='Перевести' icon={walletDown} theme='green' onClick={onSubmit}/>
      </div>
    </div>
  );
};

export default PersonalDepositScreen;
