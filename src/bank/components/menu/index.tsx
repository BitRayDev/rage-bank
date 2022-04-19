import React, {useState} from 'react';

import './Menu.scss';

import walletUpIcon from '../../assets/img/icons/wallet-up.svg';
import walletDownIcon from '../../assets/img/icons/wallet-down.svg';
import walletIcon from '../../assets/img/icons/wallet.svg';
import transactionIcon from '../../assets/img/icons/transaction.svg';
import teamIcon from '../../assets/img/icons/team.svg';
import ticketIcon from '../../assets/img/icons/ticket.svg';
import feesIcon from '../../assets/img/icons/fees.svg';
import MenuItem from "./menu-item";

export interface MenuItemData {
  icon: string,
  title: string,
  subItems?: MenuItemData[],
}
export interface MenuProps {
  mode: "bank" | "atm"
  onItemClick?: (item: MenuItemData) => void,
}
const Menu = (props: MenuProps) => {
  const items = props.mode === "bank" ? bankMenuItems : atmMenuItems;
  const [currentItem, setCurrentItem] = useState<MenuItemData>();

  const onMenuItemClick = (item: MenuItemData) => {
    if(item.subItems)
      return;

    setCurrentItem(item);
    props.onItemClick?.(item);
  }

  return (
    <div className='menu'>
      {renderItems(items, currentItem, onMenuItemClick)}
    </div>
  );
};

const renderItems: any = (items: MenuItemData[], currentItem: MenuItemData, onClick: (item: MenuItemData) => void) => {
  return items.map(item => (
    <>
      <MenuItem data={item} isActive={currentItem === item} onClick={() => onClick(item)}>
        {item.subItems &&
          renderItems(item.subItems, currentItem, onClick)
        }
      </MenuItem>
    </>
  ))
}
export default Menu;

const bankMenuItems = [
  {
    icon: walletUpIcon,
    title: "Пополнить счет",
  },
  {
    icon: walletDownIcon,
    title: "Снять со счета"
  },
  {
    icon: transactionIcon,
    title: "Перевод на другой счет"
  },
  {
    icon: teamIcon,
    title: "Счет фракции",
    subItems: [
      {
        icon: walletIcon,
        title: "Состояние счета фракции",
      },
      {
        icon: walletUpIcon,
        title: "Пополнить счет фракции"
      },
      {
        icon: walletDownIcon,
        title: "Снять со счета фракции"
      },
    ],
  },
  {
    icon: ticketIcon,
    title: "Штрафы"
  },
  {
    icon: feesIcon,
    title: "Налоги"
  },
];

const atmMenuItems = [
  {
    icon: walletUpIcon,
    title: "Пополнить счет",
  },
  {
    icon: walletDownIcon,
    title: "Снять со счета"
  },
  {
    icon: transactionIcon,
    title: "Перевод на другой счет"
  },
  {
    icon: teamIcon,
    title: "Счет фракции",
    subItems: [
      {
        icon: walletIcon,
        title: "Состояние счета фракции",
      },
      {
        icon: walletUpIcon,
        title: "Пополнить счет фракции"
      },
      {
        icon: walletDownIcon,
        title: "Снять со счета фракции"
      },
    ],
  },
  {
    icon: ticketIcon,
    title: "Штрафы"
  },
]
