import React, {useState} from 'react';
import InfoModal from "../../info-modal";

import './FractionAccountInfoScreen.scss';

const FractionAccountInfoScreen = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [accountValue, setAccountValue] = useState(0);

  return (
    <div className='fraction-account-info-screen'>
      {!hasAccess &&
        <InfoModal title='Состояние счёта фракции' text='Вы не руководите фракцией, информация недоступна.
Пожалуйста, обратитесь к главе фракции, чтобы узнать
состояние счёта.'/>
      }
      {hasAccess &&
        <InfoModal title='Состояние счёта фракции' text={`Состояние счета вашей фракции: ${accountValue}`} />
      }
    </div>
  );
};

export default FractionAccountInfoScreen;
