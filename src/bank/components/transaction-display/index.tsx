import React from 'react';

import './TransactionDisplay.scss';
import InputField from "../input-field";
import ValuePresetKeyboard from "../value-preset-keyboard";
import {info} from "sass";

export interface TransactionDisplayFieldData {
  name: string,
  label?: string,
  icon?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent) => void
}

export interface TransactionDisplayInfoProperty {
  name: string,
  value: () => React.ReactNode
}

export interface TransactionDisplayInfoData {
  title: string,
  properties: TransactionDisplayInfoProperty[]
}

export interface TransactionDisplayProps {
  fields: TransactionDisplayFieldData[],
  info: TransactionDisplayInfoData,
  onValuePresetClick?: (value: number) => void
}

const TransactionDisplay = (props: TransactionDisplayProps) => {
  return (
    <div className='transaction-display'>
      <div className='transaction-display__fields'>
        {
          props.fields.map(fieldData => (
            <div className='transaction-display__field'>
              <p className='transaction-display__field-label'>{fieldData.label}</p>
              <InputField icon={fieldData.icon} value={fieldData.value} onChange={fieldData.onChange}/>
            </div>
          ))
        }
      </div>
      <ValuePresetKeyboard
        presets={[
          1000,
          5000,
          10000,
          50000
        ]}
        onValuePresetClick={props.onValuePresetClick}
      />
      <div className='transaction-display__info'>
        <p className='transaction-display__info-title'>{props.info.title}</p>
        <div className='transaction-display__info-properties'>
          {
            props.info.properties.map(propertyData => (
              <div className='transaction-display__info-property transaction-info-property'>
                <p className='transaction-info-property__name'>{propertyData.name}</p>
                <div className='transaction-info-property__value-container'>
                  {propertyData.value()}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TransactionDisplay;
