import React, { ChangeEvent, CSSProperties, KeyboardEvent, useEffect, useState } from 'react';
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

  const activateViewMode = () => {
    if (rowId === NEW_ROW_ID) {
      tempValue && onChange(eval(tempValue));
      setTempValue('');
    } else {
      onChange(tempValue ? eval(tempValue) : tempValue);
    }
  };

  const onEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      activateViewMode();
      setTempValue('');
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
      onKeyPress={onEnterPress}
      variant={'standard'}
    />
  );
};
