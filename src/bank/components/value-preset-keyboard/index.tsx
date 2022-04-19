import React from 'react';

import './ValuePresetKeyboard.scss';

import coinIcon from '../../assets/img/icons/dollar-coin.svg'

export interface ValuePresetKeyboardProps {
  presets: number[],
  onValuePresetClick?: (value: number) => void,
}
const ValuePresetKeyboard = (props: ValuePresetKeyboardProps) => {
  return (
    <div className='value-preset-keyboard'>
      {
        props.presets.map(preset => (
          <div className='value-preset-keyboard__preset' onClick={() => props.onValuePresetClick?.(preset)}>
            {preset}
            <img className='value-preset-keyboard__preset-icon' src={coinIcon}/>
          </div>
        ))
      }
    </div>
  );
};

export default ValuePresetKeyboard;
