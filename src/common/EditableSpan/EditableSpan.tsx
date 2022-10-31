import React, { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { NEW_ROW_ID } from '../../bll/reducers/dailyTable-reducer';

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  disabled?: boolean;
  placeholder: string;
  rowId: string;
}

export const EditableSpan: React.FC<Props> = ({ rowId, value, onChange, disabled, placeholder }) => {
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTempValue(e.currentTarget.value);
  };

  const plusInTempValue = (str: string) => {
    let newStr = str;
    if (str.indexOf('+') >= 0) {
      let arr = str.split('+');
      let sum = 0;
      arr.forEach((item) => {
        sum += Number(item);
        newStr = String(sum);
      });
    }
    return newStr;
  };

  const activateViewMode = () => {
    if (rowId === NEW_ROW_ID) {
      tempValue && onChange(plusInTempValue(tempValue));
      setTempValue('');
    } else {
      onChange(tempValue ? plusInTempValue(tempValue) : tempValue);
    }
  };

  const fontColor = {
    WebkitTextFillColor: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 'bold',
  } as CSSProperties;

  return (
    <TextField
      disabled={disabled}
      inputProps={disabled ? { style: fontColor } : undefined}
      value={tempValue}
      onChange={changeInputValue}
      placeholder={placeholder}
      onBlur={activateViewMode}
      variant={'standard'}
    />
  );
};
