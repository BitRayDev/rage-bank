import React from 'react';

import './InputField.scss'

export interface InputFieldProps {
  icon?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent) => void,
}
const InputField = (props: InputFieldProps) => {
  return (
    <div className='input-field'>
      <input className='input-field__input' type='text' value={props.value} onChange={props.onChange}/>
      <img className='input-field__icon' src={props.icon}/>
    </div>
  );
};

export default InputField;
