import React from 'react';

import './styles/AccountInfo.scss';
import './styles/AccountId.scss';

import Splitter from "../splitter";
import Balance from "../balance";

export interface AccountInfoProps {
  accountId: string,
  moneyValue: number
}

const AccountInfo = (props: AccountInfoProps) => {
  return (
    <div className='account-info'>
      <div className='account-info__account-id account-id'>
        <p className='account-id__value'>{props.accountId}</p>
        <p className='account-id__title'>Номер счета</p>
      </div>
      <Splitter orientation="vertical" thickness='.1vw' />
      <Balance title='На счете' value={props.moneyValue}/>
    </div>
  );
};

export default AccountInfo;
