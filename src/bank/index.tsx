import React, {useState} from 'react';

import './styles/Bank.scss';

import logo from './assets/img/logo.svg';
import atmLogo from './assets/img/atm-logo.svg';
import quitIcon from './assets/img/icons/quit.svg';

import Balance from "./components/balance";
import AccountInfo from "./components/account-info";
import Menu from "./components/menu";
import TransactionDisplay from "./components/transaction-display";
import Button from "./components/button";
import PersonalDepositScreen from "./components/pages/personal-deposit";
import InfoModal from "./components/info-modal";
import TicketsScreen from "./components/pages/tickets";
import FeesCatalogScreen from "./components/pages/fees";
import PersonalWithdrawScreen from "./components/pages/personal-withdraw";
import TransactionScreen from "./components/pages/transaction";
import FractionAccountInfoScreen from "./components/pages/fraction-account-info";
import FractionDepositScreen from "./components/pages/fraction-deposit";
import FractionWithdrawScreen from "./components/pages/fraction-withdraw";
import Fees from "./components/pages/fees";
import FeesScreen from "./components/pages/fees";

const Bank = () => {
  const [activeScreenName, setActiveScreenName] = useState('');
  const [mode, setMode] = useState<"bank" | "atm">('atm');

  const getActiveScreen = () => {
    switch (activeScreenName) {
      case 'Пополнить счет':
        return <PersonalDepositScreen/>;
      case 'Снять со счета':
        return <PersonalWithdrawScreen/>;
      case 'Перевод на другой счет':
        return <TransactionScreen/>;
      case 'Состояние счета фракции':
        return <FractionAccountInfoScreen/>;
      case 'Пополнить счет фракции':
        return <FractionDepositScreen/>;
      case 'Снять со счета фракции':
        return <FractionWithdrawScreen/>;
      case 'Штрафы':
        return <TicketsScreen/>;
      case 'Налоги':
        return <FeesScreen/>;
    }
  }

  return (
    <div className='bank'>
      {mode === "bank" &&
        <img className='bank__logo' src={logo}/>
      }
      {mode === "atm" &&
        <img className='bank__atm-logo' src={atmLogo}/>
      }
      {mode === "bank" &&
        <p className='bank__screen-title'>{activeScreenName}</p>
      }
      <div className='bank__cash-info'>
        <Balance title='Наличные' value={0}/>
      </div>
      <div className='bank__sidebar'>
        <div className='bank__sidebar-section'>
          <AccountInfo accountId='1 241 351 3' moneyValue={800000}/>
          <Menu mode={mode} onItemClick={(item) => setActiveScreenName(item.title)}/>
        </div>
        <Button text='Выйти' icon={quitIcon} theme='green'/>
      </div>
      <div className='bank__content'>
        {
          getActiveScreen()
        }
      </div>
      {/*<FeesCatalogScreen/>*/}
      {/*<TicketsScreen/>*/}
      {/*<InfoModal
        title='Штрафной счёт'
        text='У вас нет не оплаченных штрафов. Продолжайте наслаждаться игрой!'
      />*/}
      {/*<PersonalDepositScreen/>*/}
    </div>
  );
};


export default Bank;
